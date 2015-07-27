module.exports = function(grunt) {

	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		sass: {
			options: {
				outputStyle: 'compressed'
			},

			dist: {
				files: {
					'dist/stylesheet.min.css': 'stylesheets/stylesheet.scss'
				}
			}
		},

		stylus: {
			dist: {
				files: {
					'dist/stylesheet.min.css': 'stylesheets/stylesheet.styl'
				}
			}
		}
	});

	grunt.registerTask('scss-css', 'Compila SCSS', ['sass']);
	grunt.registerTask('stylus-css', 'Compila Stylus', ['stylus']);
};
