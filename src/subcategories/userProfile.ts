import { makeEnum } from '@transcend-io/type-utils';

export const UserProfileSubCategory = makeEnum({
  // TODO: https://transcend.height.app/T-14003 - add more subcategories
  /** Fallback subcategory */
  UserProfile: 'userProfile',
});

/**
 * Overload with type of integration
 */
export type UserProfileSubCategory =
  typeof UserProfileSubCategory[keyof typeof UserProfileSubCategory];
