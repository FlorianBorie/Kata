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
          item.update()
          break;
        case 'Sulfuras, Hand of Ragnaros':
          item.update()
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
}

module.exports = {
  Item,
  Shop
}
