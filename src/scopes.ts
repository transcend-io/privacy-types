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
  ManageConsentManagerDisplaySettings = 'manageConsentManagerDisplaySettings',
  ManageConsentManagerDeveloperSettings = 'manageConsentManagerDeveloperSettings',
  ManageDataFlow = 'manageDataFlow',
  DeployConsentManager = 'deployConsentManager',
  DeployTestConsentManager = 'deployTestConsentManager',
  ViewCustomerDataDataMapping = 'viewCustomerDataDataMapping',
  ViewCustomerDataPrivacyRequests = 'viewCustomerDataPrivacyRequests',
  ManageAccessControl = 'manageAccessControl',
  ManageApiKeys = 'manageApiKeys',
  ManageBilling = 'manageBilling',
  ManageDataMap = 'manageDataMap',
  ManageAssignedIntegrations = 'managedAssignedIntegrations',
  ManageAssignedDataInventory = 'managedAssignedDataInventory',
  ManageAssignedConsentManager = 'managedAssignedConsentManager',
  ManageAssignedRequests = 'managedAssignedRequests',
  ViewAssignedIntegrations = 'viewAssignedIntegrations',
  ViewAssignedDataInventory = 'viewAssignedDataInventory',
  ViewAssignedConsentManager = 'viewAssignedConsentManager',
  ViewAssignedRequests = 'viewAssignedRequests',
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
  ViewAssignedAssessments = 'viewAssignedAssessments',
  ManageAssignedAssessments = 'manageAssignedAssessments',
  ApproveAssessments = 'approveAssessments',
  ManagePrompts = 'managePrompts',
  ManagePromptRuns = 'managePromptRuns',
  ExecutePrompt = 'executePrompt',
  ViewPromptRuns = 'viewPromptRuns',
  ViewPrompts = 'viewPrompts',
  ApprovePrompts = 'approvePrompts',
  ManageAuditor = 'manageAuditor',
  ExecuteAuditor = 'executeAuditor',
  ViewCodeScanning = 'viewCodeScanning',
  ManageCodeScanning = 'manageCodeScanning',
  ViewPathfinder = 'viewPathfinder',
  ManagePathfinder = 'managePathfinder',
  ViewContractScanning = 'viewContractScanning',
  ManageContractScanning = 'manageContractScanning',
  ViewAuditorRuns = 'viewAuditorRuns',
  ViewAuditEvents = 'viewAuditEvents',
  ManageActionItemCollections = 'manageActionItemCollections',
  ViewManagedConsentDatabaseAdminApi = 'viewManagedConsentDatabaseAdminApi',
  ManageStoredPreferences = 'manageStoredPreferences',
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
  /** Sombra. */
  Sombra = 'SOMBRA',
  /** Prompt Manager */
  PromptManager = 'PROMPT_MANAGER',
  /** Auditor */
  Auditor = 'AUDITOR',
  /** Contract Scanning */
  ContractScanning = 'CONTRACT_SCANNING',
  /** Pathfinder */
  Pathfinder = 'PATHFINDER',
  /** The preference store */
  PreferenceStore = 'PREFERENCE_STORE',
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
  [ScopeName.ViewAuditEvents]: {
    dependencies: [],
    description:
      // eslint-disable-next-line max-len
      'View any audit events made throughout the platform. This includes any of the "Audit Trail" tabs across the Admin Dashboard.',
    title: 'View Audit Events',
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
    title: 'View Global Attributes',
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
  [ScopeName.ManageAssignedRequests]: {
    dependencies: [ScopeName.ViewAssignedRequests],
    description:
      'Make changes to the compilation process of a request for requests assigned to your or your team. This involves changing the status of data silos in your Data Map, as well as editing profiles and files.', // eslint-disable-line max-len
    title: 'Manage Assigned Privacy Requests',
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
      ScopeName.ViewEmailTemplates,
    ],
    description:
      'View the stream of incoming requests, and any details submit through the form or later enriched.',
    title: 'View Incoming Requests',
    type: ScopeType.View,
    products: [TranscendProduct.PrivacyRequests],
  },
  [ScopeName.ViewAssignedRequests]: {
    dependencies: [
      ScopeName.ViewGlobalAttributes,
      ScopeName.ViewDataSubjectRequestSettings,
      ScopeName.ViewEmailTemplates,
    ],
    description:
      // eslint-disable-next-line max-len
      'View the stream of incoming requests assigned to you and your team. You will be able to see any request details submitted through the form or later enriched.',
    title: 'View Assigned Privacy Requests',
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
    description:
      // eslint-disable-next-line max-len
      'Ability to manage and edit everything in the data mapping product. Includes the data inventory, ROPE, and content classification views.',
    title: 'Manage Data Inventory',
    type: ScopeType.Modify,
    products: [TranscendProduct.DataMapping],
  },
  [ScopeName.ManageAssignedDataInventory]: {
    dependencies: [ScopeName.ViewAssignedDataInventory],
    description:
      "Manage the data inventory rows in your organization's Data Map that are assigned to you or your team.",
    title: 'Manage Assigned Data Inventory',
    type: ScopeType.Modify,
    products: [TranscendProduct.DataMapping],
  },
  [ScopeName.ManageAssignedIntegrations]: {
    dependencies: [ScopeName.ViewAssignedIntegrations],
    description:
      "Manage the integrations in your organization's Data Map that are assigned to you or your team.",
    title: 'Manage Assigned Integrations',
    type: ScopeType.Modify,
    products: [TranscendProduct.PrivacyRequests, TranscendProduct.DataMapping],
  },
  [ScopeName.ViewDataMap]: {
    dependencies: [ScopeName.ViewGlobalAttributes],
    description:
      "View your organization's Data Map and see the configuration settings for each action your support.",
    title: 'View Data Map',
    type: ScopeType.View,
    products: [TranscendProduct.PrivacyRequests, TranscendProduct.DataMapping],
  },
  [ScopeName.ViewAssignedIntegrations]: {
    dependencies: [ScopeName.ViewGlobalAttributes],
    description:
      "View the integrations in your organization's Data Map that are assigned to you or your team.",
    title: 'View Assigned Integrations',
    type: ScopeType.View,
    products: [TranscendProduct.PrivacyRequests, TranscendProduct.DataMapping],
  },
  [ScopeName.ViewAssignedDataInventory]: {
    dependencies: [
      ScopeName.ViewGlobalAttributes,
      ScopeName.ViewDataSubjectRequestSettings,
    ],
    description:
      'Ability to view the resources in the data mapping product that are assigned to your or your team.',
    title: 'View Assigned Data Inventory',
    type: ScopeType.View,
    products: [TranscendProduct.DataMapping],
  },
  [ScopeName.ViewDataInventory]: {
    dependencies: [
      ScopeName.ViewDataMap,
      ScopeName.ViewGlobalAttributes,
      ScopeName.ViewDataSubjectRequestSettings,
    ],
    description:
      // eslint-disable-next-line max-len
      'Ability to view all of the data mapping product. Includes the data inventory, ROPA, and content classification views.',
    title: 'View Data Inventory',
    type: ScopeType.View,
    products: [TranscendProduct.DataMapping],
  },
  [ScopeName.ManageConsentManager]: {
    dependencies: [
      ScopeName.ViewConsentManager,
      ScopeName.ManageDataFlow,
      ScopeName.ManageConsentManagerDisplaySettings,
      ScopeName.ManageConsentManagerDeveloperSettings,
      ScopeName.DeployConsentManager,
      ScopeName.DeployTestConsentManager,
      ScopeName.ViewDataFlow,
    ],
    description:
      'Manage & deploy the consent manager changes to your websites.',
    title: 'Manage Consent Manager',
    type: ScopeType.Modify,
    products: [TranscendProduct.ConsentManager],
  },
  [ScopeName.ManageConsentManagerDeveloperSettings]: {
    dependencies: [ScopeName.ViewConsentManager],
    description:
      'Manage the developer settings for the Consent Manager. ' +
      'This does not allow for clicking the "Set Changes Live" button.',
    title: 'Manage Consent Manager Developer Settings',
    type: ScopeType.Modify,
    products: [TranscendProduct.ConsentManager],
  },
  [ScopeName.ManageConsentManagerDisplaySettings]: {
    dependencies: [ScopeName.ViewConsentManager],
    description:
      'Manage the display settings for the consent manager. This includes messages, styles and other UI settings.',
    title: 'Manage Consent Manager Display Settings',
    type: ScopeType.Modify,
    products: [TranscendProduct.ConsentManager],
  },
  [ScopeName.DeployTestConsentManager]: {
    dependencies: [ScopeName.ViewConsentManager],
    description:
      // eslint-disable-next-line max-len
      'Ability to publish changes to the test Consent Manager bundle. This changes the code contents of airgap.js and attempts to invalidate the CDN.',
    title: 'Deploy Test Consent Manager',
    type: ScopeType.Modify,
    products: [TranscendProduct.ConsentManager],
  },
  [ScopeName.DeployConsentManager]: {
    dependencies: [
      ScopeName.ViewConsentManager,
      ScopeName.DeployTestConsentManager,
    ],
    description:
      // eslint-disable-next-line max-len
      'Ability to publish changes to the production and test Consent Manager bundle. This changes the code contents of airgap.js and attempts to invalidate the CDN.',
    title: 'Deploy Consent Manager',
    type: ScopeType.Modify,
    products: [TranscendProduct.ConsentManager],
  },
  [ScopeName.ManageAssignedConsentManager]: {
    dependencies: [ScopeName.ViewAssignedConsentManager],
    description: 'Manage Data Flows & Cookies assigned to you or your team.',
    title: 'Manage Assigned Consent Manager',
    type: ScopeType.Modify,
    products: [TranscendProduct.ConsentManager],
  },
  [ScopeName.ManageDataFlow]: {
    dependencies: [ScopeName.ViewDataFlow],
    description:
      'Ability to manage and delete Data Flows and Cookies within the Consent Manager product.',
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
  [ScopeName.ViewAssignedConsentManager]: {
    dependencies: [ScopeName.ViewGlobalAttributes],
    description: 'View Data Flows and Cookies assigned to you or your team.',
    title: 'View Assigned Consent Manager',
    type: ScopeType.View,
    products: [TranscendProduct.ConsentManager],
  },
  [ScopeName.ViewConsentManager]: {
    title: 'View Consent Manager',
    type: ScopeType.View,
    dependencies: [
      ScopeName.ViewGlobalAttributes,
      ScopeName.ViewManagedConsentDatabaseAdminApi,
    ],
    description: 'View the consent manager configuration.',
    products: [TranscendProduct.ConsentManager],
  },
  [ScopeName.ViewAssessments]: {
    title: 'View Assessments',
    dependencies: [],
    description: 'View the assessments and assessment templates.',
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
  [ScopeName.ViewAssignedAssessments]: {
    title: 'View Assigned Assessments',
    dependencies: [],
    description: 'View the assigned assessments forms.',
    type: ScopeType.View,
    products: [TranscendProduct.Assessments, TranscendProduct.DataMapping],
  },
  [ScopeName.ManageAssignedAssessments]: {
    title: 'Manage Assigned Assessments',
    dependencies: [ScopeName.ViewAssignedAssessments],
    description: 'Manage and edit the assigned assessments.',
    type: ScopeType.Modify,
    products: [TranscendProduct.Assessments, TranscendProduct.DataMapping],
  },
  [ScopeName.ApproveAssessments]: {
    title: 'Approve Assessments',
    dependencies: [ScopeName.ViewAssessments],
    description: 'Approve the assessments and assessment templates',
    type: ScopeType.Modify,
    products: [TranscendProduct.Assessments, TranscendProduct.DataMapping],
  },
  [ScopeName.ViewPathfinder]: {
    title: 'View Pathfinder',
    dependencies: [],
    description: 'View the pathfinder settings.',
    type: ScopeType.View,
    products: [TranscendProduct.Pathfinder],
  },
  [ScopeName.ManagePathfinder]: {
    title: 'Manage Pathfinder',
    dependencies: [ScopeName.ViewPathfinder],
    description:
      'Manage the pathfinder settings under that pathfinder side menu',
    type: ScopeType.Modify,
    products: [TranscendProduct.Pathfinder],
  },
  [ScopeName.ViewContractScanning]: {
    title: 'View Contract Scanning',
    dependencies: [],
    description:
      'View the contract scanning side menu - including setting and contracts.',
    type: ScopeType.View,
    products: [TranscendProduct.Pathfinder],
  },
  [ScopeName.ManageContractScanning]: {
    title: 'Manage Contract Scanning',
    dependencies: [ScopeName.ViewContractScanning],
    description:
      'Upload and manage contracts under the contract scanning side menu',
    type: ScopeType.Modify,
    products: [TranscendProduct.Pathfinder],
  },
  [ScopeName.ViewPrompts]: {
    title: 'View Prompts',
    dependencies: [],
    description: 'View the prompts and prompt templates.',
    type: ScopeType.View,
    products: [TranscendProduct.PromptManager],
  },
  [ScopeName.ManagePrompts]: {
    title: 'Manage Prompts',
    dependencies: [ScopeName.ViewPrompts],
    description: 'Manage and edit prompts and prompt templates',
    type: ScopeType.Modify,
    products: [TranscendProduct.PromptManager],
  },
  [ScopeName.ViewPromptRuns]: {
    title: 'View Prompt Runs',
    dependencies: [ScopeName.ViewPrompts],
    description: 'View the output run results for prompts.',
    type: ScopeType.View,
    products: [TranscendProduct.PromptManager],
  },
  [ScopeName.ManagePromptRuns]: {
    title: 'Manage Prompt Runs',
    dependencies: [ScopeName.ViewPromptRuns, ScopeName.ViewPrompts],
    description: 'Manage, edit and create prompt run results',
    type: ScopeType.Modify,
    products: [TranscendProduct.PromptManager],
  },
  [ScopeName.ViewCodeScanning]: {
    title: 'View Code Scanning',
    dependencies: [],
    description: 'View the code scanning tables.',
    type: ScopeType.View,
    products: [TranscendProduct.DataMapping],
  },
  [ScopeName.ManageCodeScanning]: {
    title: 'Manage Code Scanning',
    dependencies: [ScopeName.ViewCodeScanning],
    description: 'Manage, edit and create records in code scanning',
    type: ScopeType.Modify,
    products: [TranscendProduct.DataMapping],
  },
  [ScopeName.ExecutePrompt]: {
    title: 'Execute Prompt',
    dependencies: [ScopeName.ViewPromptRuns, ScopeName.ViewPrompts],
    description: 'Ability to execute a prompt and view the outputs',
    type: ScopeType.Modify,
    products: [TranscendProduct.PromptManager],
  },
  [ScopeName.ViewAuditorRuns]: {
    title: 'View Auditor Runs',
    dependencies: [],
    description: 'View the output run results for Auditor.',
    type: ScopeType.View,
    products: [TranscendProduct.Auditor],
  },
  [ScopeName.ManageAuditor]: {
    title: 'Manage Auditor Runs and Schedules',
    dependencies: [ScopeName.ViewAuditorRuns],
    description: 'Manage, edit and create prompt run results',
    type: ScopeType.Modify,
    products: [TranscendProduct.Auditor],
  },
  [ScopeName.ExecuteAuditor]: {
    title: 'Execute Auditor',
    dependencies: [ScopeName.ViewAuditorRuns],
    description: 'Ability to execute or schedule Auditor and view the outputs',
    type: ScopeType.Modify,
    products: [TranscendProduct.Auditor],
  },
  [ScopeName.ApprovePrompts]: {
    title: 'Approve Prompts',
    dependencies: [ScopeName.ViewPrompts],
    description: 'Approve the prompts and prompt templates',
    type: ScopeType.Modify,
    products: [TranscendProduct.PromptManager],
  },
  [ScopeName.ManageActionItemCollections]: {
    title: 'Manage Action Item Collections',
    dependencies: [],
    description: 'Manage and edit action item collections',
    type: ScopeType.Modify,
    products: [TranscendProduct.Admin],
  },
  [ScopeName.ViewManagedConsentDatabaseAdminApi]: {
    title: 'View Managed Consent Database Admin API',
    dependencies: [],
    description:
      'Ability to query user consent preferences with the Managed Consent Database Admin API',
    type: ScopeType.View,
    products: [
      TranscendProduct.ConsentManager,
      TranscendProduct.PreferenceStore,
    ],
  },
  [ScopeName.ManageStoredPreferences]: {
    title: 'Modify User Stored Preferences',
    dependencies: [ScopeName.ViewManagedConsentDatabaseAdminApi],
    description: 'Ability to make updates to user stored consent preferences',
    type: ScopeType.Modify,
    products: [
      TranscendProduct.ConsentManager,
      TranscendProduct.PreferenceStore,
    ],
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
