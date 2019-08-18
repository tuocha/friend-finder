const express = require("express")
const fs = require("fs")
const http = require("http")
const PORT = process.env.PORT || 8080;

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/htmlRoutes.js")(app)

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});
