const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: { type: String, required: true },
    meet: { type: Objectid, required: true},
    season: { type: Objectid, required: true},
    eventType: { type: [Objectid], required: true}
})

module.exports = mongoose.model("Event", eventSchema);