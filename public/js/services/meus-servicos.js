angular.module('meusServicos', ['ngResource']).
factory('recursoFoto', function($resource) {
    return $resource('/v1/fotos/:fotoId', null, {
        'update': { 
            method: 'PUT'
        }
    }); 
}).factory('cadastroDeFotos', function(recursoFoto, $q, $rootScope) {
    var evento = 'fotoCadastrada';
    var servico = {};
    servico.cadastrar = function(foto) {
        return $q(function(resolve, reject) {
            if (foto._id) {
                recursoFoto.update({fotoId:foto._id}, foto,function(){
                    $rootScope.$broadcast(evento);
                    resolve({inclusao:false, mensagem:'Foto atualizada com sucesso'});
                }, function(erro){
                    console.log(erro);
                    reject({mensagem:'Não foi possivel atualizar'});
                });
            } else {
                recursoFoto.save(foto,function(){
                    $rootScope.$broadcast(evento);
                    resolve({inclusao:true, mensagem:'Foto inserida com sucesso'});
                }, function(erro){
                    console.log(erro);
                    reject({mensagem:'Não foi possivel incluir'});
                });
            };
        });
    };
    return servico;
});