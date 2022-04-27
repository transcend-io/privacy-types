import { makeEnum } from '@transcend-io/type-utils';

export const FinancialSubCategory = makeEnum({
  // TODO: https://transcend.height.app/T-14003 - add more financial subcategories (routing number, etc.)
  /** Fallback subcategory */
  Financial: 'FINANCIAL',
  /** Credit Card Number */
  CreditCardNumber: 'CREDIT_CARD_NUMBER',
});

/**
 * Overload with type of integration
 */
export type FinancialSubCategory =
  typeof FinancialSubCategory[keyof typeof FinancialSubCategory];
