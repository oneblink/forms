/**
 * module.exports ... is required for things to work
 * @param {Object} grunt instance of Grunt.
 */
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-requirejs');

  grunt.initConfig({

    requirejs: {
      std: {
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

  });

  grunt.registerTask('build', 'requirejs');

};

