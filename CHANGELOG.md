# Changelog

## v3.1.8 - 2015-03-04

### Added

- FORMS-72: geolocation pop-up with dynamic map

- FORMS-54: read-only views for fields that are set to read-only

### Changed

- FORMS-92: label of geolocation button indicates progress / activity

- FORMS-121: always request freshest geolocation data from device

    - HelpDesk: 3536-ERYZ-0783

### Fixed

- FORMS-120: update to pickadate v3.5.5 to fix date picker issues on iPads

- FORMS-117: choice fields that allow the user to add "other" values

- FORMS-127: required validation for choice fields allowing "other" values

- FORMS-105: properly migrate row class from Forms v2 definitions


## v3.1.7 - 2015-01-15



## v3.1.6 - 2014-11-18

### Changed

- consider Behaviours that attempt to watch all Elements to be "legacy"

    - these are typically migrated Forms v2 calculations

- "legacy" Behaviours are now specifically triggered by changes to an Element's
  `value` (or `html` for Message Elements)

- changes any property of an Element will still trigger best-practice Behaviours
  that watch specific Elements (instead of them all)

- all Behaviours will avoid watching Elements that relate to the Behaviour's
  Action(s), to prevent circular loops


### Fixed

- FORMS-110: certain Behaviours definitions will no longer infinitely loop


## v3.1.5 - 2014-11-14

### Added

- FORMS-108: Better UI for Date/Time fields

- FORMS-104: flattenDefinition is provided by an external library

- FORMS-63: pageInjected event has been added

### Fixed

- Backwards compatibility with previous versions

- Better IE8 support


## v3.1.4 - 2014-10-31

### Added

- FORMS-71: support for manual calculations

    - this depends on a future version of the platform for compatible definitions

### Fixed

- FORMS-100: sub-form labels are not honoured

- FORMS-99: fields with the hidden option are not hidden as expected

- FORMS-98: sub-form minus buttons don't work

- FORMS-96: number field validate non-numeric characters incorrectly

- FORMS-89: heading types (e.g. `h1`, `h2`, etc) are not honoured

- FORMS-75: sub-forms malfunction when navigating between form pages


## v3.1.3 - 2014-09-03

### Added

- added tests for `BMP.Forms.version`

- some tests using the same dependencies as BIC v3.1.12

### Fixed

- FORMS-76: implementation of Behaviours now expects a data structure that
  conforms to the specification

- make `Page#destroy()` and `Form#destroy()` more reliable and thorough as per
  the new dependencies from [BIC v3.1.12](https://github.com/blinkmobile/bic-v3/releases/tag/v3.1.12)
