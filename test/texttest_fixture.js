
const AgedBrie = require("../src/agedBrie");
const Dexterity = require("../src/dexterity");
const Elixir = require("../src/elixir");
const { Shop, Item } = require("../src/gilded_rose");
const Sulfuras = require("../src/sulfuras");

const items = [
  new Dexterity(10, 20),
  new Elixir(5, 7),
  new AgedBrie(2, 0),
  new Sulfuras(0, 80),
  new Sulfuras(-1, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),

  // This Conjured item does not work properly yet
  new Item("Conjured Mana Cake", 3, 6),
];

const days = Number(process.argv[2]) || 2;
const gildedRose = new Shop(items);

console.log("OMGHAI!");
for (let day = 0; day < days; day++) {
  console.log(`\n-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
  gildedRose.updateQuality();
}
