const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meetSchema = new Schema({
    name: { type: String, required: true },
    seasonId: { type: ObjectId, required: true },
    schoolYearId: { type: ObjectId, required: true },
})

module.exports = mongoose.model("Meet", meetSchema);