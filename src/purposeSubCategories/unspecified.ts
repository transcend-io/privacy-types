import { makeEnum } from '@transcend-io/type-utils';

export const UnspecifiedPurposeSubCategory = makeEnum({
  /** Fallback sub purpose */
  Unspecified: 'UNSPECIFIED',
});

/**
 * Overload with type of integration
 */
export type UnspecifiedPurposeSubCategory =
  typeof UnspecifiedPurposeSubCategory[keyof typeof UnspecifiedPurposeSubCategory];
