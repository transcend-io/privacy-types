/* eslint-disable max-lines */

import { getEntries } from '@transcend-io/type-utils';

/**
 * The possible scopes that can be assigned to a user or team
 */
export enum ScopeName {
  ReadOnly = 'readOnly',
  FullAdmin = 'fullAdmin',
  MakeDataSubjectRequest = 'makeDataSubjectRequest',
  ConnectDataSilos = 'connectDataSilos',
  DeployPrivacyCenter = 'deployPrivacyCenter',
  ManageConsentManager = 'manageConsentManager',
  ViewConsentManager = 'viewConsentManager',
  ViewCustomerDataDataMapping = 'viewCustomerDataDataMapping',
  ViewCustomerDataPrivacyRequests = 'viewCustomerDataPrivacyRequests',
  ManageAccessControl = 'manageAccessControl',
  ManageApiKeys = 'manageApiKeys',
  ManageBilling = 'manageBilling',
  ManageDataMap = 'manageDataMap',
  ManageDataFlow = 'manageDataFlow',
  ManageDataSubjectRequestSettings = 'manageDataSubjectRequestSettings',
  ManageEmailTemplates = 'manageEmailTemplates',
  ManageOrganizationInfo = 'manageOrganizationInfo',
  ManagePrivacyCenter = 'managePrivacyCenter',
  ViewPrivacyCenter = 'viewPrivacyCenter',
  ManageLegalHold = 'manageLegalHold',
  ManageRequestCompilation = 'manageRequestCompilation',
  ManageRequestIdentities = 'manageRequestIdentities',
  ManageRequestSecurity = 'manageRequestSecurity',
  ManageSombraRootKeys = 'manageSombraRootKeys',
  ManageSSO = 'manageSSO',
  ManageEmailDomains = 'manageEmailDomains',
  RequestApproval = 'requestApproval',
  ViewApiKeys = 'viewApiKeys',
  ViewDataFlow = 'viewDataFlow',
  ViewDataMap = 'viewDataMap',
  ViewLegalHold = 'viewLegalHold',
  ViewDataSubjectRequestSettings = 'viewDataSubjectRequestSettings',
  ViewEmailTemplates = 'viewEmailTemplates',
  ViewEmailDomains = 'viewEmailDomains',
  ViewRequestCompilation = 'viewRequestCompilation',
  ViewRequestIdentitySettings = 'viewRequestIdentitySettings',
  ViewRequests = 'viewRequests',
  ViewScopes = 'viewScopes',
  ViewSSO = 'viewSSO',
  ViewEmployees = 'viewEmployees',
  ViewOptOutStatus = 'viewOptOutStatus',
  ViewDataInventory = 'viewDataInventory',
  ManageDataInventory = 'manageDataInventory',
  ManageGlobalAttributes = 'manageGlobalAttributes',
  ViewGlobalAttributes = 'viewGlobalAttributes',
  ViewAssessments = 'viewAssessments',
  ManageAssessments = 'manageAssessments',
}

/**
 * The type of scope
 */
export enum ScopeType {
  /** A scope that will make modifications to something on Transcend */
  Modify = 'MODIFY',
  /** A scope that allows view access to some resource */
  View = 'VIEW',
}

/**
 * The related product offering where the scope is used
 */
export enum TranscendProduct {
  /** Used in the privacy requests product */
  PrivacyRequests = 'PRIVACY_REQUESTS',
  /** Data Mapping product */
  DataMapping = 'DATA_MAPPING',
  /** Consent Manager product */
  ConsentManager = 'CONSENT_MANAGER',
  /** Privacy center */
  PrivacyCenter = 'PRIVACY_CENTER',
  /** Administration and access control */
  Admin = 'ADMIN',
  /** Assessments Product */
  Assessments = 'ASSESSMENTS',
}

/**
 * A scope definition
 */
export interface ScopeDefinition {
  /** The display title of the scope */
  title: string;
  /** The display description of the scope */
  description: string;
  /** The broad category of scope */
  type: ScopeType;
  /** The scopes that must also be allowed to make that scope functional */
  dependencies: ScopeName[];
  /** Related product offerings */
  products: TranscendProduct[];
}

/**
 * The action scope definitions
 */
const SCOPES_WITHOUT_VIEW_ONLY: {
  [name in Exclude<ScopeName, ScopeName.ReadOnly>]: ScopeDefinition;
} = {
  [ScopeName.FullAdmin]: {
    dependencies: Object.values(ScopeName).filter(
      (scope) => scope !== ScopeName.FullAdmin,
    ),
    description: 'Full administrative access. All scopes are granted.',
    title: 'Full Admin',
    type: ScopeType.Modify,
    products: [TranscendProduct.Admin],
  },
  [ScopeName.ManageSombraRootKeys]: {
    dependencies: [],
    description:
      'Ability to perform a key rotation on the encryption keys used within your account.',
    title: 'Rotate Hosted Sombra keys',
    type: ScopeType.Modify,
    products: [TranscendProduct.Admin],
  },
  [ScopeName.ManageGlobalAttributes]: {
    dependencies: [ScopeName.ViewGlobalAttributes],
    description:
      // eslint-disable-next-line max-len
      'Under the infrastructure tab, manage your custom attributes and select which views those attributes should display in.',
    title: 'Manage Global Attributes',
    type: ScopeType.Modify,
    products: [TranscendProduct.Admin],
  },
  [ScopeName.ManageAccessControl]: {
    dependencies: [ScopeName.ViewEmployees, ScopeName.ViewScopes],
    description:
      'Manage what employees in your organization can access within Transcend.',
    title: 'Manage Access Controls',
    type: ScopeType.Modify,
    products: [TranscendProduct.Admin],
  },
  [ScopeName.ManageBilling]: {
    dependencies: [],
    description: 'Manage billing details for your organization.',
    title: 'Manage Billing',
    type: ScopeType.Modify,
    products: [TranscendProduct.Admin],
  },
  [ScopeName.ManageSSO]: {
    dependencies: [ScopeName.ViewSSO],
    description: 'Manage SSO configuration for members of your organization.',
    title: 'Manage SSO',
    type: ScopeType.Modify,
    products: [TranscendProduct.Admin],
  },
  [ScopeName.ManageApiKeys]: {
    dependencies: [ScopeName.ViewApiKeys],
    description:
      'Create, update and delete API keys for programmatic access to your Transcend organization.',
    title: 'Manage API Keys',
    type: ScopeType.Modify,
    products: [TranscendProduct.Admin],
  },
  [ScopeName.ManageOrganizationInfo]: {
    dependencies: [],
    description: 'Edit the top-level organization settings details.',
    title: 'Manage Organization Information',
    type: ScopeType.Modify,
    products: [TranscendProduct.Admin],
  },
  [ScopeName.ManageEmailDomains]: {
    dependencies: [ScopeName.ViewEmailDomains],
    description:
      'Manage the domains from which Transcend can send emails on behalf of your organization.',
    title: 'Manage Email Domains',
    type: ScopeType.Modify,
    products: [TranscendProduct.Admin],
  },
  [ScopeName.ViewCustomerDataPrivacyRequests]: {
    dependencies: [],
    description:
      'Give permissions for an employee to view the data in an access request.',
    title: 'View Customer Data in Privacy Requests',
    type: ScopeType.View,
    products: [TranscendProduct.Admin, TranscendProduct.PrivacyRequests],
  },
  [ScopeName.ViewCustomerDataDataMapping]: {
    dependencies: [],
    description:
      'Give permissions for an employee to view the sampled data in the data mapping product.',
    title: 'View Customer Data in Data Mapping',
    type: ScopeType.View,
    products: [TranscendProduct.Admin, TranscendProduct.DataMapping],
  },
  [ScopeName.ViewApiKeys]: {
    dependencies: [],
    description:
      'View the API keys on your account and see what scopes are assigned to them.',
    title: 'View API Keys',
    type: ScopeType.View,
    products: [TranscendProduct.Admin],
  },
  [ScopeName.ViewSSO]: {
    dependencies: [],
    description: 'View the SSO configuration for your organization.',
    title: 'View SSO',
    type: ScopeType.View,
    products: [TranscendProduct.Admin],
  },
  [ScopeName.ViewScopes]: {
    dependencies: [ScopeName.ViewEmployees],
    description:
      'View the potential access control scopes that can be assigned to members in the organization.',
    title: 'View Scopes',
    type: ScopeType.View,
    products: [TranscendProduct.Admin],
  },
  [ScopeName.ViewEmployees]: {
    dependencies: [],
    description: 'View the list of employees within your organization.',
    title: 'View Employees',
    type: ScopeType.View,
    products: [TranscendProduct.Admin],
  },
  [ScopeName.ViewEmailDomains]: {
    dependencies: [],
    description:
      'View the domains from which Transcend can send emails on behalf of your organization.',
    title: 'View Email Domains',
    type: ScopeType.View,
    products: [TranscendProduct.Admin],
  },
  [ScopeName.ViewGlobalAttributes]: {
    dependencies: [],
    description: 'View the attribute definition key/value pairs.',
    title: 'VIew Global Attributes',
    type: ScopeType.View,
    products: [TranscendProduct.Admin],
  },
  [ScopeName.ViewLegalHold]: {
    dependencies: [],
    description: 'View the individuals that have been placed on legal holds.',
    title: 'View Legal Hold',
    type: ScopeType.View,
    products: [TranscendProduct.PrivacyRequests],
  },
  [ScopeName.ManageLegalHold]: {
    dependencies: [ScopeName.ViewLegalHold],
    description:
      'Manage and edit the individuals that have been placed on legal holds.',
    title: 'Manage Legal Holds',
    type: ScopeType.Modify,
    products: [TranscendProduct.PrivacyRequests],
  },
  [ScopeName.ManageRequestSecurity]: {
    dependencies: [],
    description:
      'ReSign expired request encryption contexts, and data silo contexts.',
    title: 'Manage Request Security',
    type: ScopeType.Modify,
    products: [TranscendProduct.Admin, TranscendProduct.PrivacyRequests],
  },
  [ScopeName.ManageRequestCompilation]: {
    dependencies: [ScopeName.ViewRequests, ScopeName.ViewRequestCompilation],
    description:
      'Make changes to the compilation process of a request. This involves changing the status of data silos in your Data Map, as well as editing profiles and files.', // eslint-disable-line max-len
    title: 'Manage Request Compilation',
    type: ScopeType.Modify,
    products: [TranscendProduct.PrivacyRequests],
  },
  [ScopeName.MakeDataSubjectRequest]: {
    dependencies: [
      ScopeName.ViewDataSubjectRequestSettings,
      ScopeName.ViewRequestIdentitySettings,
    ],
    description: 'Submit a new privacy requests.',
    title: 'Submit New Data Subject Request',
    type: ScopeType.Modify,
    products: [TranscendProduct.PrivacyRequests],
  },
  [ScopeName.ManageDataSubjectRequestSettings]: {
    dependencies: [ScopeName.ViewDataSubjectRequestSettings],
    description:
      'Make changes to the request actions that your organization allows, as well as what data subjects you will serve.',
    title: 'Manage Data Subject Request Settings',
    type: ScopeType.Modify,
    products: [TranscendProduct.PrivacyRequests],
  },
  [ScopeName.ManageEmailTemplates]: {
    dependencies: [ScopeName.ViewEmailTemplates],
    description:
      'Manage the email communication templates that your organization uses to communicate with your data subjects.',
    title: 'Manage Email Templates',
    type: ScopeType.Modify,
    products: [TranscendProduct.PrivacyRequests],
  },
  [ScopeName.ManageRequestIdentities]: {
    dependencies: [ScopeName.ViewRequestIdentitySettings],
    description:
      'Manage how your organization will verify the identities of new privacy requests, and how that identity will be enriched for all of your data silos to lookup that person.', // eslint-disable-line max-len
    title: 'Manage Request Identity Verification',
    type: ScopeType.Modify,
    products: [TranscendProduct.PrivacyRequests],
  },
  [ScopeName.DeployPrivacyCenter]: {
    dependencies: [ScopeName.ManagePrivacyCenter],
    description:
      'Launch the Privacy Center on your own domain, and publish new changes.',
    title: 'Publish Privacy Center',
    type: ScopeType.Modify,
    products: [
      TranscendProduct.PrivacyRequests,
      TranscendProduct.PrivacyCenter,
    ],
  },
  [ScopeName.ManageDataMap]: {
    dependencies: [ScopeName.ViewDataMap],
    description:
      'Edit the configurations on your data silos and determine what information should be included in a request.',
    title: 'Manage Data Map',
    type: ScopeType.Modify,
    products: [TranscendProduct.PrivacyRequests, TranscendProduct.DataMapping],
  },
  [ScopeName.ManagePrivacyCenter]: {
    dependencies: [ScopeName.ViewPrivacyCenter],
    description:
      'Make changes to the privacy center configuration and policies.',
    title: 'Manage Privacy Center Layout',
    type: ScopeType.Modify,
    products: [
      TranscendProduct.PrivacyRequests,
      TranscendProduct.PrivacyCenter,
    ],
  },
  [ScopeName.RequestApproval]: {
    dependencies: [
      ScopeName.ViewRequests,
      ScopeName.ViewRequestCompilation,
      ScopeName.ManageRequestCompilation,
    ],
    description:
      'The ability to approve and manage the state of privacy requests, and communicate with the data subject.',
    title: 'Request Approval and Communication',
    type: ScopeType.Modify,
    products: [TranscendProduct.PrivacyRequests],
  },
  [ScopeName.ViewDataSubjectRequestSettings]: {
    dependencies: [],
    description:
      'View the privacy request actions settings and data subject categories that your organization supports.',
    title: 'View Data Subject Request Settings',
    type: ScopeType.View,
    products: [TranscendProduct.PrivacyRequests],
  },
  [ScopeName.ViewRequestCompilation]: {
    dependencies: [ScopeName.ViewRequests],
    description:
      'View the status of requests as they compile across your Data Map.',
    title: 'View the Request Compilation',
    type: ScopeType.View,
    products: [TranscendProduct.PrivacyRequests],
  },
  [ScopeName.ViewRequestIdentitySettings]: {
    dependencies: [],
    description:
      'View the settings for data subject request identity verification.',
    title: 'View Identity Verification Settings',
    type: ScopeType.View,
    products: [TranscendProduct.PrivacyRequests],
  },
  [ScopeName.ViewRequests]: {
    dependencies: [
      ScopeName.ViewGlobalAttributes,
      ScopeName.ViewDataSubjectRequestSettings,
    ],
    description:
      'View the stream of incoming requests, and any details submit through the form or later enriched.',
    title: 'View Incoming Requests',
    type: ScopeType.View,
    products: [TranscendProduct.PrivacyRequests],
  },
  [ScopeName.ViewPrivacyCenter]: {
    dependencies: [],
    description: 'View the full configuration of the privacy center.',
    title: 'View Privacy Center Layout',
    type: ScopeType.View,
    products: [
      TranscendProduct.PrivacyRequests,
      TranscendProduct.PrivacyCenter,
    ],
  },
  [ScopeName.ViewEmailTemplates]: {
    dependencies: [],
    description:
      'View the default email templates templates used to communicate with your data subjects.',
    title: 'View Email Templates',
    type: ScopeType.View,
    products: [
      TranscendProduct.PrivacyRequests,
      TranscendProduct.PrivacyCenter,
    ],
  },
  [ScopeName.ConnectDataSilos]: {
    dependencies: [
      ScopeName.ViewDataMap,
      ScopeName.ManageDataMap,
      ScopeName.ViewEmailTemplates,
    ],
    description: 'Connect new data silos to your Data Map.',
    title: 'Connect Data Silos',
    products: [TranscendProduct.PrivacyRequests, TranscendProduct.DataMapping],
    type: ScopeType.Modify,
  },
  [ScopeName.ManageDataInventory]: {
    dependencies: [ScopeName.ViewDataInventory],
    description: 'Manage the data inventory information for your organization.',
    title: 'Manage Data Inventory',
    type: ScopeType.Modify,
    products: [TranscendProduct.DataMapping],
  },
  [ScopeName.ViewDataMap]: {
    dependencies: [ScopeName.ViewGlobalAttributes],
    description:
      "View your organization's Data Map and see the configuration settings for each action your support.",
    title: 'View Data Map',
    type: ScopeType.View,
    products: [TranscendProduct.PrivacyRequests, TranscendProduct.DataMapping],
  },
  [ScopeName.ViewDataInventory]: {
    dependencies: [
      ScopeName.ViewDataMap,
      ScopeName.ViewGlobalAttributes,
      ScopeName.ViewDataSubjectRequestSettings,
    ],
    description:
      'Ability to view the data silos, datapoints, data categories and processing purposes in your data inventory.',
    title: 'View Data Inventory',
    type: ScopeType.View,
    products: [TranscendProduct.DataMapping],
  },
  [ScopeName.ManageConsentManager]: {
    dependencies: [
      ScopeName.ViewConsentManager,
      ScopeName.ManageDataFlow,
      ScopeName.ViewDataFlow,
    ],
    description:
      'Manage & deploy the consent manager changes to your websites.',
    title: 'Manage Consent Manager',
    type: ScopeType.Modify,
    products: [TranscendProduct.ConsentManager],
  },
  [ScopeName.ManageDataFlow]: {
    dependencies: [ScopeName.ViewDataFlow],
    description:
      'Manage & Deploy Data Flows (tracking purpose maps, site scans, cookies)',
    title: 'Manage Data Flows',
    type: ScopeType.Modify,
    products: [TranscendProduct.ConsentManager],
  },
  [ScopeName.ViewOptOutStatus]: {
    dependencies: [],
    description: 'Check the opt out status of a particular user.',
    title: 'View Opt Out Status',
    type: ScopeType.View,
    products: [
      TranscendProduct.PrivacyRequests,
      TranscendProduct.ConsentManager,
    ],
  },
  [ScopeName.ViewDataFlow]: {
    dependencies: [ScopeName.ViewConsentManager],
    description: 'View Data Flows (tracking purpose maps, site scans)',
    title: 'View Data Flows',
    type: ScopeType.View,
    products: [TranscendProduct.ConsentManager],
  },
  [ScopeName.ViewConsentManager]: {
    title: 'View Consent Manager',
    type: ScopeType.View,
    dependencies: [],
    description: 'View the consent manager configuration.',
    products: [TranscendProduct.ConsentManager],
  },
  [ScopeName.ViewAssessments]: {
    title: 'View Assessments',
    dependencies: [],
    description: 'View the assessments configuration.',
    type: ScopeType.View,
    products: [TranscendProduct.Assessments, TranscendProduct.DataMapping],
  },
  [ScopeName.ManageAssessments]: {
    title: 'Manage Assessments',
    dependencies: [ScopeName.ViewAssessments],
    description: 'Manage and edit assessments and assessment templates',
    type: ScopeType.Modify,
    products: [TranscendProduct.Assessments, TranscendProduct.DataMapping],
  },
};

export const TRANSCEND_SCOPES: {
  [name in ScopeName]: ScopeDefinition;
} = {
  [ScopeName.ReadOnly]: {
    dependencies: getEntries(SCOPES_WITHOUT_VIEW_ONLY)
      .filter(([, v]) => v.type === ScopeType.View)
      .map(([k]) => k),
    description: 'Access is granted to all of the scopes of type "View".',
    title: 'View Only',
    type: ScopeType.View,
    products: [TranscendProduct.Admin],
  },
  ...SCOPES_WITHOUT_VIEW_ONLY,
};

/* eslint-enable max-lines */
