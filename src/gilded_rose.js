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
   this.items.forEach((item) => {
      switch(item.name) {
        case 'Aged Brie': 
          item.update()
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          item = this.updateDexterity(item)
          break;
        case 'Sulfuras, Hand of Ragnaros':
          item = this.updateDexterity(item)
          break;
        default:
          item = this.updateDexterity(item)
          break;
      }
    })
    return this.items;
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



  updateBackstage(item) {
    item.sellIn = item.sellIn - 1;
    if (this.sellIn < 0) this.quality = 0;
    if (this.sellIn <= 5) this.quality += 3;
    if (this.sellIn <= 10) this.quality += 2;
    else this.quality += 1
    if (this.quality > 50) this.quality = 50;

  }

  updateSulfuras(item) {
    return item
  }
}

module.exports = {
  Item,
  Shop
}
