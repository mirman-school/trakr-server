const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const athleteSchema = new Schema({
    name: { type: String, required: true },
    league: { type: Objectid, required: true }
})

module.exports = mongoose.model("Athlete", athleteSchema);