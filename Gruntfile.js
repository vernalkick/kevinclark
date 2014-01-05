module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Configure task
		sass: {
			dist: {
				options: {
					sourcemap: true,
					style: 'expanded',
					precision: 5,
					quiet: true
				},
				files: {
					'assets/styles/css/style.css': 'assets/styles/scss/style.scss'
			    }
			}
		},
		jekyll: {
			dist: {
				options: {
					serve: true,
					watch: true
				}
			}
		},
		watch: {
			css: {
				files: 'assets/styles/scss/**',
				tasks: ['sass'],
				options: {
					livereload: true
				}
			},
			icons: {
				files: 'assets/icons/**',
				tasks: ['webfont']
			}
		},
		concurrent: {
	        target: {
	            tasks: ['watch', 'jekyll'],
	            options: {
	                logConcurrentOutput: true
	            }
	        }
	    },
	    webfont: {
	    	icons: {
	    	    src: 'assets/icons/*.svg',
	    	    dest: 'assets/webfonts',
	    	    destCss: 'assets/styles/scss/_modules',
	    	    options: {
	    	    	font: 'kevinclark-icon-font',
	    	    	syntax: 'bootstrap',
	    	    	ligatures: true,
	    	    	stylesheet: 'scss',
	    	    	hashes: false,
	    	    	htmlDemo: false,
	    	    	relativeFontPath: '/assets/webfonts'
	    	    }
	    	  }
	    }
	});

	// Load task
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-webfont');

	// Setup workflow
	grunt.registerTask('default', ['sass', 'concurrent:target']);
};