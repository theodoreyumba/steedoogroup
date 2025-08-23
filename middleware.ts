import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { geolocation } from '@vercel/functions';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

// List of known bot user agents to exclude from geo-redirect
const BOT_USER_AGENTS = [
  'googlebot',
  'bingbot',
  'slurp',
  'duckduckbot',
  'baiduspider',
  'yandexbot',
  'facebookexternalhit',
  'twitterbot',
  'linkedinbot',
  'whatsapp',
  'slackbot',
  'telegram',
  'applebot',
  'pingdom',
  'uptimerobot',
];

// Supported locales for global site
const locales = ['en', 'fr', 'sw', 'sw-CD', 'ln'];
const defaultLocale = 'en';

function getLocale(request: NextRequest): string {
  // First check if there's a preferred language cookie
  const preferredLanguage = request.cookies.get('preferred-language')?.value;
  if (preferredLanguage && locales.includes(preferredLanguage)) {
    return preferredLanguage;
  }

  // Fall back to Accept-Language header
  const acceptLanguage = request.headers.get('accept-language') ?? undefined;
  const headers = { 'accept-language': acceptLanguage };
  const languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
  const skipRegion = request.headers.get('x-region-skip') === '1';
  
  // Skip middleware for API routes, static files, and Next.js internals
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname.includes('.') // Static files with extensions
  ) {
    return NextResponse.next();
  }
  
  // Check if user agent is a bot
  const isBot = BOT_USER_AGENTS.some(bot => userAgent.includes(bot));
  
  // Skip geo-redirect for bots or if skip header is present
  if (isBot || skipRegion) {
    return NextResponse.next();
  }
  
  // Handle manual region switching
  if (pathname === '/set-region') {
    const to = searchParams.get('to');
    const returnUrl = searchParams.get('return') || '/';
    
    if (to === 'us' || to === 'global') {
      const response = NextResponse.redirect(
        new URL(to === 'us' ? `/us${returnUrl}` : returnUrl, request.url)
      );
      
      // Set cookie for 30 days
      response.cookies.set('regionOverride', to, {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      });
      
      return response;
    }
  }
  
  // Check for existing region override cookie
  const regionOverride = request.cookies.get('regionOverride')?.value;
  
  // If user has manually selected a region, respect it
  if (regionOverride === 'us' && !pathname.startsWith('/us')) {
    return NextResponse.redirect(new URL(`/us${pathname}`, request.url));
  }
  
  if (regionOverride === 'global' && pathname.startsWith('/us')) {
    const globalPath = pathname.replace(/^\/us/, '') || '/';
    return NextResponse.redirect(new URL(globalPath, request.url));
  }
  
  // Geo-based redirect (only on first visit, no override cookie)
  if (!regionOverride) {
    const { country } = geolocation(request);
    
    // If user is from US and not already on US site, redirect
    if (country === 'US' && !pathname.startsWith('/us')) {
      const response = NextResponse.redirect(
        new URL(`/us${pathname}`, request.url),
        { status: 307 } // Temporary redirect
      );
      
      // Set cookie to prevent redirect loops
      response.cookies.set('regionOverride', 'us', {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      });
      
      return response;
    }
  }
  
  // Handle locale routing for global routes (not US routes)
  if (!pathname.startsWith('/us')) {
    // Check if there is any supported locale in the pathname
    const pathnameHasLocale = locales.some(
      (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    // Get the preferred locale from cookie or browser
    const preferredLocale = getLocale(request);
    
    // Determine current locale from pathname
    let currentLocale = defaultLocale;
    for (const locale of locales) {
      if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
        currentLocale = locale;
        break;
      }
    }

    // If user has a different language preference than current URL, redirect them
    if (pathnameHasLocale && currentLocale !== preferredLocale) {
      let newPathname = pathname;
      
      // Remove current locale prefix if present
      if (currentLocale !== defaultLocale) {
        newPathname = pathname.replace(`/${currentLocale}`, '') || '/';
      }
      
      // Add preferred locale prefix if it's not the default
      if (preferredLocale !== defaultLocale) {
        newPathname = `/${preferredLocale}${newPathname}`;
      }
      
      if (newPathname !== pathname) {
        request.nextUrl.pathname = newPathname;
        return NextResponse.redirect(request.nextUrl);
      }
    }

    // Redirect if there is no locale
    if (!pathnameHasLocale) {
      // Only add locale prefix if it's not the default locale
      if (preferredLocale !== defaultLocale) {
        request.nextUrl.pathname = `/${preferredLocale}${pathname}`;
        return NextResponse.redirect(request.nextUrl);
      }
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};