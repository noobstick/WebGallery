(function () {
    'use strict';

    angular
        .module('app')
        .component('imageComp', {
            bindings: { title: '@' },
            templateUrl: 'app/components/image/views/image.html',
            controller: 'imageCtrl'
        });
})();