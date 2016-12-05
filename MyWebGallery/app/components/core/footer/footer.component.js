(function () {
    'use strict';

    angular.module('app').component('footer', {
        bindings: {
            title: '@'
        },
        templateUrl: 'app/components/core/footer/views/footer.html',
        controller : 'footerCtrl'
    });

})();