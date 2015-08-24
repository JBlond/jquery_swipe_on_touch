module.exports = function (grunt) {
	// Do grunt-related things in here
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
			},
			build: {
				src: 'swipe_on_touch.js',
				dest: 'swipe_on_touch.min.js'
			}
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: true
				},
				devel: true
			},
			uses_defaults: 'swipe_on_touch.js',
			with_overrides: {
				options: {
					curly: false,
					undef: true
				},
				files: {
					src: ['swipe_on_touch.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	
	// Default task(s).
	grunt.registerTask('default', 'jshint');
};