import { NextRequest, NextResponse } from "next/server";

// Define protected routes that require authentication
const protectedRoutes = ["/", "/users", "/roles", "/permissions", "/settings"];
// Define auth routes that should redirect to dashboard if already authenticated
const authRoutes = ["/login", "/register"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Get the auth token from cookies
  const token = request.cookies.get("auth_token")?.value;
  
  // Check if user is authenticated (has valid token)
  const isAuthenticated = !!token;

  // Handle auth routes (/login, /register)
  if (authRoutes.some((route) => pathname.startsWith(route))) {
    if (isAuthenticated) {
      // If user is authenticated, redirect to dashboard
      return NextResponse.redirect(new URL("/", request.url));
    }
    // If not authenticated, allow access to login/register
    return NextResponse.next();
  }

  // Handle protected routes (dashboard, users, roles, permissions, settings)
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!isAuthenticated) {
      // If not authenticated, redirect to login
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Allow access to all other routes (public assets, etc.)
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
     * - public files (public folder)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
