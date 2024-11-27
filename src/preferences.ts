import * as t from 'io-ts';
import { makeEnum, valuesOf } from '@transcend-io/type-utils';

/**
 * Types of decryption status
 */
export const DecryptionStatus = makeEnum({
  DECRYPTED: 'DECRYPTED',
  ERROR: 'ERROR',
});

/** Type overrides */
export type DecryptionStatus =
  typeof DecryptionStatus[keyof typeof DecryptionStatus];

/**
 * Preference store system attributes which are not user editable
 */
export const PreferenceStoreSystemAttributes = t.intersection([
  t.type({
    /** The decrypted status of the record */
    decryptionStatus: valuesOf(DecryptionStatus),
  }),
  t.partial({
    /** updated timestamp on the db record */
    updatedAt: t.string,
  }),
]);

/** Override type */
export type PreferenceStoreSystemAttributes = t.TypeOf<
  typeof PreferenceStoreSystemAttributes
>;

/**
 *  Contains all the Consent management related fields
 *  that are stored in the preference store.
 */
export const PreferenceStoreConsentFields = t.type({
  /** US IAB Privacy String */
  usp: t.union([t.string, t.null]),
  /** IAB GPP String */
  gpp: t.union([t.string, t.null]),
  /** IAB TCF String */
  tcf: t.union([t.string, t.null]),
  /** Airgap Version */
  airgapVersion: t.union([t.string, t.null]),
});

/** Type override */
export type PreferenceStoreConsentFields = t.TypeOf<
  typeof PreferenceStoreConsentFields
>;

/**
 * The format key required fields of the preference store record
 */
export const PreferenceStoreKeyConditionals = t.type({
  /**
   * Primary identifier of the user.
   *
   * - **Lookup**: This value may be encrypted or decrypted, depending on the decryption status.
   * - **Upsert**: This value is always provided in decrypted form by the API user.
   *
   * Ensure to handle the user ID appropriately based on the context of the operation.
   */
  userId: t.string,
  /** The partition key */
  partition: t.string,
  /** last consent event timestamp (ISO 8601) */
  timestamp: t.string,
});

/** Override type */
export type PreferenceStoreKeyConditionals = t.TypeOf<
  typeof PreferenceStoreKeyConditionals
>;

/** The format for a preference which include topic and user choice */
export const Preference = t.type({
  /** The preference topic */
  topic: t.string,
  /** The preference choice made by the user */
  choice: t.partial({
    /** The boolean value of the preference */
    booleanValue: t.union([t.boolean, t.null]),
    /** The select value of the preference */
    selectValue: t.union([t.string, t.null]),
    /** The select values of the preference */
    selectValues: t.union([t.array(t.string), t.null]),
  }),
});

/** Override type. */
export type Preference = t.TypeOf<typeof Preference>;

/**
 * The format for a preference store purpose
 */
export const PreferenceStorePurposeResponse = t.intersection([
  t.type({
    /** tracking purpose */
    purpose: t.string,
    /** Whether the purpose is enabled */
    enabled: t.boolean,
  }),
  t.partial({
    /** additional preference associated with this purpose */
    preferences: t.array(Preference),
  }),
]);

/** Override type. */
export type PreferenceStorePurposeResponse = t.TypeOf<
  typeof PreferenceStorePurposeResponse
>;

export const PreferenceQueryResponseItem = t.intersection([
  PreferenceStoreKeyConditionals,
  t.type({
    /** The system attributes of the record */
    system: PreferenceStoreSystemAttributes,
    /** Consent management related fields */
    consentManagement: t.partial(PreferenceStoreConsentFields.props),
    /** Preference store purposes */
    purposes: t.array(PreferenceStorePurposeResponse),
  }),
  t.partial({
    /** metadata */
    metadata: t.array(
      t.type({
        key: t.string,
        value: t.string,
      }),
    ),
    /** last updated for metadata */
    metadataTimestamp: t.string,
  }),
]);

/** Type override */
export type PreferenceQueryResponseItem = t.TypeOf<
  typeof PreferenceQueryResponseItem
>;

export const CustomFieldApiInput = t.type({
  /** The attribute key that houses the attribute values */
  key: t.string,
  /** The attribute values used to label resources */
  values: t.array(t.string),
});

/** Override type */
export type CustomFieldApiInput = t.TypeOf<typeof CustomFieldApiInput>;

/**
 * The format for a preference store purpose
 */
export const PreferenceStorePurposeUpdate = t.intersection([
  PreferenceStorePurposeResponse,
  t.partial({
    /** Additional tags to forward to the DSR event */
    attributes: t.array(CustomFieldApiInput),
    /** Consent workflow settings */
    workflowSettings: t.partial({
      /** Additional tags to forward to the DSR event */
      attributes: t.array(CustomFieldApiInput),
      /** Data silo IDs to run the workflow on */
      dataSiloIds: t.array(t.string),
      /** The email template ID to use for the receipt */
      emailReceiptTemplateId: t.string,
      /** Data silo IDs to ignore when running the workflow */
      ignoreDataSiloIds: t.array(t.string),
      /** If the workflow is silent */
      isSilent: t.boolean,
      /** if the workflow is a test run */
      isTest: t.boolean,
      /** if the workflow should skip sending the receipt */
      skipSendingReceipt: t.boolean,
      /** if the workflow should skip the waiting period */
      skipWaitingPeriod: t.boolean,
      /** if the workflow should be skipped */
      skipWorkflowTrigger: t.boolean,
    }),
    /** Language to translate request to */
    locale: t.string, // Should be LanguageKey but omitting to allow for sombra to update independently
  }),
]);

/** Override type. */
export type PreferenceStorePurposeUpdate = t.TypeOf<
  typeof PreferenceStorePurposeUpdate
>;
