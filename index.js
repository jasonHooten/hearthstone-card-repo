var _ = require('underscore'),
    hearthStoneCards = require('./cards');

// Privates
var _hearthHeadLink = "http://www.wowhead.com/hearthstone/card=";
var _qualityRanks = _.map(["legendary", "epic", "rare", "uncommon", "common", "free"], function(quality, index){
	return { quality: quality, index: index };
});

/*
 * Cards data
 */
module.exports = exports = cards;


/*
 * Repository Methods
 */
module.exports = exports = getById = function(name, context){
	context = context || hearthStoneCards;
	return _.findWhere(context, { name: name });
};


module.exports = exports = getByName = function(name, cards){
	context = context || hearthStoneCards;
	return _.findWhere(context, { name: name });
};


module.exports = exports = getByClass = function(heroClass, context){
	context = context || hearthStoneCards;
	return getByProperty({ "class": hero }, context);
};


module.exports = exports = getByMana = function(mana, context){
	context = context || hearthStoneCards;
	return getByProperty({ "mana": mana }, context);
};


module.exports = exports = getByHealth = function(health, context){
	context = context || hearthStoneCards;
	return getByProperty({ "health": health }, context);
};


module.exports = exports = getByAttack = function(attack, context){
	context = context || hearthStoneCards;
	return getByProperty({ "attack": attack }, context);
};


module.exports = exports = getByProperty = function(property, context){
	context = context || hearthStoneCards;
	return _.where(context, property);
};


/*
 * Link Methods
 */
module.exports = exports = getLinks = function(cards){
	return _.map(cards, function(card){ return getLinkById(card.id);});
};


module.exports = exports = getLink = function(card){
	return getLinkById(card.id);
};


module.exports = exports = getLinkById = function(id){
	return _hearthHeadLink + id;
};


/*
 * Sort Method
 */
module.exports = exports = sortByMana = function(mana, context){
	context = context || hearthStoneCards;
	return _.sortBy(context, function(card){ return card.mana || 0; });
};


module.exports = exports = sortByHealth = function(health, context){
	context = context || hearthStoneCards;
	return _.sortBy(context, function(card){ return card.health || 0; });
};


module.exports = exports = sortByAttack = function(attack, context){
	context = context || hearthStoneCards;
	return _.sortBy(context, function(card){ return card.attack || 0; });
};


module.exports = exports = sortByQuality = function(quality, context){
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
 module.exports = exports = groupByMana = function(context){
	context = context || hearthStoneCards;
	return _.groupBy(context, 'mana');
};

 module.exports = exports = groupByHealth = function(context){
	context = context || hearthStoneCards;
	return _.groupBy(context, 'health');
};

 module.exports = exports = groupByAttack = function(context){
	context = context || hearthStoneCards;
	return _.groupBy(context, 'attack');
};

module.exports = exports = groupByQuality = function(quality, context){
	context = context || hearthStoneCards;
	return _.groupBy(context, 'quality');
};



/*
 * Starting Hand 
 */
module.exports = exports = startingHand_p1 = function(context){
	var hand = [];
	return [];
};


module.exports = exports = startingHand_p2 = function(context){
	var hand = [];


	return [];
};