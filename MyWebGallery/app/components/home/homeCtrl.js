﻿(function () {
    'use strict';

    angular
        .module('app')
        .controller('homeCtrl', homeCtrl);

    function homeCtrl() {
        var vm = this;
        vm.title = 'Gallery Test';

        init();

        function init() {
        }
    }
})();