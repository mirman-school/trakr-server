const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schoolSchema = new Schema({
    shortName: {type: String, required: true},
    longName: {type: String, required: true}
});

const leagueSchema = new Schema({
    name: { type: String, required: true },
    schools: [schoolSchema]
});

module.exports = mongoose.model("League", leagueSchema);