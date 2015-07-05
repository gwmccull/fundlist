(function () {
    angular
        .module('app.fund', [])
        .directive('fund', fund);

    function fund() {
        var directive = {
            controllerAs: 'vm',
            restrict: 'E',
            controller: FundController,
            bindToController: true,
            scope: {
                fund: '='
            },
            templateUrl: 'components/fund/fund.html',
        };

        return directive;
    }

    FundController.$inject = ['$scope'];

    function FundController($scope) {
        var vm = this;
        vm.fund = vm.fund;
    }
})();
