describe('shareClassChart', function() {

    var isinCode = "GB00BGSHGD95";
    var fromDate = "2013-12-29 00:00:00.0";
    var toDate = "9999-12-31 00:00:00.0";
    var chartData = "test data";

    var $compile, $rootScope, chartSvc, $q, html, element, controller;

    beforeEach(function() {
        chartSvc = {};
        module('templates');
        module('app.shareClassChart');

        module(function($provide){
            $provide.value('chartsService', chartSvc)
        });

        inject(function(_$compile_, _$rootScope_, _$q_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            $q = _$q_
        });

        chartSvc.getCharts = function() {
            var deferred = $q.defer();
            deferred.resolve(chartData);
            return deferred.promise;
        };

        html = '<share-class-chart isin-code="vm.isinCode" from-date="vm.fromDate" to-date="vm.toDate"></share-class-chart>';
        element = angular.element(html);
        element = $compile(element)($rootScope);
        $rootScope.vm = {
            isinCode: isinCode,
            fromDate: fromDate,
            toDate: toDate
        };
        $rootScope.$digest();

        controller = element.controller('shareClassChart')
    });

    it('should set up the controller and fetch the data', function() {
        expect(controller.chartData).toBe(chartData);
        expect(controller.isinCode).toBe(isinCode);
        expect(controller.fromDate).toBe(fromDate);
        expect(controller.toDate).toBe(toDate);
    });

});
