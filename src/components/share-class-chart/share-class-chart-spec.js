describe('shareClassChart', function() {

    var isinCode = 'GB00BGSHGD95';
    var fromDate = '2013-12-29 00:00:00.0';
    var toDate = '9999-12-31 00:00:00.0';
    var chartData = 'test data';
    var name = 'Entity Name';

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

        chartSvc.getCharts = function(isinCode) {
            var deferred = $q.defer();
            if (isinCode === 'notvalid') {
                deferred.reject('Invalid ISIN Code');
            } else {
                deferred.resolve(chartData);
            }
            return deferred.promise;
        };

        html = '<share-class-chart isin-code="vm.isinCode" from-date="vm.fromDate" to-date="vm.toDate" name="vm.name"></share-class-chart>';
        element = angular.element(html);
        element = $compile(element)($rootScope);
    });

    describe('valid ISIN code', function() {
        it('should set up the controller and fetch the data with a valid ISIN code', function() {
            $rootScope.vm = {
                isinCode: isinCode,
                fromDate: fromDate,
                toDate: toDate,
                name: name
            };
            $rootScope.$digest();

            controller = element.controller('shareClassChart');

            expect(controller.chartData).toBe(chartData);
            expect(controller.isinCode).toBe(isinCode);
            expect(controller.fromDate).toBe(fromDate);
            expect(controller.toDate).toBe(toDate);
            expect(controller.name).toBe(name);
            expect(controller.validChartData).toBe(true);
        });

        it('should display the chart and not the error', function() {
            $rootScope.vm = {
                isinCode: isinCode,
                fromDate: fromDate,
                toDate: toDate,
                name: name
            };
            $rootScope.$digest();

            expect(element.find('highchart').hasClass('ng-hide')).toBe(false);
            expect(element.find('div.alert').hasClass('ng-hide')).toBe(true);
        });
    });

    describe('invalid ISIN code', function() {
        it('should set up the controller and fetch the data with a valid ISIN code', function() {
            $rootScope.vm = {
                isinCode: 'notvalid',
                fromDate: fromDate,
                toDate: toDate,
                name: name
            };
            $rootScope.$digest();

            controller = element.controller('shareClassChart');

            expect(controller.chartData).toEqual(jasmine.any(Array));
            expect(controller.isinCode).toBe('notvalid');
            expect(controller.fromDate).toBe(fromDate);
            expect(controller.toDate).toBe(toDate);
            expect(controller.name).toBe(name);
            expect(controller.validChartData).toBe('Invalid ISIN Code');
        });

        it('should display the error and not the chart', function() {
            $rootScope.vm = {
                isinCode: 'notvalid',
                fromDate: fromDate,
                toDate: toDate,
                name: name
            };
            $rootScope.$digest();

            expect(element.find('highchart').hasClass('ng-hide')).toBe(true);
            expect(element.find('div.alert').hasClass('ng-hide')).toBe(false);
        });
    });
});
