import { makeEnum } from '@transcend-io/type-utils';

import { AdditionalPurposeSubCategory } from './additional';
import { AdvertisingPurposeSubCategory } from './advertising';
import { AnalyticsPurposeSubCategory } from './analytics';
import { EssentialPurposeSubCategory } from './essential';
import { HRPurposeSubCategory } from './hr';
import { LegalPurposeSubCategory } from './legal';
import { MarketingPurposeSubCategory } from './marketing';
import { OperationSecurityPurposeSubCategory } from './operationSecurity';
import { OtherPurposeSubCategory } from './other';
import { PersonalizationPurposeSubCategory } from './personalization';
import { SalePurposeSubCategory } from './sale';
import { TransferPurposeSubCategory } from './transfer';

export const DefaultPurposeSubCategoryType = makeEnum({
  ...AdditionalPurposeSubCategory,
  ...AdvertisingPurposeSubCategory,
  ...AnalyticsPurposeSubCategory,
  ...EssentialPurposeSubCategory,
  ...HRPurposeSubCategory,
  ...LegalPurposeSubCategory,
  ...MarketingPurposeSubCategory,
  ...OperationSecurityPurposeSubCategory,
  ...OtherPurposeSubCategory,
  ...PersonalizationPurposeSubCategory,
  ...SalePurposeSubCategory,
  ...TransferPurposeSubCategory,
});

/**
 * Overload type
 */
export type DefaultPurposeSubCategoryType =
  typeof DefaultPurposeSubCategoryType[keyof typeof DefaultPurposeSubCategoryType];
