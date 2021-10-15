const { Item } = require("./gilded_rose");


class AgedBrie extends Item {
  constructor(sellIn, quality) {
    super('Aged Brie', sellIn, quality)
  }
}

module.exports = AgedBrie;
