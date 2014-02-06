var repo = require("./../"),
	expect = require("chai").expect;

describe('.cards', function() {
	it('should not be empty', function() {
		expect(repo.cards).to.be.ok;
		expect(repo.cards).to.not.be.empty;
		console.log(repo.cards.length);
	});
});