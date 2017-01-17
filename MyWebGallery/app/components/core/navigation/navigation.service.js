(function () {
    'use strict';

    angular
        .module('app')
        .factory('navService', navService);

    navService.$inject = ['$http', '$q'];

    function navService($http, $q) {

        var navLinks = ['Home', 'Gallery', 'Admin'];

        var service = {
            getNavLinks: getNavLinks,
        }

        return service;

        function getNavLinks() {
            return navLinks;
        }
    }

})();