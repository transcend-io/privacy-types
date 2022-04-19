import { makeEnum } from '@transcend-io/type-utils';

export const ContactSubCategory = makeEnum({
  /** An email address */
  Email: 'email',
  /** A phone number */
  Phone: 'phone',
});

/**
 * Overload with type of integration
 */
export type ContactSubCategory =
  typeof ContactSubCategory[keyof typeof ContactSubCategory];
