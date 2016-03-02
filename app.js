var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  
  $stateProvider 
    .state('home', {
      url: '/home',
      templateUrl: 'home.html'
    })
    
    .state('about', {
      url: '/about',
      templateUrl: 'about.html'
    })
    
    .state('contact', {
      url: '/contact',
      templateUrl: 'contact.html'
    })
    
    .state('events', {
      url: '/events',
      templateUrl: 'events.html'
    })
    
    .state('shelters', {
      url: '/shelters',
      templateUrl: 'shelters.html'
    })
    
    .state('shop', {
      url: '/shop',
      templateUrl: 'shop.html'
    })
    
    .state('vision', {
      url: '/vision',
      templateUrl: 'vision.html'
    })
});
