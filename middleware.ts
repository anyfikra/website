import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host");

  if (!hostname) {
    return NextResponse.next();
  }

  const subdomain = hostname.split(".")[0];

  if (subdomain === "delulujar") {
    url.pathname = `/delulu-jar${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  if (subdomain === "ducky-bank") {
    // Pages link to /ducky-bank/... directly; don't prefix those twice.
    if (!url.pathname.startsWith("/ducky-bank")) {
      url.pathname = `/ducky-bank${url.pathname}`;
    }
    return NextResponse.rewrite(url);
  }

  // Default to main site
  return NextResponse.next();
}

// Shared assets (images, icons, the share image) are served from the root on
// every host, so subdomains must not rewrite them into an app's route. Any path
// with a file extension is an asset from public/ (page routes have none).
export const config = {
  matcher: [
    "/((?!api|_next/|favicon.ico|icon|apple-icon|opengraph-image|.*\\..*).*)",
  ],
};
