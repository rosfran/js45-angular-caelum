// public/js/main.js

angular.module('alurapic', ['minhasDiretivas', 'meusFiltros', 'ngAnimate', 'ngRoute', 'meusServicos'])
    .config( function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/fotos', {
        templateUrl: 'partials/principal.html',
        controller: 'FotosController'
    }).when('/fotos/new', 
            {
        templateUrl: 'partials/foto.html',
        controller: 'FotoController'
    }).when('/fotos/edit/:fotoId', 
            {
        templateUrl: 'partials/foto.html',
        controller: 'FotoController'
    }).when('/', {redirectTo:'/fotos'}).
    otherwise({ redirectTo:'/fotos'});
});