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
  /** Run an account deletion instead of a fully compliant deletion */
  AccountDeletion: 'ACCOUNT_DELETION',
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
  /**
   * TODO: https://transcend.height.app/T-4327 - add in the ability to choose ERASURE vs REDACT
   * --  Redact the personal data from the file, without deleting it entirely
   */
  // Redact: 'REDACT',
});

/** Type override */
export type RequestActionObjectResolver =
  typeof RequestActionObjectResolver[keyof typeof RequestActionObjectResolver];

/**
 * The types of requests that Data Subject can make
 */
export const RequestAction = makeEnum({
  ...RequestActionOptOut,
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
