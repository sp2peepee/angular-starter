(function () {
    'use strict';

    angular.module('app.home', ['ngRoute'] )
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl : 'app/home/home.html'
                })
                .otherwise({redirectTo:'/'});
        }]);
})();
