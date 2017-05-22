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

app.route("/users")
.get((req, res) => {

})
.push((req, res) => {

});

app.route("/users/:id")
.get((req, res) => {

})
.post((req, res) => {

})
.delete((req, res) => {

});

app.route("/seasons")
.get((req, res) => {

})
.push((req, res) => {

});

app.route("/seasons/:id")
.get((req, res) => {

})
.post((req, res) => {

})
.delete((req, res) => {

});

app.route("/schools")
.get((req, res) => {

})
.push((req, res) => {

});

app.route("/schools/:id")
.get((req, res) => {

})
.post((req, res) => {

})
.delete((req, res) => {

});

app.route("/meets")
.get((req, res) => {

})
.push((req, res) => {

});

app.route("/meets/:id")
.get((req, res) => {

})
.post((req, res) => {

})
.delete((req, res) => {

});

app.route("/leagues")
.get((req, res) => {

})
.push((req, res) => {

});

app.route("/leagues/:id")
.get((req, res) => {

})
.post((req, res) => {

})
.delete((req, res) => {

});

app.route("/events")
.get((req, res) => {

})
.push((req, res) => {

});

app.route("/events/:id")
.get((req, res) => {

})
.post((req, res) => {

})
.delete((req, res) => {

});

app.route("/athletes")
.get((req, res) => {

})
.push((req, res) => {

});

app.route("/athletes/:id")
.get((req, res) => {

})
.post((req, res) => {

})
.delete((req, res) => {

});

app.listen(config.server.listenPort, () => {
    console.log(`Listening on port ${config.server.listenPort}`);
})