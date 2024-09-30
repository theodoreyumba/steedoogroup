import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server';
import { generateNonce } from '@/utils/middleware/nonce'; // Make sure to create this utility function

export async function middleware(request: NextRequest) {
  try {
    const { pathname } = request.nextUrl;

    // Generate nonce
    const nonce = generateNonce();

    // List of paths that don't require authentication
    const publicPaths = ['/signin', '/api/auth', '/api/status', '/api/help/zendesk/submit-ticket', '/status', '/_next', '/static', '/images', '/.swa', '/.test', '/swa-db-connections'];
    const publicExtensions = ['.json', '.js'];

    // Check if the current path is in the public paths
    const isPublicPath = publicPaths.some(path => pathname.startsWith(path));
    const isPublicExtension = publicExtensions.some(extension => pathname.endsWith(extension));


    // If all checks pass, proceed with the request
    const response = NextResponse.next();

    // Add nonce to response headers
    response.headers.set('x-nonce', nonce);
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

    // Add nonce to response headers
    response.headers.set('x-nonce', nonce);

    return response;

  } catch (error) {
    console.error('Error in middleware:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

// Function to determine required permissions based on the pathname
function getRequiredPermissions(pathname: string): string[] {
  if (pathname.startsWith('/admin')) {
    return ['create_approval_flow', 'view_all_requests'];
  }
  if (pathname.startsWith('/finance')) {
    return ['manage_budget'];
  }
  return [];
}

export const config = {
  matcher: [
    '/((?!.swa|.swa/health|api/auth|_next|static|favicon.ico|images|.*\\.json|.*\\.js).*)',
    '/((?!api/auth).*)',
  ],
};