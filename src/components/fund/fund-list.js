(function () {
    angular
        .module('app.fundList', ['app.core'])
        .directive('fundList', fundList);

    function fundList() {
        var directive = {
            controllerAs: 'vm',
            restrict: 'E',
            controller: FundListController,
            //replace: false,
            bindToController: true,
            scope: {
                funds: '='
            },
            templateUrl: 'components/fund-list/fund-list.html',
            link: linkCtrl
        };

        return directive;
    }

    function linkCtrl(scope) {
        //console.log("scope", scope.vm);
    }

    FundListController.$inject = ['$scope', 'fundService'];

    function FundListController($scope, fundService) {
        // Injecting $scope just for comparison
        var vm = this;
        vm.funds = vm.funds;

    }
})();
