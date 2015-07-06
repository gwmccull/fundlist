describe('filter tests', function() {

    beforeEach(module('app.filter'));

    describe('string filter tests', function() {

        describe('null value tests', function() {
            it('should return a dash for null value', inject(function(nullValueFilter) {
                expect(nullValueFilter('')).toBe('\u2014');
            }));

            it('should return a dash for undefined value', inject(function(nullValueFilter) {
                expect(nullValueFilter()).toBe('\u2014');
            }));
        });

        describe('good value tests', function() {
            it('should return the value if not null', inject(function(nullValueFilter) {
                expect(nullValueFilter('test')).toBe('test');
            }));
        });
    });

    describe('date filter tests', function() {
        describe('good value tests', function() {
            var date = moment('2014-01-31 00:00:00.0').toDate();

            it('should return a date object', inject(function(parseDateFilter) {
                expect(parseDateFilter('2014-01-31 00:00:00.0')).toEqual(date);
            }));
        });

        describe('null value tests', function() {
            it('should return a null if the date doesn\'t exist', inject(function(parseDateFilter) {
                expect(parseDateFilter()).toBe(null);
            }));

            it('should return a null if the date is an empty string', inject(function(parseDateFilter) {
                expect(parseDateFilter('')).toBe(null);
            }));
        });

    })

});
