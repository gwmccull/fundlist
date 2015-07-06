(function() {
    angular
        .module('app.core.charts', [])
        .factory('chartsService', chartsService);

    chartsService.$inject = ['$http', '$log', '$q'];

    function chartsService($http, $log, $q) {
        var charts = [];
        var chartsService = {
            getCharts: getCharts
        };

        return chartsService;

        function getCharts(isinCode, fromDate, toDate) {
            var deferred = $q.defer();

            if (charts.length === 0) {
                if (isinCode === 'GB00BGnotvalid') {
                    deferred.reject('Invalid ISIN Code');
                } else {
                    return $http.get('../data/chart.json')
                        .then(getChartsComplete)
                        .catch(getChartsError);
                }

            } else {
                deferred.resolve(charts);
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
