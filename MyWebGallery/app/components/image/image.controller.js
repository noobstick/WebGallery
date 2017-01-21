(function () {
    'use strict';

    angular
        .module('app')
        .controller('imageCtrl', imageCtrl);

    imageCtrl.$inject = ['imageService'];

    function imageCtrl(imageService) {

        var vm = this;

        vm.images = [];
        init();

        function init() {

            getImages();
        }

        function getImages() {
            imageService.getAllImages().then(function (images) {
                vm.images = images;
                console.log('Successfully retrieved images.')
            },
            function (data) {
                console.log('Failed to retrieve images.')
            });
        }

    }
})();