describe('meusFiltros tests', function () {
    beforeEach(module('meusFiltros'));
    it('deve tornar uma String maiúscula', inject( function (maiusculoFilter) {
        expect(maiusculoFilter('texto')).toBe('TEXTO');
    })
       );
});