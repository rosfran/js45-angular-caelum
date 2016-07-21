// public/js/controllers/fotos-controller.js

angular.module('alurapic')
    .controller('FotosController', function($scope, $resource, recursoFoto) {
    
    //var recursoFoto = $resource('/v1/fotos/:fotoId');
    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';
    
    $scope.foto = {
        titulo: 'Leão',
        url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
    };

    $scope.fotos = [
        {
            titulo: 'Leão',
            url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
        },
        {titulo: 'Rosfran', url: 'http://cdn6.f-cdn.com/ppic/2509598/logo/6358578/AUTHOR_PHOTO20088522733130.jpg'}
    ];

    recursoFoto.query( function(fotos) {
        console.log(fotos);
        $scope.fotos =  $scope.fotos.concat(fotos);
    }, function(erro) {
        console.log(erro);
    });



    $scope.remover = function(foto) {
        recursoFoto.delete({ fotoId: foto._id}, function() {
            $scope.mensagem = 'Foto '+foto.titulo+' removida com sucesso!';
            var indice = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indice, 1);
        }, function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível remover a foto '+foto.titulo;
        });
    };

});
