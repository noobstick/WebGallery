(function () {
    'use strict';

    angular
        .module('app')
        .factory('galleryService', galleryService);

    galleryService.$inject = ['$http', '$q'];

    function galleryService($http, $q) {

        var service = {

        }

        return service;
    }
})();