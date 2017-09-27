// Pull in assertion library that we get from Chai
// An assertion is something that we want to be true
var assert = chai.assert;

// Working with Mocha is following patterns, and then substituting in some names with ours

// This is testing that an array is empty when it is created
describe('Array', function() {
	it('should start empty', function() {
		var arr = [];
		assert.equal(arr.length, 0);
	});

	it('should have 1 value after push', function() {
		var arr = [];
		arr.push('abc');
		assert.equal(arr.length, 1);
	});

	// `indexOf` checks to see if a thing is inside of an array.  If it isn't, it gives you a -1.
	describe('#indexOf()', function() {
		it('should return -1 when value is not present', function() {
			assert.equal(-1, [1,2,3].indexOf(4));
		});

		it('should return 0 when value is first in array', function() {
			assert.equal(0, [1,2,3].indexOf(1));
		});
	});

});