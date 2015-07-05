describe('filter tests', function() {

    describe('string filter tests', function() {
        beforeEach(module('app.filter.string'));

        describe('null value tests', function() {
            it('should return a dash for null value', inject(function(nullValueFilter) {
                expect(nullValueFilter('')).toBe('\u2014');
            }));

            it('should return a dash for undefined value', inject(function(nullValueFilter) {
                expect(nullValueFilter()).toBe('\u2014');
            }));

            it('should return the value if not null', inject(function(nullValueFilter) {
                expect(nullValueFilter('test')).toBe('test');
            }))
        })
    })

});
