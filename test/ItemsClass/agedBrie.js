const { Item } = require("../../src/gilded_rose");


class AgedBrie extends Item {
  constructor(sellIn, quality) {
    super('Aged Brie', sellIn, quality)
  }
  update() {
    this.sellIn = this.sellIn - 1
    if (this.sellIn > 0) {
      this.quality = this.quality + 1
    }
    else {
      this.quality = this.quality + 2
    }
    if (this.quality > 50) {
      this.quality = 50
    }
  }

}

module.exports = AgedBrie;
