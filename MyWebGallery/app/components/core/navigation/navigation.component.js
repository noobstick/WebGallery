(function () {
    'use strict';

    angular.module('app').component('navTest', {
        bindings: { title: '@' },
        templateUrl: 'app/components/core/navigation/views/navigation.html',
        controller: 'navCtrl'
    });
})();