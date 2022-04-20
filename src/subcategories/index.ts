import { makeEnum } from '@transcend-io/type-utils';

import { ContactSubCategory } from './contact';
import { FinancialSubCategory } from './financial';
import { ConnectionSubCategory } from './connection';
import { DemographicSubCategory } from './demographic';
import { DeviceSubCategory } from './device';
import { HealthSubCategory } from './health';
import { IdSubCategory } from './id';
import { LocationSubCategory } from './location';
import { OnlineActivitySubCategory } from './onlineActivity';
import { SocialMediaSubCategory } from './socialMedia';
import { SurveySubCategory } from './survey';
import { TrackingSubCategory } from './tracking';
import { UnspecifiedSubCategory } from './unspecified';
import { UserProfileSubCategory } from './userProfile';

export const DefaultDataSubCategoryType = makeEnum({
  ...ConnectionSubCategory,
  ...ContactSubCategory,
  ...DemographicSubCategory,
  ...DeviceSubCategory,
  ...FinancialSubCategory,
  ...HealthSubCategory,
  ...IdSubCategory,
  ...LocationSubCategory,
  ...OnlineActivitySubCategory,
  ...SocialMediaSubCategory,
  ...SurveySubCategory,
  ...TrackingSubCategory,
  ...UnspecifiedSubCategory,
  ...UserProfileSubCategory,
});

/**
 * Overload with type of integration
 */
export type DefaultDataSubCategoryType =
  typeof DefaultDataSubCategoryType[keyof typeof DefaultDataSubCategoryType];
