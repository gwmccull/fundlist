describe('fundService', function() {
    var redditService, httpBackend;

    beforeEach(module('fundlist'));

    beforeEach(inject(function (_fundService_, $httpBackend) {
        fundService = _fundService_;
        httpBackend = $httpBackend;
    }));

    it('should return an array of funds', function() {

        var fundResults = fundService.getFunds();

        expect(fundResults).toEqual(jasmine.any(Array));

    });

});
