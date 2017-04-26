const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: { type: String, required: true },
    meet: { type: ObjectId, required: true},
    season: { type: ObjectId, required: true},
    schoolYear: { type: ObjectId, required: true},
    eventType: { type: Array, required: true}
})

module.exports = mongoose.model("Event", eventSchema);