import { makeEnum } from '@transcend-io/type-utils';

/**
 * The source that set the data flow or cookie
 */
export enum ConsentTrackerSource {
  /** The data flow was manually set */
  Manual = 'MANUAL',
  /** The data flow originated from a site-scan */
  Scan = 'SCAN',
  /** Data flow originated from telemetry data */
  Telemetry = 'TELEMETRY',
}

/**
 * Statuses for a data flow or cookie
 */
export enum ConsentTrackerStatus {
  /** Data flows or cookies that are to be included in live airgap bundles */
  Live = 'LIVE',
  /** Data flows or cookies that won't be included in live airgap bundles because they need a human review */
  NeedsReview = 'NEEDS_REVIEW',
}

/**
 * Applicable data flow scopes for a given URL
 */
export const DataFlowScope = makeEnum({
  Host: 'HOST',
  Path: 'PATH',
  QueryParam: 'QUERY_PARAM',
  RegExp: 'REGEX',
  CSP: 'CSP',
});

/** Type override */
export type DataFlowScope = typeof DataFlowScope[keyof typeof DataFlowScope];
