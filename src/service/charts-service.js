(function() {
    angular
        .module('app.core.charts', [])
        .factory('chartsService', chartsService);

    chartsService.$inject = ['$http', '$log', '$q'];

    function chartsService($http, $log, $q) {
        var charts = [];
        var savedIsinCode;
        var chartsService = {
            getCharts: getCharts
        };

        return chartsService;

        function getCharts(isinCode, fromDate, toDate) {
            var deferred = $q.defer();

            if (!isinCode || isinCode.toLowerCase().indexOf('notvalid') !== -1) {
                deferred.reject('Invalid ISIN Code');
            } else {
                // check for a new ISIN Code
                if (isinCode !== savedIsinCode) {
                    charts = [];
                }

                if (charts.length === 0) {
                    return $http.get('../data/chart.json')
                        .then(getChartsComplete)
                        .catch(getChartsError);

                } else {
                    deferred.resolve(charts);
                }
            }

            return deferred.promise;
        }

        function getChartsComplete(data) {
            charts = data.data.chart;
            return charts;
        }

        function getChartsError(error) {
            $log.error('Error retrieving charts.json: ' + error);
        }
    }
})();
