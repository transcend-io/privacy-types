import { makeEnum } from '@transcend-io/type-utils';

export const ContactSubCategory = makeEnum({
  /** An email address */
  Email: 'email',
  /** A phone number */
  Phone: 'phone',
  // TODO: https://transcend.height.app/T-14003 - add more contact subcategories (address, etc.)
  /** Fallback subcategory */
  Contact: 'contact',
});

/**
 * Overload with type of integration
 */
export type ContactSubCategory =
  typeof ContactSubCategory[keyof typeof ContactSubCategory];
