import { makeEnum } from '@transcend-io/type-utils';

export const SocialMediaSubCategory = makeEnum({
  /** Fallback subcategory */
  SocialMedia: 'SOCIAL_MEDIA',
  /** Profile */
  Profile: 'PROFILE',
  /** Messages */
  Messages: 'MESSAGES',
  /** Interactions */
  Interactions: 'INTERACTIONS',
  /** Relationships */
  Relationships: 'RELATIONSHIPS',
});

/**
 * Overload with type of integration
 */
export type SocialMediaSubCategory =
  typeof SocialMediaSubCategory[keyof typeof SocialMediaSubCategory];
