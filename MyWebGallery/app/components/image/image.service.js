(function () {
    'use strict';

    angular
        .module('app')
        .factory('imageService', imageService);

    imageService.$inject = ['$http', '$q'];

    function imageService($http, $q) {
        var service = {
            getAllImages : getAllImages
        }

        return service;

        function getAllImages() {

            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'api/Images/'
            }).success(function (data, status, headers, config) {
                deferred.resolve(data);
            }).error(function (data, status, headers, config) {
                deferred.reject(data);
            })

            return deferred.promise;

        }

    }
})();