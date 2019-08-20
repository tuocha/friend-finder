const express = require("express")
const fs = require("fs")
const http = require("http")
const PORT = process.env.PORT || 8080;

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"))

require("./app/routing/htmlRoutes.js")(app)
require("./app/routing/apiRoutes.js")(app)

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});
