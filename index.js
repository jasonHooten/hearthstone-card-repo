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
exports.getById = function(id, context){
	context = context || hearthStoneCards;
	return _.findWhere(context, { "id": id });
};


exports.getByName = function(name, context){
	context = context || hearthStoneCards;
	return _.findWhere(context, { "name": name });
};


exports.getManyByClass = function(heroClass, context){
	context = context || hearthStoneCards;
	return getByProperty({ "class": heroClass }, context);
};


exports.getManyByMana = function(mana, context){
	context = context || hearthStoneCards;
	return getByProperty({ "mana": mana }, context);
};


exports.getManyByHealth = function(health, context){
	context = context || hearthStoneCards;
	return getByProperty({ "health": health }, context);
};


exports.getManyByAttack = function(attack, context){
	context = context || hearthStoneCards;
	return getByProperty({ "attack": attack }, context);
};


getByProperty = exports.getManyByProperty = function(property, context){
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


getLinkById = exports.getLinkById = function(id){
	return _hearthHeadLink + id;
};


/*
 * Sort Method
 */
exports.sortByMana = function(context){
	context = context || hearthStoneCards;
	return _.sortBy(context, function(card){ return card.mana || 0; });
};


exports.sortByHealth = function(context){
	context = context || hearthStoneCards;
	return _.sortBy(context, function(card){ return card.health || 0; });
};


exports.sortByAttack = function(context){
	context = context || hearthStoneCards;
	return _.sortBy(context, function(card){ return card.attack || 0; });
};


exports.sortByQuality = function(context){
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

exports.groupByQuality = function(context){
	context = context || hearthStoneCards;
	return _.groupBy(context, 'quality');
};



/*
 * Starting Hand 
 */
drawCard = exports.drawCard = function(deck, hand){
	var newCard = __.sample(deck);
	deck = _.reject(deck, function(card){ return card.id === newCard.id; });
	
	var newHand = hand || [];
	newHand.push(newCard);

	return { deck: deck, hand: newHand };
};


exports.drawHand = function(deck, withCoin){
	var turn = { deck: deck, hand: [] };

	for(var i = 0; i < 4; i++){
		turn = drawCard(turn.deck, turn.hand);
	}

	if(withCoin) turn.hand.push(getById(1746)); //the coin
	return turn;
};

