"use strict";
var express = require("express");
var PORT = 3000;
var HOST = "127.0.0.1";
var app = express();
var auth = require("./auth_router.ts");
app.use("/auth", auth);
app.get("/", function (req, res) {
    res.send("Hello World");
});
//app.listen(PORT, HOST);
app.listen(PORT, function () {
    console.log("Server running on http://" + HOST + ":" + PORT);
});
