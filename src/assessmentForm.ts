/** AssessmentForm status types */
import { makeEnum } from '@transcend-io/type-utils';

/**
 * AssessmentForm status types
 */
export enum AssessmentFormStatus {
  /** The form has been created but has not been shared with assignees */
  Draft = 'DRAFT',
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

/** AssessmentFormTemplate status types */
export enum AssessmentFormTemplateStatus {
  /** The template is being created */
  Draft = 'DRAFT',
  /** The template is ready to be used to create forms */
  Published = 'PUBLISHED',
}

/** How an assessment form template was created */
export const AssessmentFormTemplateSource = makeEnum({
  /** The template was created manually by a user creating sections, questions, etc in the AD or via API  */
  Manual: 'MANUAL',
  /** The template was auto-generated as a side effect of kicking off assessments from the Data Inventory */
  DataInventory: 'DATA_INVENTORY',
  /** The template was auto-generated as a side effect of importing OneTrust assessments */
  Import: 'IMPORT',
});

/**
 * Overload type
 */
export type AssessmentFormTemplateSource =
  typeof AssessmentFormTemplateSource[keyof typeof AssessmentFormTemplateSource];
