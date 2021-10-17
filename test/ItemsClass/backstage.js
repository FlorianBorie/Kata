const { Item } = require("../../src/gilded_rose");

class Backstage extends Item {
  constructor(sellIn, quality) {
    super('Backstage passes to a TAFKAL80ETC concert' , sellIn, quality)
    }

    updateBackstage(item) {
      item.sellIn = item.sellIn - 1;
      if (item.sellIn < 0) {
        item.quality = 0;
      }
      else if (item.sellIn <= 5) {
        item.quality = item.quality + 3;
      }
      else if (item.sellIn <= 10) {
        item.quality = item.quality + 2;
      }
      else {
        item.quality = item.quality + 1;
      }
      if (item.quality > 50) {
        item.quality = 50
      }
      return item
    }
  }



module.exports = Backstage;
