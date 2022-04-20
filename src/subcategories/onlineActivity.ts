import { makeEnum } from '@transcend-io/type-utils';

export const OnlineActivitySubCategory = makeEnum({
  // TODO: https://transcend.height.app/T-14003 - add more subcategories
  /** Fallback subcategory */
  OnlineActivity: 'onlineActivity',
});

/**
 * Overload with type of integration
 */
export type OnlineActivitySubCategory =
  typeof OnlineActivitySubCategory[keyof typeof OnlineActivitySubCategory];
