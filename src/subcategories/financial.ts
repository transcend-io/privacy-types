import { makeEnum } from '@transcend-io/type-utils';

export const FinancialSubCategory = makeEnum({
  /** Credit Card Number */
  CreditCardNumber: 'creditCardNumber',
});

/**
 * Overload with type of integration
 */
export type FinancialSubCategory =
  typeof FinancialSubCategory[keyof typeof FinancialSubCategory];
