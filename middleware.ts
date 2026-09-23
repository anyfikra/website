import { NextRequest, NextResponse } from "next/server";

const DELULU_LEGAL_PAGES: Record<string, string> = {
  "/privacy": "https://delulujar.com/privacy",
  "/terms": "https://delulujar.com/terms",
};

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host");

  if (!hostname) {
    return NextResponse.next();
  }

  const subdomain = hostname.split(".")[0];

  if (subdomain === "delulu-jar") {
    // The legal pages moved to delulujar.com. The equivalent redirect for
    // anyfikra.com/delulu-jar/* lives in next.config.js, but that runs before
    // this rewrite and never sees the un-prefixed subdomain path, so the
    // subdomain needs its own hop or it would rewrite into a deleted route.
    const moved = DELULU_LEGAL_PAGES[url.pathname];
    if (moved) {
      return NextResponse.redirect(moved, 308);
    }

    url.pathname = `/delulu-jar${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  if (subdomain === "ducky-bank") {
    url.pathname = `/ducky-bank${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // Default to main site
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
