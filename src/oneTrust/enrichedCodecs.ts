import * as t from 'io-ts';

import {
  OneTrustApprover,
  OneTrustAssessment,
  OneTrustAssessmentQuestion,
  OneTrustAssessmentQuestionRisk,
  OneTrustAssessmentSection,
  OneTrustGetAssessmentResponse,
  OneTrustGetRiskResponse,
  OneTrustGetUserResponse,
  OneTrustAssessmentCreatedBy,
} from './endpoints';

export const OneTrustEnrichedRisk = t.intersection([
  OneTrustAssessmentQuestionRisk,
  t.type({
    description: OneTrustGetRiskResponse.props.description,
    name: OneTrustGetRiskResponse.props.name,
    treatment: OneTrustGetRiskResponse.props.treatment,
    treatmentStatus: OneTrustGetRiskResponse.props.treatmentStatus,
    type: OneTrustGetRiskResponse.props.type,
    stage: OneTrustGetRiskResponse.props.stage,
    state: OneTrustGetRiskResponse.props.state,
    result: OneTrustGetRiskResponse.props.result,
    categories: OneTrustGetRiskResponse.props.categories,
  }),
]);

/** Type override */
export type OneTrustEnrichedRisk = t.TypeOf<typeof OneTrustEnrichedRisk>;

export const OneTrustEnrichedRisks = t.union([
  t.array(OneTrustEnrichedRisk),
  t.null,
]);

/** Type override */
export type OneTrustEnrichedRisks = t.TypeOf<typeof OneTrustEnrichedRisks>;

export const OneTrustEnrichedAssessmentQuestion = t.intersection([
  t.type({
    ...OneTrustAssessmentQuestion.types[0].props,
    risks: OneTrustEnrichedRisks,
  }),
  t.partial({ ...OneTrustAssessmentQuestion.types[1].props }),
]);

/** Type override */
export type OneTrustEnrichedAssessmentQuestion = t.TypeOf<
  typeof OneTrustEnrichedAssessmentQuestion
>;

export const OneTrustEnrichedAssessmentSection = t.type({
  ...OneTrustAssessmentSection.props,
  questions: t.array(OneTrustEnrichedAssessmentQuestion),
});

/** Type override */
export type OneTrustEnrichedAssessmentSection = t.TypeOf<
  typeof OneTrustEnrichedAssessmentSection
>;

export const OneTrustUserDetails = t.type({
  active: OneTrustGetUserResponse.props.active,
  userType: OneTrustGetUserResponse.props.userType,
  emails: OneTrustGetUserResponse.props.emails,
  title: OneTrustGetUserResponse.props.title,
  givenName: t.union([t.string, t.null]),
  familyName: t.union([t.string, t.null]),
});
/** Type override */
export type OneTrustUserDetails = t.TypeOf<typeof OneTrustUserDetails>;

export const OneTrustEnrichedUser = t.type({
  ...OneTrustAssessmentCreatedBy.props,
  ...OneTrustUserDetails.props,
});

/** Type override */
export type OneTrustEnrichedUser = t.TypeOf<typeof OneTrustEnrichedUser>;

export const OneTrustEnrichedAssessmentResponse = t.type({
  ...OneTrustGetAssessmentResponse.props,
  approvers: t.array(
    t.type({
      ...OneTrustApprover.props,
      approver: t.type({
        ...OneTrustApprover.props.approver.props,
        ...OneTrustUserDetails.props,
      }),
    }),
  ),
  respondents: t.array(
    t.intersection([
      t.type({
        ...OneTrustGetAssessmentResponse.props.respondent.props,
      }),
      t.partial({
        ...OneTrustUserDetails.props,
      }),
    ]),
  ),
  createdBy: OneTrustEnrichedUser,
  sections: t.array(OneTrustEnrichedAssessmentSection),
});
/** Type override */
export type OneTrustEnrichedAssessmentResponse = t.TypeOf<
  typeof OneTrustEnrichedAssessmentResponse
>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { status, ...OneTrustAssessmentWithoutStatus } = OneTrustAssessment.props;
export const OneTrustEnrichedAssessment = t.intersection([
  t.type(OneTrustAssessmentWithoutStatus),
  OneTrustEnrichedAssessmentResponse,
]);

/** Type override */
export type OneTrustEnrichedAssessment = t.TypeOf<
  typeof OneTrustEnrichedAssessment
>;
