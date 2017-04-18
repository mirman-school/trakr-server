const mongo = require("mongo");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const config = require("./config.js");
const schemas = require("./schemas");

const connectionUrl = config.mongo.serverUrl + "/" + config.mongo.db;

mongoose.connect(connectionUrl, (err) => {
    if (err) throw err;
    console.log("Successfully connected to MongoDB");
});

app.use(bodyParser.json());

app.route("/schoolyears")
.get((req,res) => {
    schemas.SchoolYear.find((err,data) => {
        if (err) throw err;
        res.send(data);
    })
})

app.listen(config.server.listenPort, () => {
    console.log(`Listening on port ${config.server.listenPort}`);
})