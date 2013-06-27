module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		files: {
			source: './source',
			css: '<%= files.source %>/css',
			js: [
				"Gruntfile.js",
				"<%= files.source %>/simple/**/*.js",
				"<%= files.source %>/advanced/**/*.js"
			]
		},

		jshint: {
			options: {
				"curly": true,
				"eqnull": true,
				"eqeqeq": true,
				"undef": false,
				"globals": {
					"jQuery": true
				}
			},
			files: {
				src: [
					'<%= files.js %>'
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	
	grunt.registerTask('default', ['jshint']);
	
};