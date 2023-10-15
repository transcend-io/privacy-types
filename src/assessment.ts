/** Assessment status types */
export enum AssessmentStatus {
  Draft = 'DRAFT',
  Submitted = 'SUBMITTED',
  InReview = 'IN_REVIEW',
  ChangesRequested = 'CHANGES_REQUESTED',
  Rejected = 'REJECTED',
  Approved = 'APPROVED',
}

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
}
