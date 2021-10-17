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
          item.update()
          break;
      }
    })
    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
