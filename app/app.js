'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
        'ngRoute',
        'myApp.version',
        'myApp.management',
        'myApp.reservation',
        'myApp.chart',
        'myApp.basicInfo'
    ])
    .constant('BaseUrl', 'http://api.zui.ms/')
    //.constant('BaseUrl', 'http://115.159.87.129:')
    //.constant('BaseUrl', 'http://202.120.40.175:')

    .constant('userPort', 'api/operation')
    //.constant('userPort', '8008')

    .constant('merchantPort', 'api/merchant')
    //.constant('merchantPort', '8004')
    //.constant('merchantPort', '21104')

    .constant('managementPort', 'api/operation')
    //.constant('managementPort', '8008')
    //.constant('managementPort', '21108')

    .constant('restaurantPort', 'api/merchant')
    //.constant('restaurantPort', '8004')
    //.constant('restaurantPort', '21100')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/management'});
    }]);

