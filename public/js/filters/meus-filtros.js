angular.module('meusFiltros', [] ).filter('maiusculo', 
    function() {
               return function(input) {
    return input.toUpperCase();
}
});
