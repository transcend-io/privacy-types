import { makeEnum } from '@transcend-io/type-utils';

export const ContactSubCategory = makeEnum({
  /** An email address */
  Email: 'EMAIL',
  /** A phone number */
  Phone: 'PHONE',
  /** A mailing address */
  MailingAddress: 'MAILING_ADDRESS',
  /** First, last, middle names */
  Name: 'NAME',
  /** The title to refer to the person */
  Title: 'TITLE',
  /** Fallback subcategory */
  Contact: 'CONTACT',
});

/**
 * Overload with type of integration
 */
export type ContactSubCategory =
  typeof ContactSubCategory[keyof typeof ContactSubCategory];
