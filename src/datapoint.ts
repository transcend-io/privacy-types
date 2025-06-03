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

export const UnstructuredSubDataPointRecommendationStatus = makeEnum({
  /** The category was manually applied */
  ManuallyAdded: 'MANUALLY_ADDED',
  /** The recommendation has been corrected */
  Corrected: 'CORRECTED',
  /** The recommendation has been approved as valid */
  Validated: 'VALIDATED',
  /** The recommendation is has been made but not validated */
  Classified: 'CLASSIFIED',
  /** The recommendation has been marked as wrong */
  Rejected: 'REJECTED',
});

/** Type override */
export type UnstructuredSubDataPointRecommendationStatus =
  typeof UnstructuredSubDataPointRecommendationStatus[keyof typeof UnstructuredSubDataPointRecommendationStatus];

/**
 * Encryption types for database table
 */
export const TableEncryptionType = makeEnum({
  Unencrypted: 'UNENCRYPTED',
  EncryptedApplicationSide: 'ENCRYPTED_APPLICATION_SIDE',
  EncryptedByDataAtRest: 'ENCRYPTED_DATA_AT_REST',
});

/** Type override */
export type TableEncryptionType =
  typeof TableEncryptionType[keyof typeof TableEncryptionType];
