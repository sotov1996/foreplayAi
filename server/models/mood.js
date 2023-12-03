const mongoose = require("mongoose");
const Schema = mongoose.Schema;
   
const moodScheme = new Schema({
    key: {
        type: String,
        unique: true
    },
    title: String
});
 
const Mood = mongoose.model("Mood", moodScheme);

module.exports = { Mood }