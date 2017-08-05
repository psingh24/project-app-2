var path = require("path");

module.exports = function(app) {
    console.log("test");

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/preferences", function(req, res) {

    });

    app.get("/suggestions", function(req, res) {

    });

    app.get("/developers", function(req, res) {

    });
};