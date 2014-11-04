# Changelog

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
