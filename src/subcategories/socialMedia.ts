import { makeEnum } from '@transcend-io/type-utils';

export const SocialMediaSubCategory = makeEnum({
  // TODO: https://transcend.height.app/T-14003 - add more subcategories
  /** Fallback subcategory */
  SocialMedia: 'SOCIAL_MEDIA',
});

/**
 * Overload with type of integration
 */
export type SocialMediaSubCategory =
  typeof SocialMediaSubCategory[keyof typeof SocialMediaSubCategory];
