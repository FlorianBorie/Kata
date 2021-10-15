const { Item } = require("./gilded_rose");

class Sulfuras extends Item {
  constructor(sellIn, quality) {
    super('Sulfuras, Hand of Ragnaros', sellIn, quality)
  }
}

module.exports = Sulfuras;
