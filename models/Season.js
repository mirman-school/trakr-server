const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const seasonSchema = new Schema({
    year: { type: String, required: true },
    name: { type: String, required: true },
    leagueId: { type: Objectid, required: true }
})

module.exports = mongoose.model("Season", seasonSchema);