const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const seasonSchema = new Schema({
    year: { type: Object, required: true },
    name: { type: String, required: true },
    league: { type: Object, required: true }
})

module.exports = mongoose.model("Season", seasonSchema);