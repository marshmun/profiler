const express = require('express');
const app = express();
const data = require("./profile.js")

const mustache = require("mustache-express")



app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', './views');

app.get("/", function (req, res) {
    res.render("index", { listedUsers: data.users });
});
app.use(express.static('views'))


app.listen(4000, function () {
    console.log('Successfuly started express app!');
});   