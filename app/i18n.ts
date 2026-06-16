import en from './locales/en.json';
import fr from './locales/fr.json';

export type Locale = 'en' | 'fr';
export const DEFAULT_LOCALE: Locale = 'fr';

export const AVAILABLE_LOCALES: Locale[] = ['en', 'fr'];

const messages: Record<Locale, Record<string, string>> = {
  en,
  fr,
};

export function getLocaleFromSearchParams(searchParams: URLSearchParams | null): Locale {
  if (!searchParams) return DEFAULT_LOCALE;

  const candidate = searchParams.get('lang');
  if (candidate === 'fr' || candidate === 'en') {
    return candidate;
  }

  return DEFAULT_LOCALE;
}

export function t(locale: Locale, key: string): string {
  const localMessages = messages[locale] || messages[DEFAULT_LOCALE];
  return localMessages[key] ?? messages[DEFAULT_LOCALE][key] ?? key;
}
