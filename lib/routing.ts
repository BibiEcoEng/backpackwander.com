import { siteConfig } from '@/lib/site';
import type { LanguageCode } from '@/lib/translations';

export const locales = ['en', 'de'] as const;
export type Locale = LanguageCode;

export const defaultLocale: LanguageCode = 'en';

export function isLocale(value: string | null | undefined): value is LanguageCode {
  return value === 'en' || value === 'de';
}

export function getLocaleFromHost(hostname: string): LanguageCode {
  return hostname.endsWith('.de') ? 'de' : 'en';
}

export function getLocaleFromPath(pathname: string): LanguageCode | null {
  const match = pathname.match(/^\/(en|de)(?:\/|$)/);
  return isLocale(match?.[1]) ? match[1] : null;
}

export function stripLocalePrefix(pathname: string): string {
  const stripped = pathname.replace(/^\/(en|de)(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
}

export function getLocalizedPath(locale: LanguageCode, pathname: string): string {
  const strippedPath = stripLocalePrefix(pathname);

  if (locale === defaultLocale) {
    return strippedPath;
  }

  return strippedPath === '/' ? `/${locale}` : `/${locale}${strippedPath}`;
}

/** Internal App Router path (always includes locale segment). */
export function getInternalLocalePath(locale: LanguageCode, pathname: string): string {
  const strippedPath = stripLocalePrefix(pathname);
  return strippedPath === '/' ? `/${locale}` : `/${locale}${strippedPath}`;
}

export function getLocalizedUrl(locale: LanguageCode, pathname: string): string {
  return `${siteConfig.domains[locale]}${getLocalizedPath(locale, pathname)}`;
}
