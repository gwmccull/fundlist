(function() {
    angular
        .module('app.filter.date', [])
        .filter('parseDate', parseDate);

    function parseDate() {
        return function(strDate) {
            var date = null;

            if (strDate) {
                date = moment(strDate).toDate();
            }

            return date;
        };

    }
})();
