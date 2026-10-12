import { NextResponse } from "next/server";

export function middleware(request) {
  const session = request.cookies.get("finlearn_session")?.value;
  if (!session) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = { matcher: ["/home/:path*", "/dashboard/:path*", "/learn/:path*", "/tutor/:path*", "/profile/:path*"] };
