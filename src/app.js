(function() {
    angular
        .module('app', [
            'ui.bootstrap',
            //'ui.utils',
            'ui.router',
            'highcharts-ng',
            'ngAnimate',
            'app.fundList',
            'app.fund',
            'app.shareClass',
            'app.shareClassChart',
            'app.core.fund',
            'app.core.charts',
            'app.filter'
        ])
        .config(fundlistConfig)
        .run(fundlistRun)
        .directive('app', appDirective);


    function fundlistConfig($stateProvider, $urlRouterProvider) {
        /* Add New States Above */
        $urlRouterProvider.otherwise('/home');
    }

    function fundlistRun($rootScope, fundService) {
        $rootScope.safeApply = function (fn) {
            var phase = $rootScope.$$phase;
            if (phase === '$apply' || phase === '$digest') {
                if (fn && (typeof(fn) === 'function')) {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };

        fundService.getFunds()
            .then(function (data) {
                $rootScope.funds = data;
            });
    }

    function appDirective() {
        return {
            restrict: 'E',
            replace: false,
            template:
                '<fund-list funds="funds" class="row">test...</fund-list>'
        };
    }
})();
