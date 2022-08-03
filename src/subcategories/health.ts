import { makeEnum } from '@transcend-io/type-utils';

/** Information about an individual's health */
export const HealthSubCategory = makeEnum({
  /**
   * Information relating to an individual's health insurance
   *
   * @deprecated
   */
  Insurance: 'INSURANCE',
  /**
   * Biometric data from an individual like heart rate or fitness level information
   *
   * @deprecated
   */
  Biometrics: 'BIOMETRICS',
  /**
   * An individual's genetic data
   *
   * @deprecated
   */
  Genetics: 'GENETICS',
  /** Fallback subcategory */
  Health: 'HEALTH',
});

/**
 * Overload with type of integration
 */
export type HealthSubCategory =
  typeof HealthSubCategory[keyof typeof HealthSubCategory];
