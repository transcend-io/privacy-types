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

/**
 * Autofocus toggle values ("on" / "off").
 */
export const AutofocusToggle = makeEnum({
  /** Enable autofocus */
  On: 'on',
  /** Disable autofocus */
  Off: 'off',
});

/** Override type */
export type AutofocusToggle =
  (typeof AutofocusToggle)[keyof typeof AutofocusToggle];

/**
 * All valid autofocus values:
 * - `"on"` / `"off"`
 * - or a DOM element ID string
 */
export type AutofocusValues = AutofocusToggle | DOMElementId;


/** The top-level configuration for the consent UI */
export const LoadOptions = t.intersection([
  t.type({
    regimeVariantMap: t.record(RegimeKey, VariantKey),
    regimeAutoPromptMap: t.record(RegimeKey, t.boolean),
    // variantConfigMap: t.record(VariantKey, UIConfiguration),
    themeConfigMap: t.record(ThemeKey, ThemeConfiguration),
    autofocus: AutofocusValues,
    uiZIndex: IntegerString,
    // css: AbsoluteUrlString,
    // If messageMap is not defined, messages will be fetched from `${messageFolder}/${localeKey}.json`
    messageFolder: AbsoluteUrlString,
    regimePrecedence: SemicolonDelimitedRegimeKeyString, // e.g. 'GDPR;CPRA;nFADP'
    // supportedLanguages: t.array(LocaleValue),
  }),
  t.partial({
  // if message map is defined, it will be used to retrieve localized messages
  messageMap: t.record(LocaleValue, AbsoluteUrlString),
  })
])