'use strict';

/**
 * @ngdoc overview
 * @name profilioApp
 * @description
 * # profilioApp
 *
 * Main module of the application.
 */
angular
    .module('profilioApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'pascalprecht.translate'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .otherwise({
                redirectTo: '/'
            });
    }, function ($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: '/languages/',
            suffix: '.json'
        });
        //Our translations will go in here
        $translateProvider.preferredLanguage('tw');
    });
