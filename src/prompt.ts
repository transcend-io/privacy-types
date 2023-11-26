/**
 * These are the names of the template variables
 * that can be injected into an HTML template
 */
export enum TemplateVariableModelName {
  Attribute = 'attribute',
  BusinessEntity = 'businessEntity',
  BusinessEntities = 'businessEntities',
  DataCategory = 'dataCategory',
  DataCategories = 'dataCategories',
  Vendor = 'vendor',
  Vendors = 'vendors',
  DataSilo = 'dataSilo',
  DataSilos = 'dataSilos',
  ProcessingPurpose = 'processingPurpose',
  ProcessingPurposes = 'processingPurposes',
  DataPointProperty = 'dataPointProperty',
  DataPointObject = 'dataPointObject',
  DataReport = 'dataReport',
}

/**
 * The response format of a LLM prompt
 */
export enum PromptResponseFormat {
  Text = 'text',
  JsonObject = 'json_object',
}
