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
    products: Object.values(TranscendProduct),
  },
  [ScopeName.ViewDataFlow]: {
    dependencies: [ScopeName.ViewConsentManager],
    description: 'View Data Flows (tracking purpose maps, site scans)',
    title: 'View Data Flows',
    type: ScopeType.View,
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
  [ScopeName.ManageRequestSecurity]: {
    dependencies: [],
    description:
      'ReSign expired request encryption contexts, and data silo contexts.',
    title: 'Manage Request Security',
    type: ScopeType.Modify,
    products: [TranscendProduct.Admin, TranscendProduct.PrivacyRequests],
  },
  [ScopeName.ManageSombraRootKeys]: {
    dependencies: [],
    description: 'Rotate Hosted Sombra keys',
    title: 'Rotate Hosted Sombra keys',
    type: ScopeType.Modify,
    products: [TranscendProduct.Admin],
  },
  [ScopeName.ViewConsentManager]: {
    title: 'View Consent Manager',
    type: ScopeType.View,
    dependencies: [],
    description: 'View the Consent Manager configuration',
    products: [TranscendProduct.ConsentManager],
  },
  [ScopeName.ManageConsentManager]: {
    dependencies: [
      ScopeName.ViewConsentManager,
      ScopeName.ManageDataFlow,
      ScopeName.ViewDataFlow,
    ],
    description: 'Manage & Deploy Consent Manager',
    title: 'Manage Consent Manager',
    type: ScopeType.Modify,
    products: [TranscendProduct.ConsentManager],
  },
  [ScopeName.MakeDataSubjectRequest]: {
    dependencies: [
      ScopeName.ViewDataSubjectRequestSettings,
      ScopeName.ViewRequestIdentitySettings,
    ],
    description:
      'Submit new data subject requests programmatically through our API.',
    title: 'Submit New Data Subject Request',
    type: ScopeType.Modify,
    products: [TranscendProduct.PrivacyRequests],
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
  [ScopeName.DeployPrivacyCenter]: {
    dependencies: [ScopeName.ManagePrivacyCenter],
    description:
      'Launch the Privacy Center on your own domain, and publish new changes to your deployed instance.',
    title: 'Publish Privacy Center',
    type: ScopeType.Modify,
    products: [
      TranscendProduct.PrivacyRequests,
      TranscendProduct.PrivacyCenter,
    ],
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
  [ScopeName.ManageDataMap]: {
    dependencies: [ScopeName.ViewDataMap],
    description:
      'Edit the configurations on your data silos and determine what information should be included in a request.',
    title: 'Manage Data Map',
    type: ScopeType.Modify,
    products: [TranscendProduct.PrivacyRequests, TranscendProduct.DataMapping],
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
  [ScopeName.ManageOrganizationInfo]: {
    dependencies: [],
    description: 'Edit the top-level organization settings details.',
    title: 'Manage Organization Information',
    type: ScopeType.Modify,
    products: [TranscendProduct.Admin],
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
  [ScopeName.ManageRequestCompilation]: {
    dependencies: [ScopeName.ViewRequests, ScopeName.ViewRequestCompilation],
    description:
      'Make changes to the compilation process of a request. This involves changing the status of data silos in your Data Map, as well as editing profiles and files.', // eslint-disable-line max-len
    title: 'Manage Request Compilation',
    type: ScopeType.Modify,
    products: [TranscendProduct.PrivacyRequests],
  },
  [ScopeName.ManageRequestIdentities]: {
    dependencies: [ScopeName.ViewRequestIdentitySettings],
    description:
      'Manage how your organization will verify the identities of new data subject requests, and how that identity will be enriched for all of your data silos to lookup that person.', // eslint-disable-line max-len
    title: 'Manage Request Identity Verification',
    type: ScopeType.Modify,
    products: [TranscendProduct.PrivacyRequests],
  },
  [ScopeName.RequestApproval]: {
    dependencies: [
      ScopeName.ViewRequests,
      ScopeName.ViewRequestCompilation,
      ScopeName.ManageRequestCompilation,
    ],
    description:
      'The ability to approve and manage the state of data subject requests, and communicate with the data subject.',
    title: 'Request Approval and Communication',
    type: ScopeType.Modify,
    products: [TranscendProduct.PrivacyRequests],
  },
  [ScopeName.ViewApiKeys]: {
    dependencies: [],
    description:
      'View the API keys on your account and see what scopes are assigned to them.',
    title: 'View API Keys',
    type: ScopeType.View,
    products: [TranscendProduct.Admin],
  },
  [ScopeName.ViewDataMap]: {
    dependencies: [ScopeName.ViewGlobalAttributes],
    description:
      "View your organization's Data Map and see the configuration settings for each action your support",
    title: 'View Data Map',
    type: ScopeType.View,
    products: [TranscendProduct.PrivacyRequests, TranscendProduct.DataMapping],
  },
  [ScopeName.ViewDataSubjectRequestSettings]: {
    dependencies: [],
    description:
      'View the DSR actions settings and data subject categories that your organization supports.',
    title: 'View Data Subject Request Settings',
    type: ScopeType.View,
    products: [TranscendProduct.PrivacyRequests],
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
  [ScopeName.ViewSSO]: {
    dependencies: [],
    description: 'View SSO configuration for your organization.',
    title: 'View SSO',
    type: ScopeType.View,
    products: [TranscendProduct.Admin],
  },
  [ScopeName.ViewRequests]: {
    dependencies: [ScopeName.ViewGlobalAttributes],
    description:
      'View the stream of incoming requests, and any details submit through the form or later enriched.',
    title: 'View Incoming Requests',
    type: ScopeType.View,
    products: [TranscendProduct.PrivacyRequests],
  },
  [ScopeName.ViewScopes]: {
    dependencies: [ScopeName.ViewEmployees],
    description:
      'View the potential access control scopes that can be assigned to members in the organization',
    title: 'View Scopes',
    type: ScopeType.View,
    products: [TranscendProduct.Admin],
  },
  [ScopeName.ViewEmployees]: {
    dependencies: [],
    description: 'View the employees within your organization.',
    title: 'View Employees',
    type: ScopeType.View,
    products: [TranscendProduct.Admin],
  },
  [ScopeName.ViewOptOutStatus]: {
    dependencies: [],
    description:
      'Check the opt out status of data subjects of your organization',
    title: 'View Opt Out Status',
    type: ScopeType.View,
    products: [
      TranscendProduct.PrivacyRequests,
      TranscendProduct.ConsentManager,
    ],
  },
  [ScopeName.ViewEmailDomains]: {
    dependencies: [],
    description:
      'View the domains from which Transcend can send emails on behalf of your organization',
    title: 'View Email Domains',
    type: ScopeType.View,
    products: [TranscendProduct.Admin],
  },
  [ScopeName.ManageEmailDomains]: {
    dependencies: [ScopeName.ViewEmailDomains],
    description:
      'Manage the domains from which Transcend can send emails on behalf of your organization',
    title: 'Manage Email Domains',
    type: ScopeType.Modify,
    products: [TranscendProduct.Admin],
  },
  [ScopeName.ViewDataInventory]: {
    dependencies: [ScopeName.ViewDataMap, ScopeName.ViewGlobalAttributes],
    description: 'Check data inventory information for your organization',
    title: 'View Data Inventory',
    type: ScopeType.View,
    products: [TranscendProduct.DataMapping],
  },
  [ScopeName.ManageDataInventory]: {
    dependencies: [ScopeName.ViewDataInventory],
    description: 'Manage the data inventory information for your organization',
    title: 'Manage Data Inventory',
    type: ScopeType.Modify,
    products: [TranscendProduct.DataMapping],
  },
  [ScopeName.ViewGlobalAttributes]: {
    dependencies: [],
    description: 'View Global Attributes',
    title: 'VIew Global Attributes',
    type: ScopeType.View,
    products: [TranscendProduct.Admin],
  },
  [ScopeName.ManageGlobalAttributes]: {
    dependencies: [ScopeName.ViewGlobalAttributes],
    description: 'Manage Global Attributes',
    title: 'Manage Global Attributes',
    type: ScopeType.Modify,
    products: [TranscendProduct.Admin],
  },
};

export const TRANSCEND_SCOPES: {
  [name in ScopeName]: ScopeDefinition;
} = {
  ...SCOPES_WITHOUT_VIEW_ONLY,
  [ScopeName.ReadOnly]: {
    dependencies: getEntries(SCOPES_WITHOUT_VIEW_ONLY)
      .filter(([, v]) => v.type === ScopeType.View)
      .map(([k]) => k),
    description: 'Access is granted to all of the scopes of type "View"',
    title: 'View Only',
    type: ScopeType.View,
    products: [TranscendProduct.Admin],
  },
};

/* eslint-enable max-lines */
