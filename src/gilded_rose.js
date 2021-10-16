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
      switch(this.items[i].name) {
        case 'Aged Brie': 
          this.items[i] = this.updateAgedBrie(this.items[i])
          break;
        case 'Backstage passes to a TAFKAL80ETC concert': 
          this.items[i] = this.updateBackstage(this.items[i])
          break;
        case 'Sulfuras, Hand of Ragnaros': 
          this.items[i] = this.updateSulfuras(this.items[i])
          break;
        default:
          this.items[i] = this.updateDexterity(this.items[i])
          break;
      }

    }

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
