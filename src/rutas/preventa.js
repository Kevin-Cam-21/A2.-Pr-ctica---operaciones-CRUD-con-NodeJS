const express = require("express");
const route = express.Router();
const controlador_preventa = require("../controladores/controlador_preventa")

route.get ("/",                     controlador_preventa.preventa);

module.exports = route;