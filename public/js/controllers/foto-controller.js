// não pode usar o segundo parâmetro (dependências) porque senão cria um novo módulo
angular.module('alurapic').controller('FotoController', function($scope, recursoFoto, $routeParams){

    $scope.mensagem = '';
    
    $scope.foto = {};
    
    $scope.mensagem = '';
    if ($routeParams.fotoId){
        recursoFoto.get( { fotoId : $routeParams.fotoId}, 
            function(foto) {
                $scope.foto=foto;
            }, function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter a foto';
        });
    }

    // verifica se passou pelas validações antes de salvar
    $scope.submeter = function(){
        
        if ($scope.formulario.$valid){

            if ($routeParams.fotoId) {

                recursoFoto.update({ fotoId: $scope.foto._id }, $scope.foto, 
                                   function(){
                    console.log($scope.mensagem);
                    $scope.mensagem = 'Foto '+$scope.foto.titulo+' alterada com sucesso!';
                    $scope.foto = {};
                }, function(erro){
                    console.log(erro);
                    $scope.mensagem = 'Ocorreu um erro ao alterar a foto';
                });

            } else {
                recursoFoto.save( $scope.foto, function(){
                    $scope.mensagem = 'Foto cadastrada com sucesso';
                    console.log($scope.mensagem);
                    
                    $scope.foto = {};
                }, function(erro){
                    console.log(erro);
                    $scope.mensagem = 'Ocorreu um erro ao cadastrar a foto!';
                });
            }

        }
    };
});

