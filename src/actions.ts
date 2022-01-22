import { makeEnum } from '@transcend-io/type-utils';

/**
 * The type of requests that allow for opt-in/opt-out
 */
export const RequestActionOpt = makeEnum({
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
export type RequestActionOpt =
  typeof RequestActionOpt[keyof typeof RequestActionOpt];

/**
 * The types of requests that Data Subject can make
 */
export const RequestAction = makeEnum({
  ...RequestActionOpt,
  /** Data Download request */
  Access: 'ACCESS',
  /** Erase the profile from the system */
  Erasure: 'ERASURE',
  /** Run an account deletion instead of a fully compliant deletion */
  AccountDeletion: 'ACCOUNT_DELETION',
  /** Make an update to an inaccurate record */
  Rectification: 'RECTIFICATION',
  /** Restrict processing */
  Restriction: 'RESTRICTION',
  /** Check for data (after an erasure request) */
  DataCheck: 'DATA_CHECK',
});

/** Type override */
export type RequestAction = typeof RequestAction[keyof typeof RequestAction];
