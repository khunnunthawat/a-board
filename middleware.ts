import { NextResponse } from 'next/server';

export function middleware(req: Request) {
  const res = NextResponse.next();

  res.headers.set(
    'Access-Control-Allow-Origin',
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3004'
  );
  res.headers.set(
    'Access-Control-Allow-Methods',
    'GET,HEAD,PUT,PATCH,POST,DELETE'
  );
  res.headers.set(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization'
  );
  res.headers.set('Access-Control-Allow-Credentials', 'true');

  return res;
}

export const config = {
  matcher: '/api/:path*',
};
