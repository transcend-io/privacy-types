import { makeEnum } from '@transcend-io/type-utils';

import { ConnectionSubCategory } from './connection';
import { ContactSubCategory } from './contact';
import { DemographicSubCategory } from './demographic';
import { DeviceSubCategory } from './device';
import { FinancialSubCategory } from './financial';
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
