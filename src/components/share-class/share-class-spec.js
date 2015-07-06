describe('shareClass', function() {

    var share = {
        "Bloomberg Code": "JPMAECA LN",
        "FundClassId": "10",
        "Mexican CNBV Code": "C5AABN",
        "ISIN Code": "GB00BGSHGD95",
        "Sedol Code": "BGSHGD9",
        "LipperId": "LP68242412",
        "ClientIdentifier": "11644",
        "Yield Current": 0.1,
        "Entity Name": "JPM America Equity Fund C - Net Accumulation",
        "Fund Size Currency Code": "GBP",
        "Launch Date": "2014-01-31 00:00:00.0",
        "Investment Minimum Irregular": 100000,
        "Investment Minimum Regular": 5000000,
        "Short Name": "JPM C - Net Acc",
        "Net Assets Total Date": "2015-06-26 00:00:00.0",
        "URL": "http://jp.techrules.com/JP/JP.mvc/Overview?fundid=7235&ShareClassId=11644&country=GB&lang=EN&PARAMMIFID=Yes",
        "Fund Parent Name": "JPM America Equity Fund",
        "Number Share Classes": 1,
        "Fund Currency Code": "GBP",
        "Report Date From": "2013-12-29 00:00:00.0",
        "Report Date To": "9999-12-31 00:00:00.0",
        "Fund Share Class Name": "JPM America Equity Fund - JPM C - Net Acc - JPM America Equity Fund C - Net Accumulation - GB00BGSHGD95",
        "Compound Return 1 Year Annual": 19.7279,
        "Compound Return Launch To Date Annual": 17.0015,
        "Price NAV": 119.9,
        "Primary Language Id": "English",
        "Fund Type Id": [
            "Open-Ended Investment Company (OEIC) Fund",
            "Open-Ended Investment Company (OEIC) Fund",
            "Open-Ended Investment Company (OEIC) Fund"
        ],
        "Domicile Id": "United Kingdom",
        "Price Currency Id": "Pound Sterling",
        "Primary Country Id": "Not applicable",
        "Last Update": "2014-03-17 09:17:19.0",
        "Asset Class Taxonomy Id": "Equity",
        "Registered Country Id": [
            "United Kingdom",
            "Jersey"
        ],
        "Registered Country Code": [
            "GBR",
            "JEY"
        ],
        "Fee Fixed": 0,
        "NAV Base": 1630388.27,
        "Cumulative Return 1 Month": 1.3992,
        "Cumulative Return 1 Year": 19.7279,
        "Cumulative Return Launch to Date": 23.2,
        "Cumulative Return 3 Month": 0.9009,
        "Cumulative Return 6 Month": 6.6667,
        "Fund Type Taxonomy Id": "OEICs",
        "Region Taxonomy Id": "America",
        "Shareclass Status Taxonomy Id": "Active",
        "Shareclass Closure Status Taxonomy Id": "Open",
        "Shareclass Category Taxonomy Id": "C",
        "Shareclass Distribution Taxonomy Id": "ACC",
        "Data Universe Taxonomy Id": "EMEA",
        "Segment Name": [
            "ALL_DATA",
            "FUND_EMEA",
            "RETR_EMEA"
        ],
        "Morningstar - SRRI Risk Rating": "6",
        "Morningstar - SRRI Track Risk Rating": "5",
        "NAV Movement": -0.8,
        "NAV Movement Percentage": -0.66,
        "Cumulative Return DateTime": "2015-05-31 00:00:00.0",
        "Total Return DateTime": "2015-05-31 00:00:00.0"
    };

    var scope, element, controller;

    beforeEach(module('templates'));

    beforeEach(module('app.filter'));

    beforeEach(module('app.shareClass'));

    beforeEach(inject(function($rootScope, $compile) {
        element = angular.element('<share-class share="vm.share"></share-class>');
        scope = $rootScope;
        scope.vm = {};
        scope.vm.share = share;

        $compile(element)(scope);
        scope.$digest();

        controller = element.controller('shareClass');
    }));

    it('should contain a share', function() {
        expect(controller.share).toEqual(share);
    });

    describe('datedShareClass tests', function() {
        it('should return true for share classes more than 4yrs old', function() {
            scope.vm.share["Launch Date"] = '2010-01-31 00:00:00.0';
            expect(controller.datedShareClass()).toBe(true);
        });

        it('should return false for share classes less than 4yrs old', function() {
            scope.vm.share["Launch Date"] = '2014-01-31 00:00:00.0';
            expect(controller.datedShareClass()).toBe(false);
        });
    });
});
