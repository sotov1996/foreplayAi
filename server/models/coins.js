const mongoose = require("mongoose");
const Schema = mongoose.Schema;
   
const coinsScheme = new Schema({
    userId: String,
    coins: Number
});
 
const Coins = mongoose.model("Coins", coinsScheme);

module.exports = { Coins }