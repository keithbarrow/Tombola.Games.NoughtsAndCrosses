(function () {
    'use strict';
    module.exports={
        images: {
            cwd:'',
            src: ['main-app/app/images/**/*.*'],
            dest: '.build/',
            expand: true
        },

        sounds: {
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
    };
})();