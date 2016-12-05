(function () {
    'use strict';

    angular.module('app').component('header', {
        bindings: { title: '@' },
        templateUrl: 'app/components/core/header/views/header.html',
        controller: 'headerCtrl'
    });
})();