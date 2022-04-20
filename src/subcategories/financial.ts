import { makeEnum } from '@transcend-io/type-utils';

export const FinancialSubCategory = makeEnum({
  /** Credit Card Number */
  CreditCardNumber: 'creditCardNumber',
  // TODO: https://transcend.height.app/T-14003 - add more financial subcategories (routing number, etc.)
  /** Fallback subcategory */
  Financial: 'financial',
});

/**
 * Overload with type of integration
 */
export type FinancialSubCategory =
  typeof FinancialSubCategory[keyof typeof FinancialSubCategory];
