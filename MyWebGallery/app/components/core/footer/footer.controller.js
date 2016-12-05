(function () {
    'use strict';

    angular
        .module('app')
        .controller('footerCtrl', footerCtrl);

    function footerCtrl() {
        var vm = this;
        vm.subTitle = 'Footer sub title';
    }
})();