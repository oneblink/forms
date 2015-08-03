# Changelog


## v3.4.3 - 2015-08-03


### Fixed

- FORMS-205: pickadate pickers now work when elements are in sections

    - affects solutions that use sections for column layouts, etc


## v3.4.2 - 2015-07-29


### Fixed

- FORMS-204: validation errors on subform elements are now displayed

    - this requires BIC-174 to access the desired server validation structure


## v3.4.1 - 2015-07-28


### Fixed

- FORMS-203: improve Forms input latency with `_.throttle()`

    - also drop Rivets dependency and explicitly bind events

- FORMS-206: required choice fields that are not empty no longer cause
  validation errors


## v3.4.0 - 2015-07-16


### Added

- FORMS-181: APIs and events for managing custom client and server errors

    - see [docs/errors.md](docs/errors.md) for more details

- FORMS-187: HTML attributes for Forms and Sub-Forms

    - see [docs/css-selectors.md](docs/css-selectors.md) for more details


### Changed

- FORMS-199: Forms modules are no longer private, can be `require()`ed globally

    - improves determinism during boot, improves maintainability

    - offers new avenues for extensibility

- FORMS-193: confirmation prompt when users remove sub-form records


### Fixed

- FORMS-189: native date picker displays "now" and "now +" values
