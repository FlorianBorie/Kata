const { Item } = require("../../src/gilded_rose");

class Dexterity extends Item {
  constructor(sellIn, quality) {
    super('+5 Dexterity Vest', sellIn, quality)
  }

  updateDexterity(item) {
    item.sellIn = item.sellIn - 1;
    if (item.sellIn > 0) {
      item.quality = item.quality - 1
    }
    else {
      item.quality = item.quality - 2
    }
    if (item.quality > 50) {
      item.quality = 50
    }
    return item
  }
}

module.exports = Dexterity;
