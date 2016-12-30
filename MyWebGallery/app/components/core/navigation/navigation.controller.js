(function () {
    'use strict';

    angular
        .module('app')
        .controller('navCtrl', navCtrl);

    navCtrl.$inject = ['navService'];

    function navCtrl(navService) {
        var vm = this;
        vm.navLinks = [];
        vm.images = [];
        init();

        function init() {
            vm.navLinks = navService.getNavLinks();
            vm.images = navService.getAllImages();
        }
    }
})();