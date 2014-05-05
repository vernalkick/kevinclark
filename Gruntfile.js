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
      coffee: {
        compile: {
          files: {
            'js/scripts.js': '_js/scripts.coffee', // 1:1 compile
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
        },
        scripts: {
          files: ['_js/*.coffee'],
          tasks: ['coffee'],
          options: {
            interrupt: true,
            spawn: false,
            atBegin: true
          }
        }
      },
      concurrent: {
        target: {
          tasks: ['jekyll:dev', 'watch'],
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
    grunt.loadNpmTasks('grunt-contrib-coffee');

    grunt.registerTask('dev', ['sass:dev', 'concurrent:target']);
    grunt.registerTask('prod', ['sass:dist', 'jekyll:dist', 'clean']);

};
