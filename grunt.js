/**
 * module.exports ... is required for things to work
 * @param {Object} grunt instance of Grunt.
 */
module.exports = function(grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-jslint');

  grunt.initConfig({

    jslint: {
      files: [
        '**/*.js'
      ],
      exclude: [
        'js/config.js',
        'node_modules/**',
        'js/lib/**',
        '**/*.min.js'
      ],
      directives: {
        browser: true,
        white: true,
        predef: [
          // pre-defined globals
          'module',
          'define',
          'require'
        ]
      },
      options: {
        failOnError: true
      }
    },

    requirejs: {
      compile: {
        options: {
          baseUrl: 'js',
          mainConfigFile: 'js/config.js',
          optimize: 'uglify',
          uglify: {
            max_line_length: 80
          },
          paths: {
            backbone: 'empty:',
            jquery: 'empty:',
            underscore: 'empty:',
            // testing libraries
            chai: 'empty:',
            mocha: 'empty:',
            // boot / entry points
            main: 'main'
          },
          name: 'main',
          include: ['config', 'boot'],
          out: 'main.min.js'
        }
      }
    }

  });

  grunt.registerTask('default', 'jslint requirejs');

};

