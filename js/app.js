var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  
  $stateProvider 
    .state('home', {
      url: '/home',
      templateUrl: 'js/views/home.html'
    })
    
    .state('about', {
      url: '/about',
      templateUrl: 'js/views/about.html'
    })
    
    .state('contact', {
      url: '/contact',
      templateUrl: 'js/views/contact.html'
    })
    
    .state('events', {
      url: '/events',
      templateUrl: 'js/views/events.html'
    })
    
    .state('shelters', {
      url: '/shelters',
      templateUrl: 'js/views/shelters.html'
    })
    
    .state('shop', {
      url: '/shop',
      templateUrl: 'js/views/shop.html'
    })
    
    .state('vision', {
      url: '/vision',
      templateUrl: 'js/views/vision.html'
    })
});
