(function () {
    angular
        .module('fundList', [])
        .directive('fundList', fundList);

    function fundList() {
        var directive = {
            controllerAs: 'vm',
            restrict: 'E',
            controller: FundListController,
            replace: true,
            scope: {},
            templateUrl: './components/fund-list/fund-list.html'
            //link: linkFunc,
            //bindToController: true // because the scope is isolated
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {
            console.log('LINK: scope.min = %s *** should be undefined', scope.min);
            console.log('LINK: scope.max = %s *** should be undefined', scope.max);
            console.log('LINK: scope.vm.min = %s', scope.vm.min);
            console.log('LINK: scope.vm.max = %s', scope.vm.max);
        }
    }

    FundListController.$inject = ['$scope', 'fundService'];

    function FundListController($scope, fundService) {
        // Injecting $scope just for comparison
        var vm = this;

        vm.min = 3;

        console.log('CTRL: $scope.vm.min = %s', $scope.vm.min);
        console.log('CTRL: $scope.vm.max = %s', $scope.vm.max);
        console.log('CTRL: vm.min = %s', vm.min);
        console.log('CTRL: vm.max = %s', vm.max);
    }
})();
