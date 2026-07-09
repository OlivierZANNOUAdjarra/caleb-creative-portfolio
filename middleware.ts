import { NextRequest, NextResponse } from 'next/server';
import { verifySessionToken } from '@/lib/auth';

export function middleware(request: NextRequest) {
  const isLoginPage = request.nextUrl.pathname === '/dashboard/login';
  const token = request.cookies.get('cc_session')?.value;
  const isValid = verifySessionToken(token);

  if (isLoginPage) {
    if (isValid) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    return NextResponse.next();
  }

  if (!isValid) {
    return NextResponse.redirect(new URL('/dashboard/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
