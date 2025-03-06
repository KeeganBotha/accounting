import { NextRequest, NextResponse } from "next/server";

import { auth } from "@/auth";

const PUBLIC_ROUTES = ["/login"];

export async function middleware(req: NextRequest) {
  const session = await auth();

  const { nextUrl } = req;
  const currLocation = nextUrl?.pathname;
  const isAuthenticated = !!session;
  const isPublicRoute = PUBLIC_ROUTES.includes(currLocation);

  if (!isAuthenticated && !isPublicRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
