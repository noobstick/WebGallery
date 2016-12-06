(function () {
    'use strict';

    angular.module('app', ['ui.router'])
        .config(function ($stateProvider) {
            var adminState = {
                name: 'admin',
                url: '/admin',
                template: '<h3>Admin baby</h3>'
            }

            var consumerState = {
                name: 'consumer',
                url: '/consumer',
                template: '<h3>consumer baby</h3>'
            }
            $stateProvider.state(adminState);
            $stateProvider.state(consumerState);

        });
})();