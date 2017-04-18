const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schoolYearSchema = new Schema({
    year: { type: String, required: true },
})

module.exports = mongoose.model("SchoolYear", schoolYearSchema);