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
                toDate: '='
            },
            templateUrl: 'components/share-class-chart/share-class-chart.html'
        };

        return directive;
    }

    ShareClassChartController.$inject = ['$log', 'chartsService'];

    function ShareClassChartController($log, chartsService) {
        var vm = this;


        vm.init = function() {
            chartsService.getCharts(vm.isinCode, vm.fromDate, vm.toDate)
                .then(function(data) {
                    $log.log("data", data);
                    vm.chartData = data;
                })
                .catch(function(err) {
                    $log.error("err", err);
                })
        };

        vm.init();

    }
})();
