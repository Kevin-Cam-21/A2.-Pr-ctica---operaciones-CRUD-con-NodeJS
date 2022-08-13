const express = require("express");
const ejs = require("ejs");
const mysql = require("mysql");
const myConnection = require("express-myconnection");
const session = require("express-session");
const path = require("path");


const servidor = express();

const datosBD = {
                    host: "localhost",
                    user: "root",
                    password: "",
                    port: "3306",
                    database: "dwi_2022_ejemplo1"
                };

servidor.set("puerto", 3000);
servidor.set("view engine", "ejs");
servidor.set("views", path.join(__dirname, "./src/vistas"));
servidor.engine("html", ejs.renderFile);

servidor.use(express.urlencoded({extended:false}));
servidor.use(express.json());

servidor.use(myConnection(mysql,datosBD,"single"));
servidor.use(session({secret: "qwerty",
                        resave: false,
                        saveUninitialized: false
                    }));

servidor.use("/", require("./src/rutas/index.js"));
servidor.use("/ubicacion", require("./src/rutas/ubicacion.js"));
servidor.use("/preventa", require("./src/rutas/preventa.js"));
servidor.use("/contacto", require("./src/rutas/contacto.js"));
servidor.use("/ayuda", require("./src/rutas/ayuda.js"));
servidor.use("/boletos", require("./src/rutas/boletos.js"));

servidor.use("/sesion", require("./src/rutas/sesion.js"));
servidor.use("/iniciarSesion", require("./src/rutas/iniciarSesion.js"));

servidor.use(express.static("./src/recursos"));

servidor.listen(servidor.get("puerto"), function(){
    console.log("Servidor express escuchando en el puerto : ", servidor.get("puerto"));
});



