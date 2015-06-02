(function () {
    'use strict';
    module.exports = function(grunt){
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            copy: {

                mainappimages: {
                    cwd:'',
                    src: ['main-app/app/images/**/*.*'],
                    dest: '.build/',
                    expand: true
                },

                mainappsounds: {
                    cwd:'',
                    src: ['main-app/app/sounds/*.*'],
                    dest: '.build/',
                    expand: true
                },

                html: {
                    cwd:'',
                    src: ['main-app/app/index.html'],
                    dest: '.build/',
                    expand: true
                },

                bower: {
                    cwd:'bower_components',
                    src: ['angular/*.*'],
                    dest: '.build/main-app//app/thirdparty/',
                    expand:true
                }
            }
        });
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.registerTask('default', ['copy']);
    };
})();