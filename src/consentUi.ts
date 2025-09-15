import * as t from 'io-ts';

/**
 * Types representing the top-level consent UI configuration
 * Includes keys for regimes, variants, and themes
 */
/** Key representing a specific regime */
export type RegimeKey = t.string;

/** Key representing a specific consent UI variant */
export type VariantKey = t.string;

/** Key representing a specific theme */
export type ThemeKey = t.string;

/** String that represents an integer value */
export type IntegerString = t.string;

/** String that represents a DOM element ID */
export type DOMElementId = t.string;

/** String that represents a semicolon-delimited list of regime keys */
export type SemicolonDelimitedRegimeKeyString = t.string;
