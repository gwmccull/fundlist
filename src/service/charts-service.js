(function() {
    angular
        .module('app')
        .factory('chartsService', chartsService);

    chartsService.$inject = ['$http', '$log'];

    function chartsService($http) {
        var charts = [];
        var chartsService = {
            getCharts: getCharts
        };

        return chartsService;

        function getCharts() {
            if (charts.length === 0) {
                return $http.get('./data/chart.json')
                    .then(getChartsComplete)
                    .catch(getChartsError);
            } else {
                return charts;
            }
        }

        function getChartsComplete(data, isinCode) {
            charts = data.data.chart;
            return charts;
        }

        function getChartsError(error) {
            $log.error('Error retrieving charts.json: ' + error);
        }
    }
})();
