angular.module('alurapic').controller('GruposController', function($scope, $http){

    $scope.mensagem = '';

    $http.get('/v1/grupos').success( 
        function(grupos) {
            $scope.grupos=grupos;
        }).error( function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter grupos';
    });

});

