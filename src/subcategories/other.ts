import { makeEnum } from '@transcend-io/type-utils';

/** Information that does not belong to an individual */
export const OtherDataSubCategory = makeEnum({
  /** Fallback subcategory */
  Other: 'OTHER',
});

/**
 * Overload with type of integration
 */
export type OtherDataSubCategory =
  typeof OtherDataSubCategory[keyof typeof OtherDataSubCategory];
