# BlinkMobile Forms

execute a definition, creating Models and Views to capture data from users


## Semantic Versioning

This project follows [Semantic Versioning](http://semver.org/) principles.


## Approach

A high-priority goal for this library is that it be possible to extend.
Customers should be able to:

- use the default implementation as-is
- tweak behaviour of one or more components to better suit their needs
- replace in full the default implementation of a particular component


### Core (Models)

- Backbone.JS Models
- field validation
- i18n / translations of all visible text
- JavaScript API


### DOM (Views)

- Backbone.JS Views
- DOM manipulation

We target jQueryMobile 1.3.x for our Views now, but it should be possible to
reimplement this layer without affecting work done in the Core.


### [BIC integration](BIC.md)

- network access
- client-side persistent-storage

These are not handled with the Forms project. We expect other parts of a
solution (e.g. BIC) to provide these as services that Forms may consume.


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

    npm install; npm update
    npm test

This installs the required plugins for Grunt, and then uses Grunt to
build the project into `js/build`. For the jQueryMobile version of Forms v3,
check the `js/build/views/` directory.
