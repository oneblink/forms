# Blink Forms v3

This is a prototype and testing ground for the next evolution of the
Blink Forms UI implementation.

## Version Numbers

This project is NOT versioned according to Semantic Versioning. Rather, it is versioned according to our [Shifted Semantic Versioning](https://github.com/blinkmobile/docs/wiki/Process:-Semantic-Versioning#shifted-semantic-versioning).

## Modular approach

A high-priority goal for this library is that it be possible to extend. We will not be able to anticipate all the ways customers will wish to use Blink Forms, so it is important that such customers are able to integrate with and extend core functionality.

As part of this philosophy, as well as for other benefits, the functionality of Blink Forms v3 is divided into 3 modules.

### Blink Forms core

- Backbone.JS Models
- field validation
- JavaScript API

We aspire to eventually share the same core Blink Forms logic across all versions and modes of our Blink Intelligent Client. Maintenance of shared functionality will be easier and benefit all BICs simultaneously.

### DOM integration

- Backbone.JS Views
- DOM manipulation

We restrict all DOM code to this pluggable module. We have started with an implementation of this module for BIC v3 (jQuery Mobile), but eventually we may complement this with a module for BIC v2. These BIC versions require different DOM structures, so it makes sense to keep this code separate.

As a side-effect of this approach, it should eventually be feasible for innovative customers to substitute in their own partial or complete implementations of this module.

### [BIC integration](BIC.md)

- network access
- client-side persistent-storage

This is not so much a module as it is an API. This likely won't be developed entirely within this project, rather it will be developed as part of the consuming BIC.

It is assumed that the BIC will select the appropriate DOM integration module. Further, the BIC must implement several methods, event handlers, etc in order to properly enable Blink Forms functionality.

BIC v2 and v3 have drastically different behaviours, so allowing this part to be declared elsewhere yet with a common API facilitates maintenance and development.

By documenting this API, innovative customers will be able to more deeply integrate their own code with Blink Forms.


## Instructions

### Prerequisites

You'll need [Node.JS](nodejs.org) and [NPM](npmjs.org). NPM is normally
bundled with Node.JS.

You'll need the [Grunt command-line tool](gruntjs.com) which you should
install with:

    npm -g install grunt-cli

Note: take care to install this "globally" i.e. with `-g`

### Build Process

As you've probably guessed, we use Grunt as our task-based build tool
for JavaScript.

In the root of the project's working directory, run:

    npm update
    grunt

This installs the required plugins for Grunt, and then uses Grunt to
build the project into `js/build`. For the jQueryMobile version of Forms v3,
check the `js/build/views/` directory.
