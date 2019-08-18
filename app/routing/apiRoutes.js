const express = require("express")

module.exports = function (app) {

app.get("/api/friends", function(req, res) {
   return res.send(friends)
})

app.post("/api/friends", function(req, res) {
    var newFriend = req.body;

    friends.push(newFriend);
    res.json(newFriend);
});

}