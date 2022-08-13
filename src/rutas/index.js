const express = require("express");
const route = express.Router();

route.get("/", function(req, res){
    res.render("index.ejs", {titulo: "Vista Princial", nombre: "Kevin"});
});

module.exports = route;