import { makeEnum } from '@transcend-io/type-utils';

export const HealthSubCategory = makeEnum({
  /** Fallback subcategory */
  Health: 'HEALTH',
  /** Life expectancy */
  LifeExpectancy: 'LIFE_EXPECTANCY',
  /** Risk factors */
  RiskFactors: 'RISK_FACTORS',
  /** Pre existing conditions */
  PreExistingConditions: 'PRE_EXISTING_CONDITIONS',
  /** Bio metrics */
  Biometrics: 'BIOMETRICS',
  /** Fitness tracking */
  FitnessTracking: 'FITNESS_TRACKING',
  /** Food consumption */
  FoodConsumption: 'FOOD_CONSUMPTION',
  /** Treatment records */
  TreatmentRecords: 'TREATMENT_RECORDS',
  /** Imaging */
  Imaging: 'IMAGING',
  /** Prescription */
  Prescriptions: 'PRESCRIPTIONS',
  /** Immunization records */
  ImmunizationRecords: 'IMMUNIZATION_RECORDS',
  /** Drug purchases */
  DrugPurchases: 'DRUG_PURCHASES',
  /** Illicit drug use */
  IllicitDrugUse: 'ILLICIT_DRUG_USE',
  /** Pregnancy */
  Pregnancy: 'PREGNANCY',
});

/**
 * Overload with type of integration
 */
export type HealthSubCategory =
  typeof HealthSubCategory[keyof typeof HealthSubCategory];
