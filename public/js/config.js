(function(angular) {
    'use strict';

    //Setting up route
    var RouteProvider = [
        '$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            // For unmatched routes:
            $urlRouterProvider.otherwise('/');

            // states for my app
            $stateProvider
                .state('all articles', {
                    url: '/events',
                    templateUrl: 'views/events/list.html'
                })
                .state('create article', {
                    url: '/events/create',
                    templateUrl: 'views/events/create.html'
                })
                .state('edit article', {
                    url: '/events/:eventId/edit',
                    templateUrl: 'views/events/edit.html'
                })
                .state('article by id', {
                    url: '/events/:eventId',
                    templateUrl: 'views/events/view.html'
                })
                .state('all news', {
                    url: '/news',
                    templateUrl: 'views/news/list.html'
                })
                .state('create news item', {
                    url: '/news/create',
                    templateUrl: 'views/news/create.html'
                })
                .state('edit news item', {
                    url: '/news/:newsItemId/edit',
                    templateUrl: 'views/news/edit.html'
                })
                .state('news item by id', {
                    url: '/news/:newsItemId',
                    templateUrl: 'views/news/view.html'
                })
                .state('all resources', {
                    url: '/resources',
                    templateUrl: 'views/resources/list.html'
                })
                .state('create resource', {
                    url: '/resources/create',
                    templateUrl: 'views/resources/create.html'
                })
                .state('edit resource', {
                    url: '/resources/:resourceId/edit',
                    templateUrl: 'views/resources/edit.html'
                })
                .state('resource by id', {
                    url: '/resources/:resourceId',
                    templateUrl: 'views/resources/view.html'
                })
                .state('home', {
                    url: '/',
                    templateUrl: 'views/index.html'
                });
        }
    ];

    //Setting HTML5 Location Mode
    var LocationProvider = [
        '$locationProvider',
        function($locationProvider) {
            $locationProvider.hashPrefix('!');
        }
    ];

    angular.module('startupwichita')
        .config(RouteProvider)
        .config(LocationProvider);
})(window.angular);
