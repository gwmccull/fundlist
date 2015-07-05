(function() {
    angular
        .module('fundlist', [
            'ui.bootstrap',
            //'ui.utils',
            'ui.router',
            'ngAnimate'
        ])
        .config(fundlistConfig)
        .run(fundlistRun)
        .directive('fundList', fundlistDirective);

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

    function fundlistDirective() {
        return {
            restrict: 'E',
            replace: true,
            template:
                '<div>test...</div>'
        };
    }
})();
