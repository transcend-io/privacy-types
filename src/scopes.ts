/* eslint-disable max-lines */
/**
 * The possible scopes that can be assigned to a user or team
 */
export enum ScopeName {
  /** Submit a new data subject request through the API */
  MakeDataSubjectRequest = 'makeDataSubjectRequest',
  /** Connect new data silos to the data map */
  ConnectDataSilos = 'connectDataSilos',
  /** Ability to make changes to the privacy center deployment */
  DeployPrivacyCenter = 'deployPrivacyCenter',
  /** Ability to make changes to Consent Manager configuration */
  ManageConsentManager = 'manageConsentManager',
  /** Ability to view the Consent Manager configuration */
  ViewConsentManager = 'viewConsentManager',
  /** The ability to manage access controls for users, teams and scopes */
  ManageAccessControl = 'manageAccessControl',
  /** Making new API keys and configuring existing */
  ManageApiKeys = 'manageApiKeys',
  /** Managing billing details */
  ManageBilling = 'manageBilling',
  /** Manage what on a data silo is included in a request */
  ManageDataMap = 'manageDataMap',
  /** Manage data flows (tracking purpose map & site scan results) */
  ManageDataFlow = 'manageDataFlow',
  /** Configure what types of requests can be submit to the organization, and who can send them */
  ManageDataSubjectRequestSettings = 'manageDataSubjectRequestSettings',
  /** Manage DSR email templates */
  ManageEmailTemplates = 'manageEmailTemplates',
  /** Manage top level organization settings and privacy center contacts */
  ManageOrganizationInfo = 'manageOrganizationInfo',
  /** Manage the privacy center configuration */
  ManagePrivacyCenter = 'managePrivacyCenter',
  /** View the privacy center configuration */
  ViewPrivacyCenter = 'viewPrivacyCenter',
  /** Make changes to RequestDataSilo  */
  ManageRequestCompilation = 'manageRequestCompilation',
  /** Manage the verification and enrichment steps */
  ManageRequestIdentities = 'manageRequestIdentities',
  /** Manage Request security related actions. */
  ManageRequestSecurity = 'manageRequestSecurity',
  /** Manage the ability to rotate Sombra root keys. */
  ManageSombraRootKeys = 'manageSombraRootKeys',
  /** Manage the SSO settings */
  ManageSSO = 'manageSSO',
  /** View the existing email templates */
  ManageEmailDomains = 'manageEmailDomains',
  /** Ability to approve a request and manage interactions with the data subject */
  RequestApproval = 'requestApproval',
  /** View the API keys in the developer settings */
  ViewApiKeys = 'viewApiKeys',
  /** View the data flow (site scan results and tracking purpose map) */
  ViewDataFlow = 'viewDataFlow',
  /** View the datamap */
  ViewDataMap = 'viewDataMap',
  /** View the data subject request actions and data subject configurations */
  ViewDataSubjectRequestSettings = 'viewDataSubjectRequestSettings',
  /** View the existing email templates */
  ViewEmailTemplates = 'viewEmailTemplates',
  /** View the existing email templates */
  ViewEmailDomains = 'viewEmailDomains',
  /** View the request compilation process and files */
  ViewRequestCompilation = 'viewRequestCompilation',
  /** View the identifiers and enricher settings */
  ViewRequestIdentitySettings = 'viewRequestIdentitySettings',
  /** View the incoming request information */
  ViewRequests = 'viewRequests',
  /** View the organizations potential scopes */
  ViewScopes = 'viewScopes',
  /** View the SSO settings */
  ViewSSO = 'viewSSO',
  /** View the organization members */
  ViewEmployees = 'viewEmployees',
  /** View data subject status */
  ViewOptOutStatus = 'viewOptOutStatus',
  /** View data inventory */
  ViewDataInventory = 'viewDataInventory',
  /** Manage data inventory */
  ManageDataInventory = 'manageDataInventory',
  /** Manage global attributes */
  ManageGlobalAttributes = 'manageGlobalAttributes',
  /** View global attributes */
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
}

/**
 * The action scope definitions
 */
export const SCOPES: { [name in ScopeName]: ScopeDefinition } = {
  /** Submit a new data subject request through the API */
  [ScopeName.ViewDataFlow]: {
    dependencies: [ScopeName.ViewConsentManager],
    description: 'View Data Flows (tracking purpose maps, site scans)',
    title: 'View Data Flows',
    type: ScopeType.View,
  },
  [ScopeName.ManageDataFlow]: {
    dependencies: [ScopeName.ViewDataFlow],
    description:
      'Manage & Deploy Data Flows (tracking purpose maps, site scans, cookies)',
    title: 'Manage Data Flows',
    type: ScopeType.Modify,
  },
  [ScopeName.ManageRequestSecurity]: {
    dependencies: [],
    description:
      'ReSign expired request encryption contexts, and data silo contexts.',
    title: 'Manage Request Security',
    type: ScopeType.Modify,
  },
  [ScopeName.ManageSombraRootKeys]: {
    dependencies: [],
    description: 'Rotate Hosted Sombra keys',
    title: 'Rotate Hosted Sombra keys',
    type: ScopeType.Modify,
  },
  [ScopeName.ViewConsentManager]: {
    title: 'View Consent Manager',
    type: ScopeType.View,
    dependencies: [],
    description: 'View the Consent Manager configuration',
  },
  /** Manage the consent manager and data flows */
  [ScopeName.ManageConsentManager]: {
    dependencies: [
      ScopeName.ViewConsentManager,
      ScopeName.ManageDataFlow,
      ScopeName.ViewDataFlow,
    ],
    description: 'Manage & Deploy Consent Manager',
    title: 'Manage Consent Manager',
    type: ScopeType.Modify,
  },
  /** Submit a new data subject request through the API */
  [ScopeName.MakeDataSubjectRequest]: {
    dependencies: [
      ScopeName.ViewDataSubjectRequestSettings,
      ScopeName.ViewRequestIdentitySettings,
    ],
    description:
      'Submit new data subject requests programmatically through our API.',
    title: 'Submit New Data Subject Request',
    type: ScopeType.Modify,
  },
  /** Connect new data silos to the data map */
  [ScopeName.ConnectDataSilos]: {
    dependencies: [
      ScopeName.ViewDataMap,
      ScopeName.ManageDataMap,
      ScopeName.ViewEmailTemplates,
    ],
    description: 'Connect new data silos to your Data Map.',
    title: 'Connect Data Silos',

    type: ScopeType.Modify,
  },
  /** Ability to make changes to the privacy center deployment */
  [ScopeName.DeployPrivacyCenter]: {
    dependencies: [
      ScopeName.ManagePrivacyCenter,
      // ScopeName.ViewDataPractices,
    ],
    description:
      'Launch the Privacy Center on your own domain, and publish new changes to your deployed instance.',
    title: 'Publish Privacy Center',
    type: ScopeType.Modify,
  },
  /** The ability to manage access controls for users, teams and scopes */
  [ScopeName.ManageAccessControl]: {
    dependencies: [ScopeName.ViewEmployees, ScopeName.ViewScopes],
    description:
      'Manage what employees in your organization can access within Transcend.',
    title: 'Manage Access Controls',
    type: ScopeType.Modify,
  },
  /** The ability to manage billing details */
  [ScopeName.ManageBilling]: {
    dependencies: [],
    description: 'Manage billing details for your organization.',
    title: 'Manage Billing',
    type: ScopeType.Modify,
  },
  /** The ability to manage SSO credentials */
  [ScopeName.ManageSSO]: {
    dependencies: [ScopeName.ViewSSO],
    description: 'Manage SSO configuration for members of your organization.',
    title: 'Manage SSO',
    type: ScopeType.Modify,
  },
  /** Making new API keys and configuring existing */
  [ScopeName.ManageApiKeys]: {
    dependencies: [ScopeName.ViewApiKeys],
    description:
      'Create, update and delete API keys for programmatic access to your Transcend organization.',
    title: 'Manage API Keys',
    type: ScopeType.Modify,
  },
  /** Manage what on a data silo is included in a request */
  [ScopeName.ManageDataMap]: {
    dependencies: [ScopeName.ViewDataMap],
    description:
      'Edit the configurations on your data silos and determine what information should be included in a request.',
    title: 'Manage Data Map',
    type: ScopeType.Modify,
  },
  /** Configure what types of requests can be submit to the organization, and who can send them */
  [ScopeName.ManageDataSubjectRequestSettings]: {
    dependencies: [ScopeName.ViewDataSubjectRequestSettings],
    description:
      'Make changes to the request actions that your organization allows, as well as what data subjects you will serve.',
    title: 'Manage Data Subject Request Settings',
    type: ScopeType.Modify,
  },
  /** Manage DSR email templates */
  [ScopeName.ManageEmailTemplates]: {
    dependencies: [ScopeName.ViewEmailTemplates],
    description:
      'Manage the email communication templates that your organization uses to communicate with your data subjects.',
    title: 'Manage Email Templates',
    type: ScopeType.Modify,
  },
  /** Manage top level organization settings and privacy center contacts */
  [ScopeName.ManageOrganizationInfo]: {
    dependencies: [],
    description: 'Edit the top-level organization settings details.',
    title: 'Manage Organization Information',
    type: ScopeType.Modify,
  },
  /** Manage the sections on the privacy center */
  [ScopeName.ViewPrivacyCenter]: {
    dependencies: [],
    description: 'View the full configuration of the privacy center.',
    title: 'View Privacy Center Layout',
    type: ScopeType.View,
  },
  /** Manage the sections on the privacy center */
  [ScopeName.ManagePrivacyCenter]: {
    dependencies: [ScopeName.ViewPrivacyCenter],
    description:
      'Make changes to the privacy center configuration and policies.',
    title: 'Manage Privacy Center Layout',
    type: ScopeType.Modify,
  },
  /** Make changes to RequestDataSilo TODO more granular  */
  [ScopeName.ManageRequestCompilation]: {
    dependencies: [ScopeName.ViewRequests, ScopeName.ViewRequestCompilation],
    description:
      'Make changes to the compilation process of a request. This involves changing the status of data silos in your Data Map, as well as editing profiles and files.', // eslint-disable-line max-len
    title: 'Manage Request Compilation',
    type: ScopeType.Modify,
  },
  /** Manage the verification and enrichment steps */
  [ScopeName.ManageRequestIdentities]: {
    dependencies: [ScopeName.ViewRequestIdentitySettings],
    description:
      'Manage how your organization will verify the identities of new data subject requests, and how that identity will be enriched for all of your data silos to lookup that person.', // eslint-disable-line max-len
    title: 'Manage Request Identity Verification',
    type: ScopeType.Modify,
  },
  /** Ability to approve a request and manage interactions with the data subject */
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
  },
  /** View the API keys in the developer settings */
  [ScopeName.ViewApiKeys]: {
    dependencies: [],
    description:
      'View the API keys on your account and see what scopes are assigned to them.',
    title: 'View API Keys',
    type: ScopeType.View,
  },
  /** View the datamap */
  [ScopeName.ViewDataMap]: {
    dependencies: [ScopeName.ViewGlobalAttributes],
    description:
      "View your organization's Data Map and see the configuration settings for each action your support",
    title: 'View Data Map',
    type: ScopeType.View,
  },
  /** View the data subject request actions and data subject configurations */
  [ScopeName.ViewDataSubjectRequestSettings]: {
    dependencies: [],
    description:
      'View the DSR actions settings and data subject categories that your organization supports.',
    title: 'View Data Subject Request Settings',
    type: ScopeType.View,
  },
  /** View the existing email templates */
  [ScopeName.ViewEmailTemplates]: {
    dependencies: [],
    description:
      'View the default email templates templates used to communicate with your data subjects.',
    title: 'View Email Templates',
    type: ScopeType.View,
  },
  /** View the request compilation process and files */
  [ScopeName.ViewRequestCompilation]: {
    dependencies: [ScopeName.ViewRequests],
    description:
      'View the status of requests as they compile across your Data Map.',
    title: 'View the Request Compilation',
    type: ScopeType.View,
  },
  /** View the identifiers and enricher settings */
  [ScopeName.ViewRequestIdentitySettings]: {
    dependencies: [],
    description:
      'View the settings for data subject request identity verification.',
    title: 'View Identity Verification Settings',
    type: ScopeType.View,
  },
  /** The ability to view SSO credentials */
  [ScopeName.ViewSSO]: {
    dependencies: [],
    description: 'View SSO configuration for your organization.',
    title: 'View SSO',
    type: ScopeType.View,
  },
  /** View the incoming request information */
  [ScopeName.ViewRequests]: {
    dependencies: [ScopeName.ViewGlobalAttributes],
    description:
      'View the stream of incoming requests, and any details submit through the form or later enriched.',
    title: 'View Incoming Requests',
    type: ScopeType.View,
  },
  /** View the organizations potential scopes */
  [ScopeName.ViewScopes]: {
    dependencies: [ScopeName.ViewEmployees],
    description:
      'View the potential access control scopes that can be assigned to members in the organization',
    title: 'View Scopes',
    type: ScopeType.View,
  },
  /** View the organization members */
  [ScopeName.ViewEmployees]: {
    dependencies: [],
    description: 'View the employees within your organization.',
    title: 'View Employees',
    type: ScopeType.View,
  },
  /** View the statuses of data subjects */
  [ScopeName.ViewOptOutStatus]: {
    dependencies: [],
    description:
      'Check the opt out status of data subjects of your organization',
    title: 'View Opt Out Status',
    type: ScopeType.View,
  },
  /** View email domains */
  [ScopeName.ViewEmailDomains]: {
    dependencies: [],
    description:
      'View the domains from which Transcend can send emails on behalf of your organization',
    title: 'View Email Domains',
    type: ScopeType.View,
  },
  /** Manage email domains */
  [ScopeName.ManageEmailDomains]: {
    dependencies: [ScopeName.ViewEmailDomains],
    description:
      'Manage the domains from which Transcend can send emails on behalf of your organization',
    title: 'Manage Email Domains',
    type: ScopeType.Modify,
  },
  /** View Data Inventory */
  [ScopeName.ViewDataInventory]: {
    dependencies: [ScopeName.ViewDataMap, ScopeName.ViewGlobalAttributes],
    description: 'Check data inventory information for your organization',
    title: 'View Data Inventory',
    type: ScopeType.View,
  },
  /** Manage Data Inventory */
  [ScopeName.ManageDataInventory]: {
    dependencies: [ScopeName.ViewDataInventory],
    description: 'Manage the data inventory information for your organization',
    title: 'Manage Data Inventory',
    type: ScopeType.Modify,
  },
  /** View the global attributes */
  [ScopeName.ViewGlobalAttributes]: {
    dependencies: [],
    description: 'View Global Attributes',
    title: 'VIew Global Attributes',
    type: ScopeType.View,
  },
  /** Manage the global attributes */
  [ScopeName.ManageGlobalAttributes]: {
    dependencies: [ScopeName.ViewGlobalAttributes],
    description: 'Manage Global Attributes',
    title: 'Manage Global Attributes',
    type: ScopeType.Modify,
  },
};
/* eslint-enable max-lines */
