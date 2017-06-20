const express = require('express');
const app = express();

app.get('/', function (request, response) {
    response.send(" Hello <br> World!");
});

app.listen(3000, function () {
    console.log('Successfuly started express app!');
});   