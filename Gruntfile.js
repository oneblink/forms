/*jslint es5:true, node:true*/
/**
 * module.exports ... is required for things to work
 * @param {Object} grunt instance of Grunt.
 */
module.exports = function (grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jslint');
  grunt.loadNpmTasks('grunt-messageformat');
  grunt.loadNpmTasks('grunt-mocha');

  grunt.initConfig({

    clean: {
      build: {
        src: ['BlinkForms*.js*', 'js/*.min.js']
      }
    },

    jslint: {
      files: [
        '**/*.js',
        '**/*.json'
      ],
      exclude: [
        'node_modules/**',
        'js/lib/**',
        'js/build/**',
        'js/locales/**/i18n.js',
        'BlinkForms*.js',
        'test/lib/**/*',
        'vendor/**/*'
      ],
      directives: {
        browser: true,
        es5: true,
        indent: 2,
        nomen: true,
        todo: true, // TODO: eventually drop this
        sloppy: true, // we force strict-mode separately
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
          'BMP',
          'Q'
        ]
      },
      options: {
        errorsOnly: true,
        failOnError: true
      }
    },

    messageformat: {
      en: {
        locale: 'en',
        inputdir: 'js/locales/en',
        output: 'js/locales/en/i18n.js'
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
            mocha: 'empty:',
            // Require.JS plugins
            text: '../vendor/text'
          },
          modules: [
            {
              name: 'main'
            },
            {
              name: 'views/jqm',
              exclude: ['main']
            }
          ]
        }
      }
    },

    concat: {
      core: {
        src: [
          'parts/00-start.frag',
          'js/lib/almond-0.2.5.js',
          'js/build/main.js',
          'parts/99-end-core.frag'
        ],
        dest: 'BlinkForms.js',
        nonull: true
      },
      jqm: {
        src: [
          'parts/00-start.frag',
          'js/lib/almond-0.2.5.js',
          'js/build/main.js',
          'js/build/views/jqm.js',
          'parts/99-end-jqm.frag'
        ],
        dest: 'BlinkForms-jQueryMobile.js',
        nonull: true
      }
    },

    uglify: {
      default: {
        options: {
          sourceMap: 'BlinkForms-jQueryMobile.js.map',
          beautify: {
            width: 80,
            max_line_len: 80
          }
        },
        files: {
          'BlinkForms-jQueryMobile.min.js': [
            'BlinkForms-jQueryMobile.js',
            'js/locales/en/i18n.js'
          ]
        }
      }

    },

    mocha: {
      all: {
        src: ['test/*/index.html'],
        options: {
          run: false
        }
      }
    },

    watch: {
      src: {
        files: [
          'Gruntfile.js',
          'js/**/*',
          '!js/build/**/*',
          '!js/locales/**/i18n.js',
          'parts/*'
        ],
        tasks: 'default'
      },
      tests: {
        files: [
          'test/**/*'
        ],
        tasks: ['jslint', 'mocha']
      },
      options: {
        interrupt: true
      }
    }

  });

  grunt.registerTask('default', ['test']);

  grunt.registerTask('build', [
    'clean',
    'messageformat',
    'requirejs',
    'concat',
    'uglify'
  ]);

  grunt.registerTask('test', [
    'jslint',
    'build',
    'mocha'
  ]);

};