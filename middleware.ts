import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host");

  if (!hostname) {
    return NextResponse.next();
  }

  const subdomain = hostname.split(".")[0];

  if (subdomain === "delulu-jar") {
    url.pathname = `/delulu-jar${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  if (subdomain === "ducky-bank") {
    url.pathname = `/ducky-bank${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  if (subdomain === "storage-squeeze") {
    url.pathname = `/storage-squeeze${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // Default to main site
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
