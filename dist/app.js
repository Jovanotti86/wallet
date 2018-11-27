"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.status(200).send('Hello from app.ts');
});
app.listen(3000, function () {
    console.log('Server started on 3000');
});
