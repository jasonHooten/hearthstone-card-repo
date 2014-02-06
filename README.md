hearthstone-card-repo
=================

Nodejs library for hearthstone cards


Version
----

0.5

'Update to date with Hearthstone Patch 1.0.0.4482'


Installation
--------------

```sh
npm install --save hearthstone-card-repo
```

Usage
--------------

```js
var hc_repo = require('hearthstone-card-repo');
```


API
--------------

All methods return a single card.

### getById(id, [context])
- `id` (int) - The id of the card.
- `context` ([cards]) - Optional, will search context instead of card database. 

### getByName(name, [context])
- `name` (string) - The name of the card.
- `context` ([cards]) - Optional, will search context instead of card database.

-----

All methods return an array of cards.

### getManyByClass(heroClass, [context])
- `heroClass` (string) - The name of the class the cards belong to, "warrior", "priest"...etc ("neurtal" included)
- `context` ([cards]) - Optional, will search context instead of card database.

### getManyByMana(mana, [context])
- `mana` (int) - The mana const of the card, null for non-minions/spells.
- `context` ([cards]) - Optional, will search context instead of card database.

### getManyByHealth(health, [context])
- `health` (int) - The health of the card, null for non-minions.
- `context` ([cards]) - Optional, will search context instead of card database.

### getManyByAttack(attack, [context])
- `attack` (int) - The attack of the card, null for non-minions.
- `context` ([cards]) - Optional, will search context instead of card database.

### getManyByProperty(property, [context])
- `property` (object) - Wild card based on object attributes. exp. 'var property = { health: 7 }'
- `context` ([cards]) - Optional, will search context instead of card database.

-----

All methods return an array of cards.

### sortByMana([context])
- `context` ([cards]) - Optional, will search context instead of card database.

### sortByHealth([context])
- `context` ([cards]) - Optional, will search context instead of card database.

### sortByAttack([context])
- `context` ([cards]) - Optional, will search context instead of card database.

### sortByQuality([context])
- `context` ([cards]) - Optional, will search context instead of card database.

----

All methods return an array of cards.

### groupByMana([context])
- `context` ([cards]) - Optional, will search context instead of card database.

### groupByHealth([context])
- `context` ([cards]) - Optional, will search context instead of card database.

### groupByAttack([context])
- `context` ([cards]) - Optional, will search context instead of card database.

### groupByQuality([context])
- `context` ([cards]) - Optional, will search context instead of card database.

### groupByClass([context])
- `context` ([cards]) - Optional, will search context instead of card database.

-----

All methods return a string to the HearthHead website for the card. Useful for tooltips!

### getLinkById(id)
- `id` (int) - The id of the card.

### getLink(card)
- `card` (card) - The card object from the repo.

### getLinks(cards)
- `cards` ([cards]) - A list of cards to get urls for.


-----

Both methods return an object with new cards in hand and a remaining deck.

### drawCard(deck, hand)
- `deck` ([card]) - A list of cards to draw a new card from.
- `hand` ([card]) - Current hand.

### getLinks(deck, withCoin)
- `deck` ([cards]) - A list of cards to draw your starting hand from.
- 'withCoin' (bool) - A bool of if the user is going second, will include the coin card.



[@jasonhooten]:http://twitter.com/jasonhooten