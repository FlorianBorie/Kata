const { Item } = require("../../src/gilded_rose");

class Backstage extends Item {
  constructor(sellIn, quality) {
    super('Backstage passes to a TAFKAL80ETC concert' , sellIn, quality)
    }

  }



module.exports = Backstage;
