import { makeEnum } from '@transcend-io/type-utils';

export const ConfidenceLabel = makeEnum({
  High: 'HIGH',
  Medium: 'MEDIUM',
  Low: 'LOW',
});

/** Override types */
export type ConfidenceLabel =
  typeof ConfidenceLabel[keyof typeof ConfidenceLabel];

/** The approval status of the category guess for a subdatapoint */
export const SubDataPointDataSubCategoryGuessStatus = makeEnum({
  /** The guess has been approved as valid */
  Approved: 'APPROVED',
  /** The guess is pending review */
  Pending: 'PENDING',
  /** The guess has been marked as wrong */
  Rejected: 'REJECTED',
});

/** Type override */
export type SubDataPointDataSubCategoryGuessStatus =
  typeof SubDataPointDataSubCategoryGuessStatus[keyof typeof SubDataPointDataSubCategoryGuessStatus];
