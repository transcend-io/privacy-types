/**
 * The types of files that can be used to detect a code package
 */
export enum CodePackageType {
  PackageJson = 'PACKAGE_JSON',
  RequirementsTxt = 'REQUIREMENTS_TXT',
  Gradle = 'GRADLE',
  CocoaPods = 'COCOA_PODS',
  Pubspec = 'PUBSPEC',
  Gemfile = 'GEMFILE',
}
