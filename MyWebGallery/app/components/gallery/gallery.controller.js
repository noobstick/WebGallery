(function () {
    'use strict';

    angular
        .module('app')
        .controller('galleryCtrl', galleryCtrl);

    galleryCtrl.$inject = ['galleryService'];

    function galleryCtrl(galleryService) {
        var vm = this;
        init();

        function init() {

        }
    }
})();