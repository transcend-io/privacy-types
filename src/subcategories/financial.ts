import { makeEnum } from '@transcend-io/type-utils';

export const FinancialSubCategory = makeEnum({
  /** Fallback subcategory */
  Financial: 'FINANCIAL',
  /** Credit Card Number */
  CreditCardNumber: 'CREDIT_CARD_NUMBER',
  /** Account number */
  AccountNumber: 'ACCOUNT_NUMBER',
  /** Income */
  Income: 'INCOME',
  /** Tax information */
  Tax: 'TAX',
  /** Routing number */
  RoutingNumber: 'ROUTING_NUMBER',
  /** Billing address */
  BillingAddress: 'BILLING_ADDRESS',
  /** Purchase history */
  PurchaseHistory: 'PURCHASE_HISTORY',
});

/**
 * Overload with type of integration
 */
export type FinancialSubCategory =
  typeof FinancialSubCategory[keyof typeof FinancialSubCategory];
