const { Item } = require("../../src/gilded_rose");

class Backstage extends Item {
  constructor(sellIn, quality) {
    super('Backstage passes to a TAFKAL80ETC concert' , sellIn, quality)
    }

    update(){
      this.sellIn = this.sellIn - 1;
      if (this.sellIn < 0) this.quality = 0;
      if (this.sellIn <= 5) this.quality += 3;
      if (this.sellIn <= 10) this.quality += 2;
      else this.quality += 1
      if (this.quality > 50) this.quality = 50;
    }
  }



module.exports = Backstage;
