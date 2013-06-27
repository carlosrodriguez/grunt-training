module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		files: {
			source: './source',
			build: './build',
			css: '<%= files.source %>/css/**/*.css',
			js: [
				'Gruntfile.js',
				'<%= files.source %>/js/simple/**/*.js',
				'<%= files.source %>/js/advanced/**/*.js'
			]
		},

		clean: {
			build: '<%= files.build %>'
		},

		concat: {
			options: {
				stripBanners: true,
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			js: {
				src: ['<%= files.source %>/js/simple/**/*.js','<%= files.source %>/js/advanced/**/*.js'],
				dest: '<%= files.build %>/all.js'
			},
			css: {
				src: '<%= files.css %>',
				dest: '<%= files.build %>/all.css'
			}
		},

		cssmin: {
			release: {
				src: ['<%= files.build %>/all.css'],
				dest: '<%= files.build %>/all.min.css'
			}
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
		},

		uglify: {
			release: {
				options: {
					banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
							'<%= grunt.template.today("yyyy-mm-dd") %> */'
				},
				src: ['<%= files.build %>/all.js'],
				dest: '<%= files.build %>/all.min.js'
			}
		},

		watch: {
			css: {
				files: [
					'<%= files.css %>'
				],
				tasks: 'css'
			},
			js: {
				files: [
					'<%= files.js %>'
				],
				tasks: 'js'
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');


	grunt.registerTask('css', ['concat:css','cssmin']);
	grunt.registerTask('js', ['jshint','concat:js','uglify']);
	grunt.registerTask('dev', ['css','js']);
	
	grunt.registerTask('default', ['dev','watch']);
	
};