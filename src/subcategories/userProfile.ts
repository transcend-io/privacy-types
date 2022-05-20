import { makeEnum } from '@transcend-io/type-utils';

export const UserProfileSubCategory = makeEnum({
  /** Fallback subcategory */
  UserProfile: 'USER_PROFILE',
  /** Information about one's children */
  Children: 'CHILDREN',
  /** Divorce information */
  Divorce: 'DIVORCE',
  /** Information about marital status */
  Marriage: 'MARRIAGE',
  /** Information about death */
  Death: 'DEATH',
  /** Relationship information */
  Relationship: 'RELATIONSHIP',
});

/**
 * Overload with type of integration
 */
export type UserProfileSubCategory =
  typeof UserProfileSubCategory[keyof typeof UserProfileSubCategory];
