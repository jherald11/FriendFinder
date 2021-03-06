var express = require("express");
var bodyParser = require("body-parser");
var path = require("path")

var app = express();
var PORT = process.env.PORT || 8080;

app.get("/api/friends", function(req, res){
    return res.json(friends);
});

app.post("/api/friends", function(req, res){
    var newFriend = req.body;

    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    friends.push(newFriend);
    res.json(newFriend);
});

