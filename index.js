const mongo = require("mongo");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const config = require("./config.js");
const models = require("./models");

const connectionUrl = config.mongo.serverUrl + "/" + config.mongo.db;

mongoose.connect(connectionUrl, (err) => {
    if (err) throw err;
    console.log("Successfully connected to MongoDB");
});

app.use(bodyParser.json());

app.route("/schoolyears")
.get((req, res) => {
    models.SchoolYear.find((err,data) => {
        if (err) throw err;
        res.send(data);
    })
})
.post((req, res) => {
    const longName = req.body.longName;
    const shortName = req.body.shortName;
    const newSchool = new models.School({longName, shortName});
    newSchool.save((err) => {
        if (err) res.status(500).send("Could not save");
        res.status(200).send("New School Saved");
    });
});

app.route("/schools")
.get((req,res) => {
    models.School.find((err, data) => {
        if (err) throw err;
        res.send(data);
    })
});

app.listen(config.server.listenPort, () => {
    console.log(`Listening on port ${config.server.listenPort}`);
})