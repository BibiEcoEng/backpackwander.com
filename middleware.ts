import { NextRequest, NextResponse } from 'next/server';
import { siteConfig } from '@/lib/site';
import {
  defaultLocale,
  getInternalLocalePath,
  getLocaleFromHost,
  getLocaleFromPath,
  getLocalizedPath,
  stripLocalePrefix
} from '@/lib/routing';

const PUBLIC_FILE = /\.(.*)$/;

function isBypassedPath(pathname: string) {
  return (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/images/') ||
    pathname.startsWith('/Images/') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    PUBLIC_FILE.test(pathname)
  );
}

function getHost(request: NextRequest) {
  return request.headers.get('x-forwarded-host') ?? request.headers.get('host') ?? '';
}

function withLocaleHeader(request: NextRequest, locale: string) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-locale', locale);
  return requestHeaders;
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (isBypassedPath(pathname)) {
    return NextResponse.next();
  }

  const host = getHost(request);
  const hostLocale = getLocaleFromHost(host);

  // Redirect legacy /en URLs to clean English URLs (no locale prefix).
  if (/^\/en(?:\/|$)/.test(pathname)) {
    const cleanPath = stripLocalePrefix(pathname);
    const targetUrl = new URL(`${cleanPath}${search}`, request.url);
    return NextResponse.redirect(targetUrl);
  }

  const pathLocale = getLocaleFromPath(pathname);

  if (pathLocale === 'de') {
    const pathMatchesDomain = host.endsWith('.de');

    if (!pathMatchesDomain && (host.endsWith('.de') || host.endsWith('.com'))) {
      const targetUrl = new URL(`${getLocalizedPath('de', pathname)}${search}`, siteConfig.domains.de);
      return NextResponse.redirect(targetUrl);
    }

    return NextResponse.next({ request: { headers: withLocaleHeader(request, 'de') } });
  }

  // Unprefixed paths on German domains should use /de prefix.
  if (hostLocale === 'de') {
    const targetPath = getLocalizedPath('de', pathname);
    const targetUrl = new URL(`${targetPath}${search}`, request.url);
    return NextResponse.redirect(targetUrl);
  }

  // Default English: rewrite to internal /en route while keeping clean URL.
  const internalPath = getInternalLocalePath(defaultLocale, pathname);
  const rewriteUrl = new URL(`${internalPath}${search}`, request.url);

  return NextResponse.rewrite(rewriteUrl, {
    request: { headers: withLocaleHeader(request, defaultLocale) }
  });
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)']
};
