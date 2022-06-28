import { makeEnum } from '@transcend-io/type-utils';

/** Information that can be used to identify an individual */
export const NotPersonalDataSubCategory = makeEnum({
  /** Fallback subcategory */
  NOT_PERSONAL_DATA: 'NOT_PERSONAL_DATA',
});

/**
 * Overload with type of integration
 */
export type NotPersonalDataSubCategory =
  typeof NotPersonalDataSubCategory[keyof typeof NotPersonalDataSubCategory];
