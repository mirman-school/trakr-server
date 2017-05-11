const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leagueSchema = new Schema({
    name: { type: String, required: true },
    schools: [Object]
});

module.exports = mongoose.model("League", leagueSchema);