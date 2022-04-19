import { makeEnum } from '@transcend-io/type-utils';

import { ContactSubCategory } from './contact';
import { FinancialSubCategory } from './financial';

export const DefaultDataSubCategoryType = makeEnum({
  ...ContactSubCategory,
  ...FinancialSubCategory,
  // TODO: https://transcend.height.app/T-14003 - add more subcategories (health, demographic, etc.)
});

/**
 * Overload with type of integration
 */
export type DefaultDataSubCategoryType =
  typeof DefaultDataSubCategoryType[keyof typeof DefaultDataSubCategoryType];
