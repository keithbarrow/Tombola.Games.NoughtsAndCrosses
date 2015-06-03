(function () {
    'use strict';
    module.exports =  {
        options: {
            compress: true,
            csslint : {
                'unique-headings': false,
                'overqualified-elements': false,
            }
        },
        src : {
            expand:true,
            cwd:'main-app/app/less',
            dest:'.build/main-app/app/css',
            src:'main.less',
            ext:'.min.css'
        }
    };
})();