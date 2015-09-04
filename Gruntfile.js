/* eslint-env node */
/* eslint-disable camelcase */ // for uglify options
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
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.initConfig({

    clean: {
      build: {
        src: ['build', 'forms/locales/**/i18n.js']
      }
    },

    exec: {
      messageformat: {
        cmd: 'node node_modules/messageformat/bin/messageformat.js -l en forms/locales/en forms/locales/en/i18n.js'
      }
    },

    requirejs: {
      compile: {
        options: {
          baseUrl: '.',
          dir: 'build',
          skipDirOptimize: false,
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
            // exclude these from the build (load from CDN)
            backbone: 'empty:',
            bluebird: 'empty:',
            jquery: 'empty:',
            jquerymobile: 'empty:',
            underscore: 'empty:',
            signaturepad: 'empty:',
            // libraries to be built-in
            '@blinkmobile/cast-property-types': 'node_modules/@blinkmobile/cast-property-types/dist/index',
            '@blinkmobile/geolocation': 'node_modules/@blinkmobile/geolocation/geolocation',
            '@blinkmobile/html-class-data': 'node_modules/@blinkmobile/html-class-data/dist/index',
            '@blinkmobile/jqpromise': 'node_modules/@blinkmobile/jqpromise/dist/index',
            '@blinkmobile/varied-definition': 'node_modules/@blinkmobile/varied-definition/dist/index',
            'typed-errors': 'node_modules/js-typed-errors/dist/typed-errors',
            'classnames': 'node_modules/classnames/index',
            moment: 'node_modules/moment/min/moment.min',
            picker: 'node_modules/pickadate/lib/picker',
            'picker.date': 'node_modules/pickadate/lib/picker.date',
            'picker.time': 'node_modules/pickadate/lib/picker.time',
            'poll-until': 'node_modules/poll-until/poll-until',
            'queue-async': 'node_modules/queue-async/queue',
            uuid: 'node_modules/node-uuid/uuid',
            // Require.JS plugins
            text: 'node_modules/text/text'
          },
          modules: [
            {
              name: 'forms/jqm',
              include: [
                'moment',
                'picker.date',
                'picker.time'
              ],
              insertRequire: ['forms/jqm']
            }
          ],
          wrap: {
            startFile: [
              // 'parts/00-start.frag',
              // 'parts/01-jquery.frag'
            ],
            endFile: [
              'parts/99-end.frag',
              'forms/locales/en/i18n.js'
            ]
          }
        }
      }
    },

    uglify: {
      'Forms3+jQM': {
        options: {
          sourceMap: true,
          sourceMapName: 'build/forms3jqm.js.map',
          sourceMapIncludeSources: true,
          beautify: {
            width: 80,
            max_line_len: 80
          }
        },
        files: {
          'build/forms3jqm.min.js': [
            'build/forms/jqm.js'
          ]
        }
      }
    },

    mocha: {
      all: {
        src: ['test/*/index.html'],
        options: {
          run: false,
          timeout: 10000,
          log: true
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
          '!forms/locales/**/*',
          '!forms/locales/**/i18n.js'
        ],
        tasks: 'messageformat'
      },
      src: {
        files: [
          'Gruntfile.js',
          'forms/**/*',
          'forms/locales/**/i18n.js',
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
    'build',
    'mocha'
  ]);
};
