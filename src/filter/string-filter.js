(function() {
    angular
        .module('app.filter.string', [])
        .filter('nullValue', nullValue);

    function nullValue() {
        return function(str) {
            if (str) {
                return str;
            } else {
                return '\u2014'
            }
        };

    }
})();
