const friendsData = require("../data/friends.js")

module.exports = function (app) {

app.get("/api/friends", function(req, res) {
    console.log(friendsData)
    res.json(friendsData)
})

app.post("/api/friends", function(req, res) {
    var newFriend = req.body;

    friendsData.push(newFriend);
    res.json(newFriend);
});

}