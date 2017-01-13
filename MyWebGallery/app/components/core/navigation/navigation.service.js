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
            getAllImages: getAllImages
        }

        return service;

        function getNavLinks() {
            return navLinks;
        }

        function getAllImages(imageId) {

            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'api/Images/' + imageId
            }).success(function(data, status, headers, config){
                deferred.resolve(data);
            }).error(function(data, status, headers, config){
                deferred.reject(data);
            })

            return deferred.promise;
               
        }
    }

})();