(function () {
    'use strict';
    var copyTask = require('./.grunt/copy-task'),
        lessTask = require('./.grunt/less-task'),
        jshintTask = require('./.grunt/jshint-task'),
        concatTask = require('./.grunt/concat-task');

    module.exports = function(grunt){
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            copy: copyTask,
            lesslint: lessTask,
            less: lessTask,
            jshint: jshintTask,
            concat:concatTask
        });
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-lesslint');
        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.registerTask('lessFiles', ['lesslint','less']);
        grunt.registerTask('jsFiles', ['jshint','concat']);
        grunt.registerTask('default', ['copy', 'lessFiles', 'jsFiles']);
    };
})();