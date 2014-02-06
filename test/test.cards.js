var repo = require("./../"),
	expect = require("chai").expect;

describe('.cards', function() {
	it('should not be empty', function() {
		expect(repo.cards).to.be.ok;
		expect(repo.cards).to.not.be.empty;
		console.log(repo.cards.length);
	});
});


describe('getById', function() {
	it('should match to the card in the repo', function() {
		var card = repo.getById(8);
		expect(card).to.be.ok;
		expect(card.id).to.be.equal(8);
	});

	it('should match to the card in the context', function() {
		var card = repo.getById(8, context);
		expect(card).to.be.ok;
		expect(card.id).to.be.equal(8);
	});

	it('should return undeifined if not found', function() {
		var card = repo.getById(0);
		expect(card).to.be.undefined;
	});
});



describe('getByName', function() {
	it('should match to the card in the repo', function() {
		var card = repo.getByName("Mind Control");
		expect(card).to.be.ok;
		expect(card.id).to.be.equal(8);
	});

	it('should match to the card in the context', function() {
		var card = repo.getByName("Mind Control", context);
		expect(card).to.be.ok;
		expect(card.id).to.be.equal(8);
	});

	it('should return undefined if not found', function() {
		var card = repo.getByName('');
		expect(card).to.be.undefined;
	});
});


describe('getManyByClass', function() {
	it('should match to the card in the repo', function() {
		var card = repo.getManyByClass("priest");
		expect(card).to.not.be.empty;
		expect(card[0].id).to.be.equal(8);
	});

	it('should match to the card in the context', function() {
		var card = repo.getManyByClass("priest", context);
		expect(card).to.not.be.empty;
		expect(card[0].id).to.be.equal(8);
	});

	it('should empty if not found', function() {
		var card = repo.getManyByClass('');
		expect(card).to.be.empty;
	});
});



describe('getManyByMana', function() {
	it('should match to the card in the repo', function() {
		var card = repo.getManyByMana(8);
		expect(card).to.not.be.empty;
		expect(card[0].id).to.be.equal(32);
	});

	it('should match to the card in the context', function() {
		var card = repo.getManyByMana(8, context);
		expect(card).to.not.be.empty;
		expect(card[0].id).to.be.equal(8);
	});

	it('should empty if not found', function() {
		var card = repo.getManyByMana('');
		expect(card).to.be.empty;
	});
});


describe('getManyByHealth', function() {
	it('should match to the card in the repo', function() {
		var card = repo.getManyByHealth(7);
		expect(card).to.not.be.empty;
		expect(card[0].id).to.be.equal(9);
	});

	it('should match to the card in the context', function() {
		var card = repo.getManyByHealth(7, context);
		expect(card).to.not.be.empty;
		expect(card[0].id).to.be.equal(9);
	});

	it('should empty if not found', function() {
		var card = repo.getManyByHealth('');
		expect(card).to.be.empty;
	});
});




describe('getManyByAttack', function() {
	it('should match to the card in the repo', function() {
		var card = repo.getManyByAttack(7);
		expect(card).to.not.be.empty;
		expect(card[0].id).to.be.equal(9);
	});

	it('should match to the card in the context', function() {
		var card = repo.getManyByAttack(7, context);
		expect(card).to.not.be.empty;
		expect(card[0].id).to.be.equal(9);
	});

	it('should empty if not found', function() {
		var card = repo.getManyByAttack('');
		expect(card).to.be.empty;
	});
});


describe('getLink(s)', function() {
	it('getLink should return a hearthhead link', function() {
		var card = repo.getById(9);
		var urls = repo.getLinks([card]);
		expect(urls).to.not.be.empty;
		expect(urls[0]).to.be.equal("http://www.wowhead.com/hearthstone/card=9");
	});

	it('getLink should return a hearthhead link', function() {
		var card = repo.getById(9);
		var url = repo.getLink(card);
		expect(url).to.not.be.empty;
		expect(url).to.be.equal("http://www.wowhead.com/hearthstone/card=9");
	});
});


describe('sortBy', function() {
	it('mana', function() {
		var card = repo.sortByMana(context);
		expect(card).to.not.be.empty;
		expect(card[0].id).to.be.equal(7);
	});

	it('health', function() {
		var card = repo.sortByHealth(context);
		expect(card).to.not.be.empty;
		expect(card[0].id).to.be.equal(8);
	});

	it('attack', function() {
		var card = repo.sortByAttack(context);
		expect(card).to.not.be.empty;
		expect(card[0].id).to.be.equal(7);
	});

	it('quality', function() {
		var card = repo.sortByQuality(context);
		expect(card).to.not.be.empty;
		expect(card[0].id).to.be.equal(9);
	});
});


describe('groupBy', function() {
	it('mana', function() {
		var groups = repo.groupByMana(context);
		expect(groups).to.not.be.empty;
		expect(groups["7"].length).to.be.equal(1);
	});

	it('health', function() {
		var card = repo.groupByHealth(context);
		expect(card).to.not.be.empty;
		expect(card["30"].length).to.be.equal(1);
	});

	it('attack', function() {
		var card = repo.groupByAttack(context);
		expect(card).to.not.be.empty;
		expect(card["7"].length).to.be.equal(1);
	});

	it('quality', function() {
		var card = repo.groupByQuality(context);
		expect(card).to.not.be.empty;
		expect(card["legendary"].length).to.be.equal(1);
	});
});


describe('draw', function() {
	it('card should return a random card from deck', function() {
		var turn = repo.drawCard(context);
		
		expect(turn.deck).to.not.be.empty;
		expect(turn.hand).to.not.be.empty;
		expect(turn.deck.length).to.be.equal(3);
		expect(turn.hand.length).to.be.equal(1);
	});

	it('hand should return a random 4 card from deck', function() {
		var turn = repo.drawHand(context);
		
		expect(turn.deck).to.be.empty;
		expect(turn.hand).to.not.be.empty;
		expect(turn.deck.length).to.be.equal(0);
		expect(turn.hand.length).to.be.equal(4);
	});

});



var context =  [
   {
      "id":7,
      "name":"Garrosh Hellscream",
      "description":"",
      "image":"http:\/\/wow.zamimg.com\/images\/hearthstone\/cards\/enus\/medium\/HERO_01.png",
      "class":"warrior",
      "type":"hero",
      "quality":"free",
      "race":"none",
      "set":"basic",
      "mana":0,
      "attack":null,
      "health":30,
      "collectible":true,
      "effect_list":[

      ]
   },
   {
      "id":8,
      "name":"Mind Control",
      "description":"Take control of an enemy minion.",
      "image":"http:\/\/wow.zamimg.com\/images\/hearthstone\/cards\/enus\/medium\/CS1_113.png",
      "class":"priest",
      "type":"spell",
      "quality":"common",
      "race":"none",
      "set":"basic",
      "mana":8,
      "attack":null,
      "health":null,
      "collectible":true,
      "effect_list":[

      ]
   },
   {
      "id":9,
      "name":"Prophet Velen",
      "description":"Double the damage and healing of your spells and Hero Power.",
      "image":"http:\/\/wow.zamimg.com\/images\/hearthstone\/cards\/enus\/medium\/EX1_350.png",
      "class":"priest",
      "type":"minion",
      "quality":"legendary",
      "race":"none",
      "set":"expert",
      "mana":7,
      "attack":7,
      "health":7,
      "collectible":true,
      "effect_list":[

      ]
   },
   {
      "id":12,
      "name":"Mana Addict",
      "description":"Whenever you cast a spell, gain +2 Attack this turn.",
      "image":"http:\/\/wow.zamimg.com\/images\/hearthstone\/cards\/enus\/medium\/EX1_055.png",
      "class":"neutral",
      "type":"minion",
      "quality":"rare",
      "race":"none",
      "set":"expert",
      "mana":2,
      "attack":1,
      "health":3,
      "collectible":true,
      "effect_list":[

      ]
   }];