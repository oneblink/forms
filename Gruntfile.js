/*eslint-env node*/
/*eslint-disable camelcase*/ // for uglify options
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
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.initConfig({

    clean: {
      build: {
        src: ['build', 'js/locales/**/i18n.js']
      }
    },

    eslint: {
      target: [ './' ]
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
          dir: 'build',
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
            bluebird: 'empty:',
            jquery: 'empty:',
            jquerymobile: 'empty:',
            underscore: 'empty:',
            // libraries to be built-in
            moment: '../node_modules/moment/min/moment.min',
            picker: '../node_modules/pickadate/lib/picker',
            'picker.date': '../node_modules/pickadate/lib/picker.date',
            'picker.time': '../node_modules/pickadate/lib/picker.time',
            'queue-async': '../node_modules/queue-async/queue',
            geolocation: '../node_modules/geolocation/geolocation',
            rivets: '../node_modules/rivets/dist/rivets',
            formslib: '../node_modules/blinkmobile-forms/dist/formslib',
            uuid: '../node_modules/node-uuid/uuid',
            // Require.JS plugins
            text: '../node_modules/text/text'
          },
          modules: [
            {
              name: 'views/forms3jqm',
              include: ['main', 'moment', 'picker.date', 'picker.time']
            }
          ],
          wrap: {
            startFile: [
              'js/models/expression.js',
              'parts/00-start.frag',
              'node_modules/almond/almond.js',
              'parts/01-jquery.frag'
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
          sourceMap: 'build/views/forms3jqm.js.map',
          sourceMappingURL: 'forms3jqm.js.map', // fix reference in .min.js
          sourceMapPrefix: 3, // fix reference in .js.map
          beautify: {
            width: 80,
            max_line_len: 80
          }
        },
        files: {
          'build/views/forms3jqm.min.js': [
            'build/views/forms3jqm.js'
          ]
        }
      }
    },

    mocha: {
      all: {
        src: ['test/*/index.html'],
        options: {
          run: false,
          timeout: 10000
        }
      }
    },

    connect: {
      server: {
        options: {
          hostname: '*',
          port: 8000,
          base: '.',
          keepalive: true
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
          '!build/**/*',
          'parts/*'
        ],
        tasks: [
          'clean',
          'requirejs',
          'uglify',
          'connect'
        ],
        options: {
          atBegin: true
        }
      },
      tests: {
        files: [
          'test/**/*'
        ],
        tasks: ['eslint', 'mocha']
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
    'eslint',
    'build',
    'mocha'
  ]);

};
