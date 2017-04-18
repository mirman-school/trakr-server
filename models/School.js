const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schoolSchema = new Schema({
    longName: { type: String, required: true },
    shortName: { type: String, required: true },
})

module.exports = mongoose.model("School", schoolSchema);