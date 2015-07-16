# Changelog


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

- FORMS-201: native date picker displays "now" and "now +" values


## v3.3.5 - 2015-06-26


### Fixed

- FORMS-188: subforms no longer preload 1 by default when it has no preload

- FORMS-61: hints configured in Form Builder now display for most field types

    - single checkbox, and file (e.g. camera, gallery, etc) do not have hints

    - hints have `.bm-formelement__bm-hint` CSS class, to be customisable

    - default styling for this CSS class includes in future BIC release

- FORMS-190: subforms' "remove" button now works after turning pages

    - subform elements (i.e. select / multi-select fields) render properly, too


## v3.3.4 - 2015-06-23


### Fixed

- FORMS-185: do jQueryMobile widget enhancements just once for our views

    - this prevents the visible weirdness when turning pages with sub-forms

- FORMS-163: fix the XPath operator used with Behaviours and Expressions

    - combined with BIC-152 and PLATFORM-1558 (BMP v2.26.0), the Cascading
      Selects feature from the Form Builder is now supported

- FORMS-184: "required" validation for image fields now passes when populated


## v3.3.3 - 2015-06-12


### Changed

- FORMS-160: client-side validation of sub-form limits now enforced

    - users cannot add more sub-forms once the maximum (if any) is reached


### Fixed

- FORMS-120: worked around a positioning issue with the date picker on iOS

- FORMS-183: `Form#setRecord()` now strictly waits for all sub-form preloading
  to finish, to avoid duplication of preloaded sub-forms

- FORMS-169: detect when Google maps are unavailable (e.g. upcoming Windows app)
  and use alternatives

    - for now, this means no static map image after confirming location

- FORMS-177: collapsed multi-select fields with pop-ups now behave as expected

- FORMS-179: expanded select and multi-select fields (no pop-up) no longer have
  a mysterious "undefined" option appear

    - further, the "other" text box now never appears if not enabled in settings

- FORMS-161: number fields with no default now start out empty (instead of "0")


## v3.3.2 - 2015-05-22

### Changed

- FORMS-159: behaviours (e.g. conditional logic, calculations) optimised

    - impact on forms initialisation is drastically reduced

    - Nexus 7 2012 with 468 elements and 268 behaviours down from 199 seconds to
      29 seconds

    - behaviours are also executed asynchronously in batches to keep the UI
      responsive to user input

    - new event `BMP.Forms.on('behavioursExecuted', /* ... */)` triggered when
      queued behaviours are complete

    - HelpDesk: 3391-TFCB-0747


### Fixed

- FORMS-156: display read-only dates and times as expected

- FORMS-162: hidden dates and times behave as expected

- FORMS-174: numeric sliders display correct values when turning pages

- FORMS-166: explicitly request Base64 data from Cordova Camera API

    - necessary for upcoming Windows app compatibility

- FORMS-167: support form records XML where sub-form definition has a different
  name to the containing sub-form element on the parent form


## v3.3.1 - 2015-05-11

### Fixed

- FORMS-168: no longer call `Backbone.Model#destroy()` as it has side-effects

    - this blocked new sub-form records after removing one

    - we put all Backbone.Model destructor statements in `#close()` now

- FORMS-133: sub-forms elements "preload" now works with real-world definitions


## v3.3.0 - 2015-05-06

### Added

- FORMS-163: Behaviours now support migrated "cascading selects" features from
  the Forms v2 Builder

    - requires a platform update to improve the Forms v2 Builder

- FORMS-133: sub-form elements now support the "preload" feature

### Fixed

- FORMS-155: choice elements properly display their values after page turn

- FORMS-140: numeric slider elements from the Forms v2 Builder are properly
  migrated and supported


## v3.2.1 - 2015-04-13

### Changed

- FORMS-149: changed location field map default zoom from 8 to 17 (zoomed in)

- updated [Moment.js](http://momentjs.com/) to v2.10.2

- updated [almond](https://github.com/jrburke/almond) to v0.3.1

### Fixed

- FORMS-146: properly populate records when involving location fields

    - initialisation of Google Maps APIs sometimes prevented this

- FORMS-150 and FORMS-151: Cordova integration no longer throws errors during
  image capture

    - we improperly assumed APIs resulted in Data URIs, not plain Base64

- FORMS-142: display non-heading text that comes with some headings

- FORMS-145: re-render image previews when changing pages

- FORMS-134: ensure custom CSS can select fields for flexible styling

    - e.g. `[data-element-type="select"], [data-name="choice"] { /*...*/ }`

    - this no longer clashes with jQueryMobile data attributes

- FORMS-140: to display a slider widget, set minimum and maximum as well as
  enable the slider widget in the forms definition

- FORMS-141: conditional logic properly accounts for empty inputs


## v3.2.0 - 2015-03-30

### Added

- FORMS-125: views reflect live changes to "options" attribute for choice fields

    - e.g. `BMP.Forms.current.getElement('choice').set('options', { /*...*/ });`

- FORMS-134: ensure custom CSS can select fields for flexible styling

    - e.g. `[data-type="select"], [data-name="choice"] { /*...*/ }`

- FORMS-137: required fields have a visible asterisk

### Changed

- FORMS-123: upload new blobs (images, signatures, attachments, etc) in the
  background

    - see: https://github.com/blinkmobile/forms/blob/master/docs/blob-uploader.md

### Fixed

- FORMS-128: pending / draft records populate as expected when the form includes
  choice (select / multi) fields

- FORMS-135: sub form min/max validation behaves as expected

- FORMS-136: sub form required validation behaves as expected

- FORMS-139: choice option values may include whitespace without breaking


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


## v3.1.7 - 2015-01-19

### Added

- FORMS-105: [CSS `class` attribute is parsed](https://github.com/blinkmobile/forms/blob/master/docs/parseClass.md), exposing access to Forms v3 settings that are not currently exposed in the official Builder

    - note: as recently as Platform v2.24.0, the Builder exports the `rowClass` attribute (not `class`), so this is and all other work depending upon it cannot be demonstrated

- FORMS-112: [`getUserMedia`](http://www.html5rocks.com/en/tutorials/getusermedia/intro/)-capable environments get suitably enhanced image capture fields

### Changed

- FORMS-106: choice fields default to `nativeMenu: false`, but this can be overridden using the `class` attribute per FORMS-105 (above)
    - this new default offers the best consistency between single and multiple choice fields
    - multiple choice fields are not natively implemented in all environments, so we picked the safer default

### Fixed

- FORMS-80: detect Cordova and BlinkGap the same way BIC v2 did, triggers native-enhanced image capture fields, etc as expected in Android

- FORMS-113: image size hints as configured in elsewhere in the app are passed through when making Cordova API calls, so native-enhanced capture fields behave as expected

- FORMS-114: in environments supporting W3C File [`Blob`](http://caniuse.com/#feat=blobbuilder)s, image previews are correctly displayed when resuming a pending / draft record

- FORMS-117: choice fields with "other" values enabled now function as expected

    - note: as recently as Platform v2.24.0, the Builder exports the `canSpecifyOther` attribute, which is not currently checked by the client-side code, so this feature cannot currently be demonstrated


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
