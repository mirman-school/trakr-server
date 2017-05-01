const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: { type: String, required: true },
    meet: { type: Objectid, required: true},
    season: { type: Objectid, required: true},
    eventType: {
        name: { type: String, required: true},
        description: { type: String, required: true},
    },
    isRelay: {type: Boolean, required: true}
})

module.exports = mongoose.model("Event", eventSchema);