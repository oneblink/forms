/**
 * module.exports ... is required for things to work
 * @param {Object} grunt instance of Grunt.
 */
module.exports = function(grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-jslint');

  grunt.initConfig({

    clean: {
      build: {
        src: ['BlinkForms*.js', 'js/build', 'js/*.min.js']
      }
    },

    jslint: {
      files: [
        '**/*.js'
      ],
      exclude: [
        'js/config.js',
        'node_modules/**',
        'js/lib/**',
        '**/*.min.js',
        'js/build/**',
        'BlinkForms*.js'
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
          'require',
          // globals we assume have been loaded
          '$',
          '_',
          'Backbone',
          'rivets',
          'BlinkForms',
          'Q'
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
//          optimize: 'uglify2',
          optimize: 'none',
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
            mocha: 'empty:'
          },
          modules: [
            {
              name: 'main'
            },
            {
              name: 'views/jqm'
            }
          ]
        }
      }
    },

    concat: {
      core: {
        src: [
          'parts/00-start.frag',
          'js/lib/almond-0.2.4.js',
          'js/build/main.js',
          'parts/99-end-core.frag'
        ],
        dest: 'BlinkForms.js'
      },
      jqm: {
        src: [
          'parts/00-start.frag',
          'js/lib/almond-0.2.4.js',
          'js/build/main.js',
          'js/build/views/jqm.js',
          'parts/99-end-jqm.frag'
        ],
        dest: 'BlinkForms-jQueryMobile.js'
      }
    }

  });

  grunt.registerTask('default', 'jslint');
  grunt.registerTask('build', ['clean', 'requirejs', 'concat']);

};

