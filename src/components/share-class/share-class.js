(function () {
    angular
        .module('app.shareClass', [])
        .directive('shareClass', shareClass);

    function shareClass() {
        var directive = {
            controllerAs: 'vm',
            restrict: 'E',
            controller: ShareClassController,
            replace: false,
            bindToController: true,
            scope: {
                share: '='
            },
            templateUrl: 'components/share-class/share-class.html'
        };

        return directive;
    }

    ShareClassController.$inject = [];

    function ShareClassController() {
        var vm = this;
    }
})();
