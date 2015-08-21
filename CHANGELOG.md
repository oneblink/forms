# Changelog


## v3.6.0 - 2015-08-21


### Added

- FORMS-211: Forms and Elements have new pristine and dirty states

    - useful for customising style and behaviour based on user activity

    - see [docs/css-selectors.md](docs/css-selectors.md)


### Fixed

- FORMS-221: removing a pre-existing subform from an "edit" form no longer
  breaks form submission

    - HelpDesk: 3791-RFVN-4389

- FORMS-203: performance and input latency improvements

    - perform validation at least 1 second after the last key-stroke

    - skip rendering of validation results if results are the same

    - avoid unnecessary rendering of Form Element Views during initialisation

    - MacBook Pro 2012 initialises large form in 1750ms (down from 4047ms)

    - Nexus 7 2012 initialises large form in 31668ms (down from 80457ms)

    - HelpDesk: 8120-DFKV-2824


## v3.5.0 - 2015-08-14


### Added

- FORMS-192: you may now configure subforms to collapse "accordion-style"

    - for now, prefix the "row class" setting in the Forms Builder with
      "collapse: forms;" to opt-in

    - the summary displayed when collapsed uses values from fields that are
      white-listed for the "list" form action

- FORMS-212: when using our Cordova plugin for maps in a Windows app, the
  location field now displays a static image, like our other apps

    - see: https://github.com/blinkmobile/cordova-plugin-map


### Fixed

- FORMS-208: required fields that are now able to be conditionally hidden
  without causing the form to fail validation

    - HelpDesk: 1585-QYSM-9411

- FORMS-219: signature panel (and other) buttons no longer render incorrectly
  within subforms after turning the page

- FORMS-220: native camera / gallery fields function as expected in the Windows
  app built with Cordova


## v3.4.4 - 2015-08-10


### Changed

- updated to [Backbone.js](http://backbonejs.org/#changelog) 1.2.1 (from 1.1.2)

- updated to [Underscore.js](http://underscorejs.org/#changelog) 1.8.3

    - from [Lo-Dash](https://github.com/lodash/lodash/wiki/Changelog) 2.4.1


### Fixed

- FORMS-214: labels within subforms are now no longer lost when turning the page

- FORMS-210: native gallery button now displays the gallery picker, not camera

    - HelpDesk: 1270-WRNM-3321


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
