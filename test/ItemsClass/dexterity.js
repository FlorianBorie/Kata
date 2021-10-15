const { Item } = require("../../src/gilded_rose");

class Dexterity extends Item {
  constructor(sellIn, quality) {
    super('+5 Dexterity Vest', sellIn, quality)
  }
}

module.exports = Dexterity;
