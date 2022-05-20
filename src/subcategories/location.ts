import { makeEnum } from '@transcend-io/type-utils';

export const LocationSubCategory = makeEnum({
  /** Fallback subcategory */
  Location: 'LOCATION',
  /** IP address */
  IPAddress: 'IP_ADDRESS',
  /** GPS coordinates */
  GPSCoordinates: 'GPS_COORDINATES',
});

/**
 * Overload with type of integration
 */
export type LocationSubCategory =
  typeof LocationSubCategory[keyof typeof LocationSubCategory];
