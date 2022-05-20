import { makeEnum } from '@transcend-io/type-utils';

export const DemographicSubCategory = makeEnum({
  /** Demographic data about race */
  Race: 'RACE',
  /** Demographic data about gender */
  Gender: 'GENDER',
  /** Demographic data about birth date */
  DateOfBirth: 'DATE_OF_BIRTH',
  /** Demographic data about location */
  Location: 'LOCATION',
  /** Demographic data about industry (occupation) */
  Industry: 'INDUSTRY',
  /** Demographic data about sexual orientation */
  SexualOrientation: 'SEXUAL_ORIENTATION',
  // TODO: https://transcend.height.app/T-14003 - add more subcategories
  /** Fallback subcategory */
  Demographic: 'DEMOGRAPHIC',
});

/**
 * Overload with type of integration
 */
export type DemographicSubCategory =
  typeof DemographicSubCategory[keyof typeof DemographicSubCategory];
