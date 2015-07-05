(function() {
    describe('chartsService', function() {
        var fundService, httpBackend;

        beforeEach(module('fundlist'));

        beforeEach(inject(function (_chartsService_, $httpBackend) {
            chartsService = _chartsService_;
            httpBackend = $httpBackend;
        }));

        it('should return an array of charts', function() {
            httpBackend.whenGET('./data/chart.json').respond({
                    "chart": [
                        {
                            "name": "JPM US Smaller Companies IT - Ordinary Shares",
                            "data": [

                            ],
                            "_colorIndex": 0,
                            "_symbolIndex": 0
                        },
                        {
                            "name": "Benchmark",
                            "data": [
                            ],
                            "_colorIndex": 1,
                            "_symbolIndex": 1
                        }
                    ]
                }
            );

            chartsService.getCharts().then(function(chartsResults) {
                expect(chartsResults).toEqual(jasmine.any(Array));
            });

            httpBackend.flush();
        });

    });
})();
