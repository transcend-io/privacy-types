import { makeEnum } from '@transcend-io/type-utils';

import { ISO_31661 } from './isoConstants/iso3166-1';
import { ISO_31662 } from './isoConstants/iso3166-2';

/**
 * gets a typed Dictionary (identical key/values) from a source lookup object
 *
 * @param source - the source lookup
 * @returns the typed dictionary
 */
function getDictFromKeys<T>(source: T): {
  [K in keyof T]: K;
} {
  return Object.fromEntries(
    Object.keys(source).map((code) => [code, code]),
  ) as any;
}

/**
 * Country Code taken from https://github.com/umpirsky/country-list/blob/master/data/en/country.json
 */
export const IsoCountryCode = makeEnum(getDictFromKeys(ISO_31661));

/** Type override */
export type IsoCountryCode = typeof IsoCountryCode[keyof typeof IsoCountryCode];

/**
 * Country subdivisions taken from taken from https://github.com/wooorm/iso-3166/blob/main/2.js
 */
export const IsoCountrySubdivisionCode = makeEnum(getDictFromKeys(ISO_31662));

/** Type override */
export type IsoCountrySubdivisionCode =
  typeof IsoCountrySubdivisionCode[keyof typeof IsoCountrySubdivisionCode];
