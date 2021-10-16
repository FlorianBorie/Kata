class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name == 'Aged Brie') {
        this.update(this.items[i])
      }
      if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
        this.updateBackstage(this.items[i])
      }
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        this.updateSulfuras(this.items[i])
      } else {
        this.update(this.items[i])
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name == 'Aged Brie') {
          this.update(this.items[i])
        } 
        if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
          this.descrease(this.items[i])
        } else {
          this.updateSulfuras(this.items[i])
        }
      }
    }

    return this.items;
  }
  
  update(item) {
    if (item.quality < 50) {
      this.increase(item)
    }
  }

  increase(item) {
    item.quality = item.quality + 1;
  }

  descrease(item) {
    item.quality = item.quality - 1;
  }

  updateBackstage(item) {
    if (item.sellIn < 11 || item.sellIn < 6) {
      this.update(item)
    }

  }

  updateSulfuras(item) {
    if (item.quality > 0) {
      this.descrease(item)
    }
  }



}

module.exports = {
  Item,
  Shop
}
