import { makeEnum } from '@transcend-io/type-utils';

export const ConnectionSubCategory = makeEnum({
  // TODO: https://transcend.height.app/T-14003 - add more subcategories
  /** Fallback subcategory */
  Connection: 'CONNECTION',
});

/**
 * Overload with type of integration
 */
export type ConnectionSubCategory =
  typeof ConnectionSubCategory[keyof typeof ConnectionSubCategory];
