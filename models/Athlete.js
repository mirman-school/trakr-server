const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const athleteSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    schoolId: { type: ObjectId, required: true },
})

module.exports = mongoose.model("Athlete", athleteSchema);