module.exports = function(grunt) {

    grunt.initConfig({
      sass: {
        dist: {
          options: {
            style: 'compressed',
            sourcemap: false
          },
          files: {
            'styles/master.css': '_scss/master.scss'
          }
        },
        dev: {
          options: {
            style: 'expanded',
            sourcemap: true
          },
          files: {
            'styles/master.css': '_scss/master.scss'
          }
        }
      },
      jekyll: {
        dist: {
          options: {

          }
        },
        dev: {
          options: {
            serve: true,
            watch: true,
            drafts: true,
            future: true
          }
        },
        server: {
          serve: true
        }
      },
      watch: {
        styles: {
          files: ['_scss/**/*.scss'],
          tasks: ['sass:dev'],
          options: {
            interrupt: true,
            spawn: false,
            atBegin: true
          }
        }
      },
      concurrent: {
        target: {
          tasks: ['jekyll', 'watch'],
          options: {
            logConcurrentOutput: true
          }
        }
      },
      clean: ["**/*.css.map"]
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-clean');

    //grunt.registerTask('default', ['jekyll:dist', 'sass']);
    grunt.registerTask('dev', ['sass:dev', 'concurrent:target']);
    grunt.registerTask('prod', ['sass:dist', 'jekyll:dist', 'clean']);

};
