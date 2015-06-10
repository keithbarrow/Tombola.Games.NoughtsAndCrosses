(function () {
    'use strict';
    var copyTask = require('./.grunt/copy-task'),
        lessTask = require('./.grunt/less-task'),
        jshintTask = require('./.grunt/jshint-task'),
        concatTask= require('./.grunt/concat-task'),
        cleanTask  = require('./.grunt/clean-task'),
        watchTask = require('./.grunt/watch-task');

    module.exports = function(grunt){
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            lesslint: lessTask,
            jshint: jshintTask,
            clean: cleanTask,
            less: lessTask,
            copy: copyTask,
            concat: concatTask,
            watch: watchTask
        });

        grunt.loadNpmTasks('grunt-lesslint');
        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.registerTask('lessFiles', ['lesslint','clean:mainappcss', 'less']);
        grunt.registerTask('javascript', ['jshint','clean:mainappscripts','concat']);
        grunt.registerTask('html', 'clean:mainapphtml', 'copy:html');
        grunt.registerTask('default', ['clean', 'copy', 'lessFiles', 'javascript', 'watch']);
    };
})();