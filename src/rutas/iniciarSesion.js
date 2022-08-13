const express = require("express");
const route = express.Router();
const controlador_Sesion = require("../controladores/controlador_Sesion")

route.get("/", function(req, res){
    res.render("iniciarSesion.ejs");
});


module.exports = route;