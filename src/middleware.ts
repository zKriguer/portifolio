import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest, NextResponse } from "next/server";

const I18nMiddleware = createI18nMiddleware(["en", "pt-Br"] as const, "pt-Br");

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const response = I18nMiddleware(request);

  return response;
}

export const config = {
  matcher: ["/((?!_next|assets).*)"],
};
