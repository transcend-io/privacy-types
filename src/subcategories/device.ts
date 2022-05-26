import { makeEnum } from '@transcend-io/type-utils';

/**
 * Permanent (e.g., device IDs, MAC address) or temporary (e.g., IP address)
 * identifiers needed to establish a connection for the current
 * browsing session.
 */
export const DeviceSubCategory = makeEnum({
  /** A Media Access Control address used to uniquely identify devices on a network */
  MACAddress: 'MAC_ADDRESS',
  /** An internet protocol address  */
  IPAddress: 'IP_ADDRESS',
  /** Fallback subcategory */
  Device: 'DEVICE',
});

/**
 * Overload with type of integration
 */
export type DeviceSubCategory =
  typeof DeviceSubCategory[keyof typeof DeviceSubCategory];
