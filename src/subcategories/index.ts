import { makeEnum } from '@transcend-io/type-utils';

import { FinancialSubCategory } from './financial';
import { CommunicationIdentifierType } from '../identifier';

export const DefaultDataSubCategoryType = makeEnum({
  ...CommunicationIdentifierType,
  ...FinancialSubCategory,
});

/**
 * Overload with type of integration
 */
export type DefaultDataSubCategoryType =
  typeof DefaultDataSubCategoryType[keyof typeof DefaultDataSubCategoryType];
