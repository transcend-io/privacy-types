import { makeEnum } from '@transcend-io/type-utils';

export const LocationSubCategory = makeEnum({
  /** An address where an individual is located */
  PhysicalAddress: 'PHYSICAL_ADDRESS',
  /** Exact coordinates for an individual's location */
  PreciseGeolocation: 'PRECISE_GEOLOCATION',
  /** Approximate area where an individual is located */
  ApproximateLocation: 'APPROXIMATE_LOCATION',
  /** Fallback subcategory */
  Location: 'LOCATION',
});

/**
 * Overload with type of integration
 */
export type LocationSubCategory =
  typeof LocationSubCategory[keyof typeof LocationSubCategory];
