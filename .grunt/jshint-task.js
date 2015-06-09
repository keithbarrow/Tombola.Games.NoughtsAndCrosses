(function () {
    'use strict';
    module.exports={
        gruntfiles: {
            src: ['gruntfile.js', './.grunt/*.js'],
            options: {
                node: true,
            }
        },
        mainapp:{
            src: ['./main-app/app/**/*.js'],
            options: {
                browser: true,
            }
        }
    };
})();