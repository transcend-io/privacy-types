import { makeEnum } from '@transcend-io/type-utils';

export const FinancialSubCategory = makeEnum({
  /** Credit Card Number */
  CreditCardNumber: 'CREDIT_CARD_NUMBER',
  // TODO: https://transcend.height.app/T-14003 - add more financial subcategories (routing number, etc.)
  /** Fallback subcategory */
  Financial: 'FINANCIAL',
});

/**
 * Overload with type of integration
 */
export type FinancialSubCategory =
  typeof FinancialSubCategory[keyof typeof FinancialSubCategory];
