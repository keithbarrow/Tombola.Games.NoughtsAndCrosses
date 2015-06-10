(function () {
    'use strict';
    module.exports = {
        less: {
            files: 'main-app/app/less/**/*.less',
            tasks: ['lessFiles']
        },
        html: {
            files: ['./main-app/app/**/*.html'],
            tasks: ['html']
        },
        images: {
            files: './main-app/app/images/**',
            tasks: ['clean:mainappimages', 'copy:images']
        },
        sounds: {
            files: './main-app/app/sounds/**',
            tasks: ['clean:mainappsounds', 'copy:sounds']
        },
        javascript: {
            files: './main-app/app/scripts/**/*.js',
            tasks: ['javascript']
        },
        gruntjs: {
            files: ['./gruntfile.js', './.grunt/*.js'],
            tasks: ['jshint:gruntfiles', 'nostart']
        },
        bower: {
            files: ['./bower_components**'],
            tasks: ['clean:bower', 'copy:bower']
        }
    };
})();