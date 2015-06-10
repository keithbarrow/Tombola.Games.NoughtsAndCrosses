(function () {
    'use strict';
    var copyTask = require('./.grunt/copy-task'),
        lessTask = require('./.grunt/less-task'),
        jshintTask = require('./.grunt/jshint-task'),
        concatTask= require('./.grunt/concat-task'),
        cleanTask  = require('./.grunt/clean-task');

    module.exports = function(grunt){
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            lesslint: lessTask,
            jshint: jshintTask,
            clean: cleanTask,
            less: lessTask,
            copy: copyTask,
            concat:concatTask
        });

        grunt.loadNpmTasks('grunt-lesslint');
        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.registerTask('lessFiles', ['lesslint','clean:mainappcss', 'less']);
        grunt.registerTask('javascript', ['jshint','clean:mainappscripts','concat']);
        grunt.registerTask('html', 'clean:mainapphtml', 'copy:html');
        grunt.registerTask('images', 'clean:mainappimages', 'copy:images');
        grunt.registerTask('sounds', 'clean:mainappsounds', 'copy:sounds');
        grunt.registerTask('bower', 'clean:bower', 'copy:bower');
        grunt.registerTask('default', ['clean', 'html', 'images', 'sounds', 'bower', 'lessFiles', 'javascript']);
    };
})();