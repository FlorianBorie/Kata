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
          item = this.updateAgedBrie(item)
          break;
        case 'Backstage passes to a TAFKAL80ETC concert': 
          item = this.updateBackstage(item)
          break;
        case 'Sulfuras, Hand of Ragnaros':
          item = this.updateSulfuras(item)
          break;
        default:
          item = this.updateDexterity(item)
          break;
      }
    })
    return this.items;
  }
  
  updateAgedBrie(item) {
    item.sellIn = item.sellIn - 1
    if (item.sellIn > 0) {
      item.quality = item.quality + 1
    } else {
      item.quality = item.quality + 2
    }
    if (item.quality > 50) {
      item.quality = 50
    }
    return item
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

  updateSulfuras(item) {
    return item
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

module.exports = {
  Item,
  Shop
}
