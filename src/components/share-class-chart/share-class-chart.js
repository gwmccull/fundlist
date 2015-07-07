(function () {
    angular
        .module('app.shareClassChart', ['app.core.charts'])
        .directive('shareClassChart', shareClassChart);

    function shareClassChart() {
        var directive = {
            controllerAs: 'vm',
            restrict: 'E',
            controller: ShareClassChartController,
            replace: false,
            bindToController: true,
            scope: {
                isinCode: '=',
                fromDate: '=',
                toDate: '=',
                name: '='
            },
            templateUrl: 'components/share-class-chart/share-class-chart.html'
        };

        return directive;
    }

    ShareClassChartController.$inject = ['$scope', '$log', 'chartsService'];

    function ShareClassChartController($scope, $log, chartsService) {
        var vm = this;
        vm.chartConfig = {
            title: {
                text: 'Performance',
                x: -20 //center
            },
            subtitle: {
                text: vm.name,
                x: -20
            },
            xAxis: {
                categories: []
            },
            yAxis: {
                title: {
                    text: 'Price'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            //tooltip: {
            //    valueSuffix: '°C'
            //},
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: []
        };

        vm.init = function() {
            chartsService.getCharts(vm.isinCode, vm.fromDate, vm.toDate)
                .then(function(data) {
                    $log.log("data", data);
                    vm.chartData = data;

                    processCategories();
                    processSeries();
                })
                .catch(function(err) {
                    $log.error("err", err);
                })
        };


        vm.init();

        $scope.$watch('vm.isinCode', function(newVal, oldVal) {
            console.log("isinCode", newVal);
            vm.init();
        });

        function processCategories() {
            vm.chartConfig.xAxis.categories = [];

            angular.forEach(vm.chartData[0].data, function(category) {
                vm.chartConfig.xAxis.categories.push(moment(category.x).format('MMM, YYYY'));
            })
        }
        function processSeries() {
            vm.chartConfig.series = [];

            angular.forEach(vm.chartData, function(series) {
                var newSeries = {
                    name: series.name,
                    data: []
                };

                angular.forEach(series.data, function(point) {
                    newSeries.data.push(point.y);
                });

                vm.chartConfig.series.push(newSeries);
            })
        }
    }
})();
