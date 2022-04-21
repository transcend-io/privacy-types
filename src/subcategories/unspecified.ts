import { makeEnum } from '@transcend-io/type-utils';

export const UnspecifiedSubCategory = makeEnum({
  /** Fallback subcategory */
  Unspecified: 'UNSPECIFIED',
});

/**
 * Overload with type of integration
 */
export type UnspecifiedSubCategory =
  typeof UnspecifiedSubCategory[keyof typeof UnspecifiedSubCategory];
