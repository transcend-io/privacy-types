/** AssessmentTrigger types */
import { makeEnum } from '@transcend-io/type-utils';

/**
 * The possible actions of an Assessment Trigger configuration
 */
export const AssessmentTriggerAction = makeEnum({
  /** Kicks off a secondary assessment and assigns it to some respondents */
  SendSecondaryAssessment: 'SEND_SECONDARY_ASSESSMENT',
});

/**
 * Overload type
 */
export type AssessmentTriggerAction =
  typeof AssessmentTriggerAction[keyof typeof AssessmentTriggerAction];


/**
 * The possible events to enable the actions of an Assessment Trigger configuration
 */
export const AssessmentTriggerEvent = makeEnum({
   /** triggers the action when the form is submitted */
   OnSubmission: 'ON_SUBMISSION',
   /** triggers the action when the form is approved */
   OnApproval: 'ON_APPROVAL',
});

/**
 * Overload type
 */
export type AssessmentTriggerEvent =
  typeof AssessmentTriggerEvent[keyof typeof AssessmentTriggerEvent];



