module.exports = function(grunt) {
	grunt.initConfig({
		browserify: {
      dist: {
        src: ["*.js"],
				cwd: "src",
				expand: true,
				ext: ".js",
				dest: 'build'
      }
    },
		copy: {
			main: {
				files: [
					{
						expand: true,
						src: ["*.js"],
						cwd: "src/external",
						dest: "build/external/"
					},
				],
			},
		}
	});
	
	grunt.loadNpmTasks("grunt-browserify");
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.registerTask("default", ["browserify", "copy"]);
};
