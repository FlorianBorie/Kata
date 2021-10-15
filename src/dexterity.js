const { Item } = require("./gilded_rose");

class Dexterity extends Item {
  constructor(sellIn, quality) {
    super('+5 Dexterity Vest', 10, 20)
  }
}

module.exports = Dexterity;
