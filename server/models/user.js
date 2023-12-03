const mongoose = require("mongoose");
const Schema = mongoose.Schema;
   
const userScheme = new Schema({
    apiKey: String,
    apphudId: String
});
 
const User = mongoose.model("User", userScheme);

module.exports = { User }