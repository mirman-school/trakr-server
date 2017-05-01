const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meetSchema = new Schema({
    name: { type: String, required: true },
    season: { type: Objectid, required: true }
})

module.exports = mongoose.model("Meet", meetSchema);