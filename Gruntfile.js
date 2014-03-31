/*jslint indent:2, node:true*/
/**
 * module.exports ... is required for things to work
 * @param {Object} grunt instance of Grunt.
 */
module.exports = function (grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-jslint');
  grunt.loadNpmTasks('grunt-mocha');

  grunt.initConfig({

    clean: {
      build: {
        src: ['BlinkForms*.js*', 'js/*.min.js']
      }
    },

    jslint: {
      all: {
        src: [
          '**/*.js',
          '**/*.json',
          '!node_modules/**',
          '!js/lib/**',
          '!js/build/**',
          '!js/locales/**/i18n.js',
          '!BlinkForms*.js',
          '!test/lib/**/*',
          '!vendor/**/*'
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
            'Q',
            'moment',
            'picker.date',
            'picker.time'
          ]
        },
        options: {
          errorsOnly: true,
          failOnError: true
        }
      }

    },

    exec: {
      messageformat: {
        cmd: 'node_modules/messageformat/bin/messageformat.js -l en js/locales/en js/locales/en/i18n.js'
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
            moment: 'empty:',
            'picker.date': 'empty:',
            'picker.time': 'empty:',
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
              name: 'views/forms3jqm',
              include: ['main']
            }
          ],
          wrap: {
            startFile: [
              'parts/00-start.frag',
              'js/lib/almond-0.2.5.js'
            ],
            endFile: [
              'parts/99-end.frag',
              'js/locales/en/i18n.js'
            ]
          }
        }
      }
    },

    uglify: {
      'Forms3+jQM': {
        options: {
          sourceMap: 'js/build/views/forms3jqm.js.map',
          sourceMappingURL: 'forms3jqm.js.map', // fix reference in .min.js
          sourceMapPrefix: 3, // fix reference in .js.map
          beautify: {
            width: 80,
            max_line_len: 80
          }
        },
        files: {
          'js/build/views/forms3jqm.min.js': [
            'js/build/views/forms3jqm.js'
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
      i18n: {
        files: [
          '!js/locales/**/*',
          '!js/locales/**/i18n.js'
        ],
        tasks: 'messageformat'
      },
      src: {
        files: [
          'Gruntfile.js',
          'js/**/*',
          'js/locales/**/i18n.js',
          '!js/build/**/*',
          'parts/*'
        ],
        tasks: [
          'clean',
          'requirejs',
          'uglify'
        ]
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
    'exec:messageformat',
    'requirejs',
    'uglify'
  ]);

  grunt.registerTask('test', [
    'jslint',
    'build',
    'mocha'
  ]);

};
