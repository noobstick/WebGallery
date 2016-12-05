(function () {
    'use strict';

    angular
        .module('app')
        .factory('navService', navService);

    function navService() {

        var navLinks = ['Home', 'Gallery', 'Admin'];

        var service = {
            getNavLinks: getNavLinks
        }

        return service;

        function getNavLinks() {
            return navLinks;
        }
    }

})();