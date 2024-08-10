import { applyEnum, valuesOf } from '@transcend-io/type-utils';
import * as t from 'io-ts';

/**
 * The names of the components that can be provided css overrides
 */
export enum CustomizableComponent {
  /** H1 */
  H1 = 'h1',
  /** H2 */
  H2 = 'h2',
  /** H3 */
  H3 = 'h3',
  /** Body */
  Body = 'body',
  /** Style the text on the side menu */
  SideMenuText = 'sideMenuText',
  /** Primary button */
  PrimaryButton = 'primaryButton',
  /** Secondary button */
  SecondaryButton = 'secondaryButton',
  /** Email button */
  EmailButton = 'emailButton',
  /** Email container styles */
  EmailContainer = 'emailContainer',
  /** Hero image */
  Hero = 'hero',
  /** Hero background */
  HeroBackground = 'heroBackground',
  /** Take control confirmation styles */
  TakeControlConfirmation = 'takeControlConfirmation',
}

/**
 * The names of the text fonts
 */
export enum CustomizableText {
  /** Headers */
  FontFamilyHeader = 'fontFamilyHeader',
  /** Body */
  FontFamilyBody = 'fontFamilyBody',
}

/**
 * The color palette that an organization can customize on their privacy center exposed in the default GUI.
 */
export enum ConfigurableColorPaletteColor {
  /**
   * Used everywhere...
   *
   * The primary color chosen by Company X will be applied by default to the following elements of the Privacy Center:
   *  1. **Hero background**
   *  2. **Sidebar navigation background**
   *  3. **Primary CTA (call to action)**
   *  4. **Primary links and active states**
   */
  Primary = 'primary',
  /**
   * Used everywhere...
   *
   * The secondary color chosen by Company X will be applied by default to the following elements of the Privacy Center::
   *   1. **Secondary CTAs**
   *   2. **Secondary links**
   */
  Secondary = 'secondary',
  /**
   * The background color will be set by the primary color by default with the ability to change it to secondary color, black or white.
   */
  SidebarNavBg = 'sidebarNavBg',
  /**
   * The hero background color
   */
  HeroBg = 'heroBg',
  /**
   * The background of the widget
   */
  WidgetBg = 'widgetBg',
}

/**
 * Colors that can be customized through a GUI only if the organization user has the extended brand customization setting.
 */
export enum ExtendedOnlyColorPaletteColor {
  // ///////////// //
  // Text Coloring //
  // ///////////// //

  /** The main text color to use when text is shown on an object colored bg */
  TextOnBg = 'textOnBg',
  /** A lighter text color to use when text is shown on an object colored bg */
  TextLightOnBg = 'textLightOnBg',
  /** The main text color to use when text is shown on an object colored primary */
  TextOnPrimary = 'textOnPrimary',
  /** Text on sidebar */
  TextOnSidebar = 'textOnSidebar',
  /** Accent on sidebar */
  AccentOnSidebar = 'accentOnSidebar',
  /** Text to use on hero */
  TextOnHero = 'textOnHero',
  /** Text to use on About Transcend widget */
  TextOnAboutTranscend = 'textOnAboutTranscend',
  /** Used to highlight text */
  Highlight = 'highlight',
  /** The color of the table outline */
  TableOutline = 'tableOutline',

  // //// //
  // Page //
  // //// //
  /** The page's accent background color (used in callouts and asides) */
  BgAccent = 'bgAccent',
  /** Error color -- something went wrong */
  Error = 'error',
}

/**
 * Custom CSS for privacy center
 */
export const PrivacyCenterComponentStyles = t.partial(
  applyEnum(CustomizableComponent, () => t.string),
);

/** Type override */
export type PrivacyCenterComponentStyles = t.TypeOf<
  typeof PrivacyCenterComponentStyles
>;

/**
 * Customizable color palette
 */
export const PrivacyCenterCustomizableColorPalette = t.intersection([
  t.record(valuesOf(ConfigurableColorPaletteColor), t.string),
  t.partial(applyEnum(ExtendedOnlyColorPaletteColor, () => t.string)),
]);

/** Type override */
export type PrivacyCenterCustomizableColorPalette = t.TypeOf<
  typeof PrivacyCenterCustomizableColorPalette
>;

/**
 * A font definition
 */
export const PrivacyCenterFontBasic = t.type({
  name: t.string,
  url: t.string,
});

/** Type override */
export type PrivacyCenterFontBasic = t.TypeOf<typeof PrivacyCenterFontBasic>;

/**
 * A font definition
 */
export const PrivacyCenterFont = t.intersection([
  PrivacyCenterFontBasic,
  t.partial({
    assets: t.array(PrivacyCenterFontBasic),
  }),
]);

/** Type override */
export type PrivacyCenterFont = t.TypeOf<typeof PrivacyCenterFont>;

export const PrivacyCenterTextStyles = t.partial(
  applyEnum(CustomizableText, () => PrivacyCenterFont),
);

/** Type override */
export type PrivacyCenterTextStyles = t.TypeOf<typeof PrivacyCenterTextStyles>;

/**
 * Input for defining a new theme
 */
export const PrivacyCenterTheme = t.intersection([
  t.type({
    /** The display name of the theme */
    name: t.string,
    /** The theme colors */
    colors: PrivacyCenterCustomizableColorPalette,
  }),
  t.partial({
    /** Styles to apply to components */
    componentStyles: PrivacyCenterComponentStyles,
    /** Override styles */
    textStyles: PrivacyCenterTextStyles,
  }),
]);

/** Type override */
export type PrivacyCenterTheme = t.TypeOf<typeof PrivacyCenterTheme>;

/**
 * The known colors that can be customized
 */
export type PrivacyCenterCustomizedColorPaletteColor =
  | ConfigurableColorPaletteColor
  | ExtendedOnlyColorPaletteColor;
