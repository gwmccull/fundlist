(function() {
    angular
        .module('app', [
            'ui.bootstrap',
            //'ui.utils',
            'ui.router',
            'ngAnimate',
            'fundList'
        ])
        .config(fundlistConfig)
        .run(fundlistRun)
        .directive('app', appDirective);


    function fundlistConfig($stateProvider, $urlRouterProvider) {
        /* Add New States Above */
        $urlRouterProvider.otherwise('/home');
    }

    function fundlistRun($rootScope) {
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
    }

    function appDirective() {
        return {
            restrict: 'E',
            replace: true,
            template:
                '<div><fund-list>test...</fund-list></div>'
        };
    }
})();
