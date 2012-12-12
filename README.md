# bforms_v3

This is a prototype and testing ground for the next evolution of the
Blink Forms UI implementation.

## Instructions

### Prerequisites

You'll need [Node.JS](nodejs.org) and [NPM](npmjs.org). NPM is normally
bundled with Node.JS.

You'll need the [Grunt command-line tool](gruntjs.com) which you should
install with:

    npm -g install grunt-cli

Note: the official website still refers to installing the "grunt"
package, but this advice is out-of-date.

### Build Process

As you've probably guessed, we use Grunt as our task-based build tool
for JavaScript.

In the root of the project's working directory, run:

    npm update
    grunt

This installs the required plugins for Grunt, and then uses Grunt to
build the project.

