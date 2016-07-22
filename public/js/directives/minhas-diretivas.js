// public/js/directives/minhas-diretivas.js

angular.module('minhasDiretivas', [])

// quando for utilizar: meu-painel no html:
// <meu-painel titulo="{{teste.titulo}}"></meu-painel>
    .directive('meuPainel', function(){

    var ddo = {};
    // A diretiva pode ser utilizada como Attribute | Element | Comment
    ddo.restrict = 'AE';

    ddo.scope = {
        titulo: '@'
    };

    ddo.transclude = true;

    ddo.templateUrl = 'js/directives/meu-painel.html';
    return ddo;
}).directive('minhaFoto', function() {
    return {
        restrict: 'E',
        template: '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">',
        scope: {
            titulo: '@',
            url: '@'
        },
    };
})
    .directive('botaoPerigo', function() {
    var ddo = {};
    ddo.restrict = 'E';
    ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';
    ddo.scope = {
        nome: '@',
        acao: '&',
    };
    return ddo;
}).directive('meuErro', function() {
    return {
        transclude: true,
        restrict: 'AE',
        templateUrl: 'js/directives/meu-erro.html',
        scope: {
            mensagem: '@',
            exibir: '@',
        },
    };
}) .directive('botaoPrimario', function() {
    var ddo = {};
    ddo.restrict = 'E';
    ddo.template = '<a class="btn btn-primary btn-block" href="{{acao}}">{{nome}}</button>';
    ddo.scope = {
        nome: '@',
        acao: '@',
    };
    return ddo;
}).directive('meuFocus', function() {
    
    var ddo={};
    ddo.restrict='A';
    
    ddo.scope = {
        focado: '='
    };
    
    ddo.link = function(scope, element) {
        scope.$watch('focado', function() {
            
            if (scope.focado) {
                element[0].focus();
                scope.focado=false;
            }
        });
    };
    
});