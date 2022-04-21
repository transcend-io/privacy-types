import { makeEnum } from '@transcend-io/type-utils';

export const DeviceSubCategory = makeEnum({
  // TODO: https://transcend.height.app/T-14003 - add more subcategories
  /** Fallback subcategory */
  Device: 'DEVICE',
});

/**
 * Overload with type of integration
 */
export type DeviceSubCategory =
  typeof DeviceSubCategory[keyof typeof DeviceSubCategory];
