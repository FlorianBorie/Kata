const { Item } = require("../../src/gilded_rose");

class Sulfuras extends Item {
  constructor(sellIn, quality) {
    super('Sulfuras, Hand of Ragnaros', sellIn, quality)
  }


  updateSulfuras(item) {
    return item
  }
}

module.exports = Sulfuras;
