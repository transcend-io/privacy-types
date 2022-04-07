import { makeEnum } from '@transcend-io/type-utils';

/**
 * The request statuses that a request can be created directly into.
 * This is useful for the purposes of uploading a backlog
 */
export const CompletedRequestStatus = makeEnum({
  /** The data subject failed to verify at least one of the identifier they submit through the form */
  FailedVerification: 'FAILED_VERIFICATION',
  /** The request has been approved and sent to the data subject with no secondary action */
  Completed: 'COMPLETED',
  /** The request was canceled and the data subject was notified */
  Canceled: 'CANCELED',
  /** The secondary request action completed compilation */
  SecondaryCompleted: 'SECONDARY_COMPLETED',
  /** The request was revoked because it was a duplicate (another open request covers it) */
  Revoked: 'REVOKED',
});

/** Type override */
export type CompletedRequestStatus =
  typeof CompletedRequestStatus[keyof typeof CompletedRequestStatus];

/**
 * The statuses that a request can take on
 */
export const RequestStatus = makeEnum({
  /** A data subject submits a DSR */
  RequestMade: 'REQUEST_MADE',
  /** The data subject failed to verify at least one of the identifier they submit through the form */
  FailedVerification: 'FAILED_VERIFICATION',
  /** The request identifiers have been verified and they are enriched to create other identifiers */
  Enriching: 'ENRICHING',
  /** The request is temporarily placed on hold */
  OnHold: 'ON_HOLD',
  /** The request is waiting to compile */
  Waiting: 'WAITING',
  /** The request begins compiling across the organization's Connected Services, specific to the actions requested */
  Compiling: 'COMPILING',
  /** The request is compiled and appending review before send */
  Approving: 'APPROVING',
  /** The primary action has been sent to the data subject and the request is delayed until the secondary action is executed */
  Delayed: 'DELAYED',
  /** The request has been approved and sent to the data subject with no secondary action */
  Completed: 'COMPLETED',
  /** The request is in a state where the data subject report zip can be downloaded. This is typically a completed ACCESS request */
  Downloadable: 'DOWNLOADABLE',
  /** The request is completed but not available for download, but its data categories are visible on the Privacy Center */
  ViewCategories: 'VIEW_CATEGORIES',
  /** The request was canceled and the data subject was notified */
  Canceled: 'CANCELED',
  /** The secondary request action begins compiling across the organization's Connected Services, i.e. erasure is actually called */
  Secondary: 'SECONDARY',
  /** The secondary request action completed compilation */
  SecondaryCompleted: 'SECONDARY_COMPLETED',
  /** The request was revoked because it was a duplicate (another open request covers it) */
  Revoked: 'REVOKED',
});

/** Type override */
export type RequestStatus = typeof RequestStatus[keyof typeof RequestStatus];

/**
 * The places a DSR can originate from
 */
export enum RequestOrigin {
  /** Submit through the form on the privacy center */
  PrivacyCenter = 'PRIVACY_CENTER',
  /** Administrator made the request from the admin dashboard */
  AdminDashboard = 'ADMIN_DASHBOARD',
  /** Programmatic through the API */
  Api = 'API',
}
