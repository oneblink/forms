/**
 * module.exports ... is required for things to work
 * @param {Object} grunt instance of Grunt.
 */
module.exports = function(grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-jslint');

  grunt.initConfig({

    clean: ['js/build', 'js/*.min.js'],

    jslint: {
      files: [
        '**/*.js'
      ],
      exclude: [
        'js/config.js',
        'node_modules/**',
        'js/lib/**',
        '**/*.min.js',
        'js/build/**'
      ],
      directives: {
        browser: true,
        es5: true,
        nomen: true,
        todo: true,
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
          dir: 'js/build',
          mainConfigFile: 'js/config.js',
          optimize: 'uglify2',
//          optimize: 'none', // debug-only
          uglify: {
            max_line_length: 80
          },
          uglify2: {
            output: {
              max_line_len: 80
            },
            warnings: false
          },
          paths: {
            backbone: 'empty:',
            jquery: 'empty:',
            jquerymobile: 'empty:',
            q: 'empty:',
            underscore: 'empty:',
            rivets: 'empty:',
            // testing libraries
            chai: 'empty:',
            mocha: 'empty:',
            // boot / entry points
            main: 'main'
          },
          modules: [
            {
              name: 'main',
              include: ['config'],
              out: 'js/build/main.min.js'
            },
            {
              name: 'views/jqm',
              include: ['main', 'config'],
              out: 'js/build/jqm.min.js'
            }
          ]
        }
      }
    },

    copy: {
      main: {
        files: [
          {
            src: 'js/build/main.js',
            dest: 'js/core.min.js'
          },
          {
            src: 'js/build/views/jqm.js',
            dest: 'js/jqm.min.js'
          }
        ]
      }
    }

  });

  grunt.registerTask('default', 'jslint');
  grunt.registerTask('build', 'clean jslint requirejs copy');

};

