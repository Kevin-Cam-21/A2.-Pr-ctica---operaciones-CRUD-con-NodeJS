const express = require("express");
const route = express.Router();
const controlador_Sesion = require("../controladores/controlador_Sesion")

route.get("/", function(req, res){
    res.render("iniciarSesion.ejs");
});

route.post("/iniciar",           controlador_Sesion.iniciar);
route.post("/cerrar",            controlador_Sesion.cerrar);

module.exports = route;