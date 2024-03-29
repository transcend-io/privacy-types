/**
 * Resources within the Transcend dashboard that support the attributes feature
 */
export enum AttributeSupportedResourceType {
  /** Action items table */
  ActionItem = 'actionItem',
  /** Data silos table */
  DataSilo = 'dataSilo',
  /** Subdatapoints table (shows up under Data Inventory > Data Points tab) */
  SubDataPoint = 'subDataPoint',
  /** Cookies tabs */
  AirgapCookie = 'airgapCookie',
  /** Data Flow tabs */
  AirgapDataFlow = 'airgapDataFlow',
  /** Requests table */
  Request = 'request',
  /** Vendor table */
  Vendor = 'vendor',
  /** Business entity table */
  BusinessEntity = 'businessEntity',
  /** Categories table */
  DataSubCategory = 'dataSubCategory',
  /** Processing purpose table */
  ProcessingPurposeSubCategory = 'processingPurposeSubCategory',
  /** Assessment table */
  Assessment = 'assessment',
  /** AssessmentTemplate table */
  AssessmentTemplate = 'assessmentTemplate',
  /** Prompt table */
  Prompt = 'prompt',
  /** PromptGroup table */
  PromptGroup = 'promptGroup',
  /** PromptRun table */
  PromptRun = 'promptRun',
}

/**
 * Types for attribute keys
 */
export enum AttributeKeyType {
  /** Multiple attribute values from this attribute key can be assigned to a resource */
  MultiSelect = 'MULTI_SELECT',
  /** Only a single attribute value from this attribute key can be assigned to a resource */
  SingleSelect = 'SINGLE_SELECT',
  /** Text-based attribute */
  Text = 'TEXT',
  /** Email-based attribute */
  EMAIL = 'EMAIL',
  /** Phone-based attribute */
  TELEPHONE = 'TELEPHONE',
  /** URL-based attribute */
  URL = 'URL',
  /** Assessment attribute */
  Assessment = 'ASSESSMENT',
}
