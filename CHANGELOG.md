# Changelog


## v3.9.1 - 2015-11-12


### Fixed

- FORMS-247: changing the "label" property on a ChoiceElement model no longer results in more than one visible label

    - HelpDesk: 8384-ODJX-5396

- FORMS-250: the summary for a collapsed SubForm no longer throws errors when summary values are empty

- FORMS-255: changing the "hidden" property of a ButtonElement model no longer triggers its associated manual calculation Behaviour


## v3.9.0 - 2015-10-27


### Fixed

- FORMS-254: user-fixed errors in sub-records within sub-form-elements no longer block submission or throw `Error`s

    - propagate "valid" and "invalid" events (and nothing else) from sub-records to parents (may improve performance due to less work)

    - improve cleaning up of model-event handlers in views

- FORMS-230: clicking to add a collapsed sub-form automatically expands it

- FORMS-233: slight performance improvements, refactoring for future work

    - building on work in FORMS-248 and FORMS-254

    - still bigger improvements to come, watch this space!

    - HelpDesk: 7001-PASX-8787


## v3.8.1 - 2015-10-16


### Changed

- FORMS-249: no longer prevent rowClass controlling the label setting

    - before, rowClass = "label: MyLabel;" would have no affect

    - pre-existing dormant rowClass settings like this may now become active

    - see our documentation for how to use the rowClass setting:
      https://github.com/blinkmobile/html-class-data.js


### Fixed


- FORMS-248: prevent unnecessary re-rendering of subforms

    - before, each new subform triggered pre-existing siblings to re-render

    - performance difference is proportional to the number of subforms

    - e.g. 1st subform is no faster, 4th subform may have ~50% reduction in time taken

- FORMS-236: date/time/datetime fields that the user clears will no longer pass REQUIRED validation

- FORMS-237: fixed a some cases where underlying date/time/datetime values did not match the displayed value

- FORMS-241: prepare our `getUserMedia()` image capture fields for Chrome 47

    - no longer triggers any deprecation warnings in Chrome 45 or 46

    - once Google releases Chrome 47,
      image capture fields in older versions of our Forms library will break

- FORMS-244: REQUIRED signatures that have a value now pass validation


## v3.8.0 - 2015-09-24


### Changed

- FORMS-226: improved UX for collapsed single-choice fields

    - interaction and selection once again uses the built-in "select" widget

    - consistent jQueryMobile styling is still used otherwise

- FORMS-243: Backbone.Model constructors have inheritance-safe "defaults"

    - follows recommendation from upstream: http://backbonejs.org/#Model-defaults

    - per upstream, consumers expect either Object or Function "defaults"


### Fixed

- FORMS-225: manual calculations are no longer automatically triggered during load


## v3.7.2 - 2015-09-11


### Fixed

- FORMS-229: validation of REQUIRED date/time/datetime values

    - new "valid" event triggered when validation passes (joins "invalid" event)

    - `#val(...)` and `#set('value', ...)` now behave the same way

- FORMS-235: validation of REQUIRED location values

    - HelpDesk: 7176-UFVB-5424


## v3.7.1 - 2015-09-01


### Fixed

- FORMS-200: pickadate picker now reflects value of focused date/time element


## v3.7.0 - 2015-08-27


### Added

- FORMS-194: BEM CSS classes on (Sub)Forms and Elements

    - this completes the base set of useful CSS classes

    - useful for customising style and behaviour based on user activity

    - see [docs/css-selectors.md](docs/css-selectors.md)

- FORMS-202: SubFormElement overrides on SubForm(s) within

    - this is a feature is available in Forms v2

    - a SubFormElement may "hide" Elements within a reused definition

    - useful when a design would otherwise require clones of similar SubForms


### Fixed

- FORMS-223: filter out SubForm "delete" placeholders missing IDs

    - this primarily addresses possible unsafe `DELETE FROM ...` SQL queries resulting from submission of an "add" or "edit" Form after deleting a SubForm

    - partial fix: required fixes to other components coming soon

    - HelpDesk: 1593-QEIK-1411


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
