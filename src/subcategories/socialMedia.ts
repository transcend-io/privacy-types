import { makeEnum } from '@transcend-io/type-utils';

export const SocialMediaSubCategory = makeEnum({
  /** Fallback subcategory */
  SocialMedia: 'SOCIAL_MEDIA',
  /** A link to an individual's social media profile */
  ProfileURL: 'PROFILE_URL',
});

/**
 * Overload with type of integration
 */
export type SocialMediaSubCategory =
  typeof SocialMediaSubCategory[keyof typeof SocialMediaSubCategory];
