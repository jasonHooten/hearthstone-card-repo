var _ = require('lodash-node/underscore'),
	__ = require('lodash-node'),
    hearthStoneCards = require('./cards');

// Privates
var _hearthHeadLink = "http://www.wowhead.com/hearthstone/card=";
var _qualityRanks = _.map(["legendary", "epic", "rare", "uncommon", "common", "free"], function(quality, index){
	return { quality: quality, index: index };
});

/*
 * Cards data
 */
exports.cards = hearthStoneCards;


/*
 * Repository Methods
 */
exports.getById = function(name, context){
	context = context || hearthStoneCards;
	return _.findWhere(context, { name: name });
};


exports.getByName = function(name, cards){
	context = context || hearthStoneCards;
	return _.findWhere(context, { name: name });
};


exports.getByClass = function(heroClass, context){
	context = context || hearthStoneCards;
	return getByProperty({ "class": hero }, context);
};


exports.getByMana = function(mana, context){
	context = context || hearthStoneCards;
	return getByProperty({ "mana": mana }, context);
};


exports.getByHealth = function(health, context){
	context = context || hearthStoneCards;
	return getByProperty({ "health": health }, context);
};


exports.getByAttack = function(attack, context){
	context = context || hearthStoneCards;
	return getByProperty({ "attack": attack }, context);
};


exports.getByProperty = function(property, context){
	context = context || hearthStoneCards;
	return _.where(context, property);
};


/*
 * Link Methods
 */
exports.getLinks = function(cards){
	return _.map(cards, function(card){ return getLinkById(card.id);});
};


exports.getLink = function(card){
	return getLinkById(card.id);
};


exports.getLinkById = function(id){
	return _hearthHeadLink + id;
};


/*
 * Sort Method
 */
exports.sortByMana = function(mana, context){
	context = context || hearthStoneCards;
	return _.sortBy(context, function(card){ return card.mana || 0; });
};


exports.sortByHealth = function(health, context){
	context = context || hearthStoneCards;
	return _.sortBy(context, function(card){ return card.health || 0; });
};


exports.sortByAttack = function(attack, context){
	context = context || hearthStoneCards;
	return _.sortBy(context, function(card){ return card.attack || 0; });
};


exports.sortByQuality = function(quality, context){
	context = context || hearthStoneCards;
	return _.sortBy(context, function(card)
		{
			var quality = card.quality || "free";
			return _.findWhere(_qualityRanks, {quality: quality}).index;
		});
};



/*
 * Group Method
 */
 exports.groupByMana = function(context){
	context = context || hearthStoneCards;
	return _.groupBy(context, 'mana');
};

 exports.groupByHealth = function(context){
	context = context || hearthStoneCards;
	return _.groupBy(context, 'health');
};

exports.groupByAttack = function(context){
	context = context || hearthStoneCards;
	return _.groupBy(context, 'attack');
};

exports.groupByQuality = function(quality, context){
	context = context || hearthStoneCards;
	return _.groupBy(context, 'quality');
};



/*
 * Starting Hand 
 */
exports.drawCard = function(deck){
	var newCard = _.sample(deck);

	deck = _.reject(deck, function(card){ return card.id === newCard.id; });
	hand.push(newCard);

	return { remainingDeck: deck, hand: hand };
};


exports.startingHand = function(deck, withCoin){
	var hand = _.sample(deck, 4);
	if (_.contains(hand, deck[i])) {
			members.splice(i, 1);
			return;
	}
	if(withCoin) hand.push(getById(1746)); //the coin
	return { remainingDeck: deck, hand: hand };
};

