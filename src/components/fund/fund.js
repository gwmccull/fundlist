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
            replace: false
        };

        return directive;
    }

    FundController.$inject = [];

    function FundController() {
        var vm = this;

        vm.selectedShare = vm.fund.shareClasses[0];
    }
})();
