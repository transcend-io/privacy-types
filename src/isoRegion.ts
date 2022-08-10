import * as t from 'io-ts';

import { makeEnum, valuesOf } from '@transcend-io/type-utils';

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

export const IsoCountryCode = makeEnum(getDictFromKeys(ISO_31661));
export const IsoCountrySubdivisionCode = makeEnum(getDictFromKeys(ISO_31662));

export const IsoRegion = t.intersection([
  t.type({
    /** the ISO 3166-1 country code */
    countryCode: valuesOf(IsoCountryCode),
  }),
  t.partial({
    /** the ISO 3166-2 country subdivision code */
    countrySubdivisionCode: valuesOf(IsoCountrySubdivisionCode),
  }),
]);

/** Override type. */
export type IsoRegion = t.TypeOf<typeof IsoRegion>;
