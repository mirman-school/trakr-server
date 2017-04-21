const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leagueSchema = new Schema({
    name: { type: String, required: true },
    schools: { type: Array, required: true }
})

module.exports = mongoose.model("League", leagueSchema);