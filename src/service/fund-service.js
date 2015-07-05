(function() {
    angular
        .module('app.core', [])
        .factory('fundService', fundService);

    fundService.$inject = ['$http', '$log'];

    function fundService($http, $log) {
        var funds = [];

        return {
            getFunds: getFunds
        };

        function getFunds() {
            if (funds.length === 0) {
                return $http.get('../data/funds.json')
                    .then(getFundsComplete)
                    .catch(getFundsError);
            } else {
                return funds;
            }
        }

        function getFundsComplete(data) {
            funds = data.data.funds;
            return funds;
        }

        function getFundsError(error) {
            $log.error('Error retrieving funds.json: ' + error);
        }
    }
})();
