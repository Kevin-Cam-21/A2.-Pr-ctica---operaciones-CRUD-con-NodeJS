const express = require("express");
const route = express.Router();

route.get("/", function(req, res){
    res.render("ayuda.ejs");
});
module.exports = route;