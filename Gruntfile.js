module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		files: {
			source: './source',
			css: '<%= files.source %>/css',
			js: [
				"<%= files.source %>/simple/**/*.js",
				"<%= files.source %>/advanced/**/*.js"
			]
		}
	});
	
	grunt.registerTask('default', []);
	
};