import { NextRequest } from "next/server";

import { createI18nMiddleware } from "next-international/middleware";

/*
  info:For better setup of next-international read the following links
  @link:https://next-international.vercel.app/docs/app-setup
  @link:https://next-international.vercel.app/docs/app-middleware-configuration#rewrite-the-url-to-hide-the-locale
*/
const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "fa"],
  defaultLocale: "en",
  urlMappingStrategy: "rewrite"
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"]
};
