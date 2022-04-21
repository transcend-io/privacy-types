import { makeEnum } from '@transcend-io/type-utils';

export const DemographicSubCategory = makeEnum({
  // TODO: https://transcend.height.app/T-14003 - add more subcategories
  /** Fallback subcategory */
  Demographic: 'DEMOGRAPHIC',
});

/**
 * Overload with type of integration
 */
export type DemographicSubCategory =
  typeof DemographicSubCategory[keyof typeof DemographicSubCategory];
