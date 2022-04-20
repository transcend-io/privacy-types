import { makeEnum } from '@transcend-io/type-utils';

export const IdSubCategory = makeEnum({
  // TODO: https://transcend.height.app/T-14003 - add more subcategories
  /** Fallback subcategory */
  Id: 'id',
});

/**
 * Overload with type of integration
 */
export type IdSubCategory = typeof IdSubCategory[keyof typeof IdSubCategory];
