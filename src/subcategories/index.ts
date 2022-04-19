import { makeEnum } from '@transcend-io/type-utils';

import { ContactSubCategory } from './contact';
import { FinancialSubCategory } from './financial';

export const DefaultDataSubCategoryType = makeEnum({
  ...ContactSubCategory,
  ...FinancialSubCategory,
});

/**
 * Overload with type of integration
 */
export type DefaultDataSubCategoryType =
  typeof DefaultDataSubCategoryType[keyof typeof DefaultDataSubCategoryType];
