import { makeEnum } from '@transcend-io/type-utils';

export const IdSubCategory = makeEnum({
  /** Fallback subcategory */
  Id: 'ID',
  /** Username */
  Username: 'USERNAME',
  /** Email */
  Email: 'EMAIL',
  /** Phone number */
  PhoneNumber: 'PHONE_NUMBER',
  /** Profile image */
  ProfileImage: 'PROFILE_IMAGE',
  /** (US) Social security number */
  SocialSecurityNumber: 'SOCIAL_SECURITY_NUMBER',
  /** Driver's license */
  DriversLicense: 'DRIVERS_LICENSE',
  /** Passport number */
  PassportNumber: 'PASSPORT_NUMBER',
});

/**
 * Overload with type of integration
 */
export type IdSubCategory = typeof IdSubCategory[keyof typeof IdSubCategory];
