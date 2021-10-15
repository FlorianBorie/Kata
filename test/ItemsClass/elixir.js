const { Item } = require("../../src/gilded_rose");

class Elixir extends Item {
  constructor(sellIn, quality) {
    super('Elixir of the Mongoose', sellIn, quality)
  }
}

module.exports = Elixir;