(function() {
    angular
        .module('app', [
            'ui.bootstrap',
            //'ui.utils',
            'ui.router',
            'ngAnimate',
            'app.fundList',
            'app.fund',
            'app.core.fund',
            'app.core.charts'
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
                //console.log("data", data);
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
