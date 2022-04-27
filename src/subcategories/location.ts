import { makeEnum } from '@transcend-io/type-utils';

export const LocationSubCategory = makeEnum({
  // TODO: https://transcend.height.app/T-14003 - add more subcategories
  /** Fallback subcategory */
  Location: 'LOCATION',
});

/**
 * Overload with type of integration
 */
export type LocationSubCategory =
  typeof LocationSubCategory[keyof typeof LocationSubCategory];
