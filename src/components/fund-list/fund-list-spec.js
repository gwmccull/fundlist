describe('fundList', function() {

    beforeEach(module('templates'));

    beforeEach(module('fundList'));

    var scope,compile,element;

    beforeEach(inject(function($rootScope,$compile) {
        scope = $rootScope.$new();
        compile = $compile;
        element = compile('<fund-list></fund-list>')(scope);
    }));

    it('should make a list of funds', function() {
        scope.$digest();

        expect(element.find('fund').length).toBe(1);
    });
});
