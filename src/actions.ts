import { makeEnum } from '@transcend-io/type-utils';

/**
 * The type of requests that allow for opt-in/opt-out
 */
export const RequestActionOptOut = makeEnum({
  /** Opt out of automated decision making */
  AutomatedDecisionMakingOptOut: 'AUTOMATED_DECISION_MAKING_OPT_OUT',
  /** Opt out of all communication */
  ContactOptOut: 'CONTACT_OPT_OUT',
  /** Opt-out of the sale of personal data */
  SaleOptOut: 'SALE_OPT_OUT',
  /** Opt out of tracking */
  TrackingOptOut: 'TRACKING_OPT_OUT',
});

/** Type override */
export type RequestActionOptOut =
  typeof RequestActionOptOut[keyof typeof RequestActionOptOut];

/**
 * An request action resolve types that can be run at the object level
 */
export const RequestActionObjectResolver = makeEnum({
  /** Data Download request */
  Access: 'ACCESS',
  /** Erase the file completely */
  Erasure: 'ERASURE',
  /** Opt out of automated decision making */
  AutomatedDecisionMakingOptOut: 'AUTOMATED_DECISION_MAKING_OPT_OUT',
  /** A contact opt out request */
  ContactOptOut: 'CONTACT_OPT_OUT',
  /** Opt-out of the sale of personal data */
  SaleOptOut: 'SALE_OPT_OUT',
  /** A tracking opt out request */
  TrackingOptOut: 'TRACKING_OPT_OUT',
  /** Make an update to an inaccurate record */
  Rectification: 'RECTIFICATION',
  /** A restriction of processing request */
  Restriction: 'RESTRICTION',
  /** Business Purpose Report */
  BusinessPurpose: 'BUSINESS_PURPOSE',
});

/** Type override */
export type RequestActionObjectResolver =
  typeof RequestActionObjectResolver[keyof typeof RequestActionObjectResolver];

/**
 * The privacy actions that can be set at the object level for a
 * data silo configured as webhook or cron integration.
 *
 * Privacy actions are specified globally and logic is left to the
 * webhook service to implement. The individual objects can still be
 * labeled for whether they should be included in data access requests.
 */
export const InternalDataSiloObjectResolver = makeEnum({
  /** Data Download request */
  Access: 'ACCESS',
});

/** Type override */
export type InternalDataSiloObjectResolver =
  typeof InternalDataSiloObjectResolver[keyof typeof InternalDataSiloObjectResolver];

/**
 * The types of requests that Data Subject can make
 */
export const RequestAction = makeEnum({
  ...RequestActionOptOut,
  /** Data Download request */
  Access: 'ACCESS',
  /** Erase the profile from the system */
  Erasure: 'ERASURE',
  /** Make an update to an inaccurate record */
  Rectification: 'RECTIFICATION',
  /** Restrict processing */
  Restriction: 'RESTRICTION',
  /** Business Purpose Report */
  BusinessPurpose: 'BUSINESS_PURPOSE',
});

/** Type override */
export type RequestAction = typeof RequestAction[keyof typeof RequestAction];
