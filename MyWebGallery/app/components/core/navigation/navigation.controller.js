(function () {
    'use strict';

    angular
        .module('app')
        .controller('navCtrl', navCtrl);

    navCtrl.$inject = ['navService'];

    function navCtrl(navService) {
        var vm = this;
        vm.navLinks = [];
        init();

        function init() {
            vm.navLinks = navService.getNavLinks();
        }
    }
})();