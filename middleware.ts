import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { geolocation } from '@vercel/functions';

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