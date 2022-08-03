import { makeEnum } from '@transcend-io/type-utils';

export const ContactSubCategory = makeEnum({
  /** An email address */
  Email: 'EMAIL',
  /** A phone number */
  Phone: 'PHONE',
  /**
   * How to refer to someone (e.g. Sir/Madam/Mr/Ms)
   *
   * @deprecated
   */
  Title: 'TITLE',
  /** Fallback subcategory */
  Contact: 'CONTACT',
});

/**
 * Overload with type of integration
 */
export type ContactSubCategory =
  typeof ContactSubCategory[keyof typeof ContactSubCategory];
