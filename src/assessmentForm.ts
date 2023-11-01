/** AssessmentForm status types */
export enum AssessmentFormStatus {
    /** The form has been created from a template and shared to be filled out */
  Shared = 'SHARED',
  /** The form is in process of being answered */
  InProgress = 'IN_PROGRESS',
  /** The form has been fully answered and is being reviewed */
  InReview = 'IN_REVIEW',
  /** The reviewers requested changes to the answers */
  ChangesRequested = 'CHANGES_REQUESTED',
  /** The reviewers rejected the answers */
  Rejected = 'REJECTED',
  /** The reviewers approved the answers */
  Approved = 'APPROVED',
}

export enum AssessmentFormTemplateStatus {
    Draft = 'DRAFT',
    Published = 'PUBLISHED',
}