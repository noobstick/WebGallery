(function () {
    'use strict';

    angular.module('app').component('gallery', {
        bindings: { title: '@' },
        templateUrl: 'app/components/gallery/views/gallery.html',
        controller: 'galleryCtrl'
    });
})();