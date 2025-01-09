/**
 * TODO:
 * - consider adding the approvalState to inform the status
 * 
 * - form -> status = 'Not Started' | 'In Progress' | 'Under Review'
 *      - form -> approvers -> approvalState: 'OPEN' and resultName: null
 * - form -> status = 'Completed'
 *      - from -> approvers -> approvalState: 'APPROVED' | 'REJECTED' and resultName not null
 * 
 * - form -> status is called "Stage" in the CSV
 * - form -> resultName is called "Result" in the CSV
 *           
 * - csv Approver sometimes is a person, sometimes is a company
 * 
 * - Order of filling:
 *      - submittedOn -> completedOn
 * 
 * - completedOn is only populated if resultName is!
 */


/** All columns expected to be found in a OneTrust Assessment csv */
export enum OneTrustAssessmentCsvColumn {
    /** comma-separated IDs of the user assigned as an approver. */
    approverId = 'approverId',
    /** comma-separated Names of the user assigned as an approver. */
    approverName = 'approverName',
    /** comma-separated Date and times at which the assessment was approved. */
    approverApprovedOn = 'approverApprovedOn',
    /** ID of an assessment. */
    assessmentId = 'assessmentId',
    /** Number assigned to an assessment. */
    assessmentNumber = 'assessmentNumber',
    /** Date and time at which the assessment was completed. It's null if the form has not been approved or rejected */
    completedOn = 'completedOn',
    /** The name of the creator */
    createdByName = 'createdByName',
    /** Date and time at which the assessment was created. */
    createdDT = 'createdDT',
    /** Date and time by which the assessment must be completed. */
    deadline = 'deadline',
    /** Description of the assessment. */
    description = 'description',
    /** Overall inherent risk score without considering the existing controls. */
    inherentRiskScore = 'inherentRiskScore',
    /** Date and time at which the assessment was last updated. */
    lastUpdated = 'lastUpdated',
    /** Number of risks captured on the assessment with a low risk level. */
    lowRisk = 'lowRisk',
    /** Number of risks captured on the assessment with a medium risk level. */
    mediumRisk = 'mediumRisk',
    /** Number of risks captured on the assessment with a high risk level. */
    highRisk = 'highRisk',
    /** Name of the assessment. */
    name = 'name',
    /** Number of open risks that have not been addressed. */
    openRiskCount = 'openRiskCount',
    /** The name of the organization group */
    orgGroupName = 'orgGroupName',
    /** comma-separated names of the primary record. */
    primaryEntityDetailsName = 'primaryEntityDetailsName',
    /** comma-separated numbers associated with the primary record. */
    primaryEntityDetailsNumber = 'primaryEntityDetailsNumber',
    /** comma-separated display names of the primary record. */
    primaryEntityDetailsDisplayName = 'primaryEntityDetailsDisplayName',
    /** Type of inventory record designated as the primary record. */
    primaryRecordType = 'primaryRecordType',
    /** Overall risk score after considering existing controls. */
    residualRiskScore = 'residualRiskScore',
    /** comma-separated names or emails of the respondents */
    respondentsName = 'respondentsName',
    /** Result of the assessment. */
    result = 'result',
    /** Name of the result of the assessment. */
    resultName = 'resultName',
    /** Risk level of the assessment. */
    riskLevel = 'riskLevel',
    /** Status of the assessment. */
    status = 'status',
    /** Date and time at which the assessment was submitted. */
    submittedOn = 'submittedOn',
    /** List of tags associated with the assessment. */
    tags = 'tags',
    /** The desired target risk score. */
    targetRiskScore = 'targetRiskScore',
    /** The name of the parent template */
    templateName = 'templateName',
    /** Number of total risks on the assessment. */
    totalRiskCount = 'totalRiskCount',
    /** Number of very high risks on the assessment. */
    veryHighRisk = 'veryHighRisk',
    /** Welcome text if any in the assessment. */
    welcomeText = 'welcomeText',
    /********** SECTION  ********************/
    /** Name of the section. */
    sectionName = 'sectionName',
    /** Description of the section header. */
    sectionDescription = 'sectiondescription',
    /** Sequence of the section within the form */
    sectionSequence = 'sectionsequence',
    /** THe name or email of the user who submitted the section */
    sectionSubmittedByName = 'sectionSubmittedByName',
    /** Date of the submission */
    sectionSubmittedDt = 'sectionSubmittedDt',
    /********** QUESTIONS  ********************/
    /** Order in which the question appears in the assessment. */
    questionSequence = 'questionsequence',
    /** Type of question in the assessment. */
    questionType = 'questionquestionType',
    /** Indicates whether a response to the question is required. */
    questionRequired = 'questionrequired',
    /** Description of the question. */
    questionDescription = 'questiondescription',
    /** Tooltip text within a hint for the question. */
    questionHint = 'questionhint',
    /** The text of a question. */
    questionContent = 'questioncontent',
    /** Indicates whether justification comments are required for the question. */
    questionRequireJustification = 'questionrequireJustification',
    /** comma-separated names of the question options */
    questionOptionsOption = 'questionOptionsOption',
    /** comma-separated IDs of the question options */
    questionOptionsId = 'questionOptionsId',
    /** comma-separated content of the question responses */
    questionResponsesResponse = 'questionResponsesResponse',
    /** comma-separated IDs of the question responses */
    questionResponsesId = 'questionResponsesId',
    /** Justification comments for the given response. */
    questionResponseJustification = 'questionResponseJustification',
    /** comma-separated levels of risk flagged on the question. */
    questionRisksLevel = 'questionRisksLevel',
    /** comma-separated scores of risk flagged on the question. */
    questionRisksScore = 'questionRisksScore',
    /** comma-separated probabilities of risk flagged on the question. */
    questionRisksProbability = 'questionRisksProbability',
    /** comma-separated impacts Level of risk flagged on the question. */
    questionRisksImpactLevel = 'questionRisksImpactLevel',
    /** The ID */
    ID = 'ID',
    /** The Name of the assessment form */
    Name = 'Name',
    /** The Name of parent template  */
    Template = 'Template',
    /** The Description of the parent template */
    Description = 'Description',
    /** The name or email of the form approver */
    Approver = 'Approver',
    /** The name or email of the form respondent */
    Respondent = 'Respondent',
    /** The name or email of the form creator */
    Creator = 'Creator',
    /** The creation date of the form */
    DateCreated = 'Date Created',
    /** The deadline for filling out the form */
    Deadline = 'Deadline',
    /** The date the form was completed */
    DateCompleted = 'Date Completed',
    /** The date the form was submitted */
    DateSubmitted = 'Date Submitted',
    /** The form stage */
    Stage = 'Stage',
    /** The form result */
    Result = 'Result',
    /** The very high risks */
    VeryHighRisks = 'Very High Risks',
    /** The high risks */
    HighRisks = 'High Risks',
    /** The medium risks */
    MediumRisks = 'Medium Risks',
    /** The low risks */
    LowRisks = 'Low Risks',
    /** The total risks */
    TotalRisks = 'Total Risks',
    /** The form's residual risk level */
    ResidualRiskLevel = 'Residual Risk Level',
    /** The Primary Record Id */
    PrimaryRecordId = 'Primary Record Id',
    /** The Primary Record Name */
    PrimaryRecordName = 'Primary Record Name',
    /** The Template Version */
    TemplateVersion = 'Template Version',
    /** The GUID */
    GUID = 'GUID',
    /** The Residual Risk Score */
    ResidualRiskScore = 'Residual Risk Score',
    /** The Tags */
    Tags = 'Tags',
    /** The Open Risk Count */
    OpenRiskCount = 'Open Risk Count',
    /** The pending reviews */
    PendingReviews = 'Pending Reviews',
    /** The result comments */
    ResultComments = 'Result Comments',
    /** The Inherent Risk Level */
    InherentRiskLevel = 'Inherent Risk Level',
    /** The Target Risk Level */
    TargetRiskLevel = 'Target Risk Level',
    /** The Inherent Risk Score */
    InherentRiskScore = 'Inherent Risk Score',
    /** The Target Risk Score */
    TargetRiskScore = 'Target Risk Score',
    /** The Approval Stage */
    ApprovalStage = 'Approval Stage',
    /** The Workflows */
    Workflows = 'Workflows',
    /** The date the form was last updated */
    LastUpdated = 'Last Updated',
    /** The form status */
    Status = 'Status',
    /** The Assessment Score */
    AssessmentScore = 'Assessment Score',
    /** The Submission Progress */
    SubmissionProgress = 'Submission Progress (%)',
    /** The Open Info Request */
    OpenInfoRequest = 'Open Info Request',
  }
  
  /** the columns that must be present in every row of a OneTrust Assessment csv */
  export enum OneTrustAssessmentCsvRequiredColumn {
    /** The Name of the assessment form */
    Name = OneTrustAssessmentCsvColumn.Name,
    /** The Name of the parent template */
    Template = OneTrustAssessmentCsvColumn.Template,
  }
  
  /** the columns of a OneTrust Assessment csv that must be treated as metadata */
  export enum OneTrustMetadataColumn {
    ID = OneTrustAssessmentCsvColumn.ID,
    Approver = OneTrustAssessmentCsvColumn.Approver,
    Respondent = OneTrustAssessmentCsvColumn.Respondent,
    Creator = OneTrustAssessmentCsvColumn.Creator,
    DateCreated = OneTrustAssessmentCsvColumn.DateCreated,
    DateCompleted = OneTrustAssessmentCsvColumn.DateCompleted,
    DateSubmitted = OneTrustAssessmentCsvColumn.DateSubmitted,
    VeryHighRisks = OneTrustAssessmentCsvColumn.VeryHighRisks,
    HighRisks = OneTrustAssessmentCsvColumn.HighRisks,
    MediumRisks = OneTrustAssessmentCsvColumn.MediumRisks,
    LowRisks = OneTrustAssessmentCsvColumn.LowRisks,
    TotalRisks = OneTrustAssessmentCsvColumn.TotalRisks,
    ResidualRiskLevel = OneTrustAssessmentCsvColumn.ResidualRiskLevel,
    PrimaryRecordId = OneTrustAssessmentCsvColumn.PrimaryRecordId,
    PrimaryRecordName = OneTrustAssessmentCsvColumn.PrimaryRecordName,
    TemplateVersion = OneTrustAssessmentCsvColumn.TemplateVersion,
    GUID = OneTrustAssessmentCsvColumn.GUID,
    ResidualRiskScore = OneTrustAssessmentCsvColumn.ResidualRiskScore,
    Tags = OneTrustAssessmentCsvColumn.Tags,
    OpenRiskCount = OneTrustAssessmentCsvColumn.OpenRiskCount,
    PendingReviews = OneTrustAssessmentCsvColumn.PendingReviews,
    ResultComments = OneTrustAssessmentCsvColumn.ResultComments,
    InherentRiskLevel = OneTrustAssessmentCsvColumn.InherentRiskLevel,
    TargetRiskLevel = OneTrustAssessmentCsvColumn.TargetRiskLevel,
    InherentRiskScore = OneTrustAssessmentCsvColumn.InherentRiskScore,
    TargetRiskScore = OneTrustAssessmentCsvColumn.TargetRiskScore,
    Workflows = OneTrustAssessmentCsvColumn.Workflows,
    AssessmentScore = OneTrustAssessmentCsvColumn.AssessmentScore,
  }
  