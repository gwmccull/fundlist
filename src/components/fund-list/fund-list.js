(function () {
    angular
        .module('app.fundList', [])
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
            templateUrl: 'components/fund-list/fund-list.html'
        };

        return directive;
    }

    FundListController.$inject = [];

    function FundListController() {
        var vm = this;
    }
})();
