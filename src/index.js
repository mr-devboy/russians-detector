import {
  RUSSIAN_TIMEZONES,
  RUSSIAN_CODE_ALPHA2,
  RUSSIAN_CODE_ALPHA3,
  PUNYCODE_PREFIX,
} from './config.js';
import { getIP, getCountryByIP } from './helpers.js';

export function isRussian() {
  const timeZone = Intl.DateTimeFormat()
    .resolvedOptions()
    .timeZone.toLowerCase();
  const browserLanguage = navigator.language.toLowerCase();
  const documentReferrer = document.referrer;

  const isRussianTimezone = RUSSIAN_TIMEZONES.includes(timeZone);
  const isRussianBrowserLanguage =
    browserLanguage.includes(RUSSIAN_CODE_ALPHA2) ||
    browserLanguage.includes(RUSSIAN_CODE_ALPHA3);

  let isRussianReferrer = false;
  try {
    const referrerHostname = new URL(documentReferrer).hostname;
    const splittedReferrer = referrerHostname.split('.');
    isRussianReferrer =
      referrerHostname.startsWith(PUNYCODE_PREFIX) ||
      splittedReferrer.includes(RUSSIAN_CODE_ALPHA2) ||
      splittedReferrer.includes(RUSSIAN_CODE_ALPHA3);
  } catch (e) {}

  return isRussianTimezone || (isRussianBrowserLanguage && isRussianReferrer);
}

export function isRussianByIP() {
  return getIP()
    .then((ip) => getCountryByIP(ip))
    .then((country) => {
      return [RUSSIAN_CODE_ALPHA2, RUSSIAN_CODE_ALPHA3].includes(
        country.toLowerCase()
      );
    })
    .catch(() => undefined);
}
