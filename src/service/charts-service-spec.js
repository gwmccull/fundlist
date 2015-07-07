(function() {
    describe('chartsService', function() {
        var chartsService, httpBackend, $rootScope;

        beforeEach(module('app.core.charts'));

        beforeEach(inject(function (_chartsService_, $httpBackend, _$rootScope_) {
            chartsService = _chartsService_;
            httpBackend = $httpBackend;
            $rootScope = _$rootScope_;
        }));

        it('should return an array of charts', function() {
            httpBackend.whenGET('../data/chart.json').respond({
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

            var isinCode = "1234";
            var fromDate = new Date();
            var toDate = new Date();

            chartsService.getCharts(isinCode, fromDate, toDate).then(function(chartsResults) {
                expect(chartsResults).toEqual(jasmine.any(Array));
            });

            httpBackend.flush();
        });

        it('should return an error when ISIN is bad', function() {
            var fromDate = new Date();
            var toDate = new Date();

            chartsService.getCharts(undefined, fromDate, toDate)
                .catch(function(err) {
                    expect(err).toEqual('Invalid ISIN Code');
                });
            $rootScope.$digest();


        });

    });
})();
