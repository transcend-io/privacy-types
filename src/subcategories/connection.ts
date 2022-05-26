import { makeEnum } from '@transcend-io/type-utils';

/**
 * Permanent (e.g., device IDs, MAC address) or temporary (e.g., IP address)
 * identifiers needed to establish a connection for the current browsing session.
 */
export const ConnectionSubCategory = makeEnum({
  /** A Media Access Control address */
  MAC_ADDRESS: 'MAC_ADDRESS',
  /** An internet protocol address */
  IP_ADDRESS: 'IP_ADDRESS',
  /** Fallback subcategory */
  Connection: 'CONNECTION',
});

/**
 * Overload with type of integration
 */
export type ConnectionSubCategory =
  typeof ConnectionSubCategory[keyof typeof ConnectionSubCategory];
