import { makeEnum } from '@transcend-io/type-utils';

export const HealthSubCategory = makeEnum({
  // TODO: https://transcend.height.app/T-14003 - add more subcategories
  /** Fallback subcategory */
  Health: 'health',
});

/**
 * Overload with type of integration
 */
export type HealthSubCategory =
  typeof HealthSubCategory[keyof typeof HealthSubCategory];
