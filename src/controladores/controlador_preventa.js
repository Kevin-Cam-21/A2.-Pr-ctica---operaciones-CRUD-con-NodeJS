const controlador = {};

controlador.preventa = (req, res) => {
   
    res.render("preventa.ejs");

};


// controlador.mostrar = (req, res) => {
//     req.getConnection((err, conn)=>{
//         conn.query("SELECT * FROM alumnos", (error, resultados)=>{
//             if(error)
//             res.json(error);
//             else
//             res.render("alumnos.ejs", {data: resultados});
//         })
//     })
// };

controlador.nuevo = (req, res) =>{
    res.render("alumnos_nuevo.ejs", {usuario: req.session.usuario});
};

controlador.agregar = (req, res) => {
   const regAlumno = {
                        Matricula : req.body.tfMatricula,
                        Nombre : req.body.tfNombre,
                        ApellidoPaterno : req.body.tfApellidoPaterno,
                        ApellidoMaterno : req.body.tfApellidoMaterno,
                        Ddi:  parseInt(req.body.tfDdi, 10),
                        Dwi:  parseInt(req.body.tfDwi, 10),
                        Ecbd: parseInt(req.body.tfEcbd, 10)
   };
   req.getConnection((err,conn)=>{
    if(err)
        throw err;
    else 
    {
        conn.query("INSERT INTO alumnos SET ?", [regAlumno], (error, resultado) => {
            if(error)
            res.json(error)
            else
            res.redirect("/alumnos", {usuario: req.session.usuario})
        }
        )
    }
})};

controlador.editar = (req, res) => {
    const matri = req.params.Matri;

    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM alumnos WHERE Matricula = ?", [matri], (error, fila)=>{
            res.render("alumnos_editar.ejs", {reg:fila, usuario: req.session.usuario});
        })
    });
};

controlador.actualizar = (req, res) => {
    const matri = req.params.Matri;

        const regAlumno = {
                                    Matricula : req.body.tfMatricula,
                                    Nombre : req.body.tfNombre,
                                    ApellidoPaterno : req.body.tfApellidoPaterno,
                                    ApellidoMaterno : req.body.tfApellidoMaterno,
                                    Ddi:  parseInt(req.body.tfDdi, 10),
                                    Dwi:  parseInt(req.body.tfDwi, 10),
                                    Ecbd: parseInt(req.body.tfEcbd, 10)
                            };
req.getConnection((err, conn)=>{
        conn.query("UPDATE alumnos SET ? WHERE Matricula = ?", [regAlumno,matri], (error, resultado)=>{
           if(error)
           re.json(error)
           else
           res.redirect("/alumnos", {usuario: req.session.usuario})
        })
    });
};

controlador.eliminar = (req, res) => {
    const matri = req.params.Matri;

    req.getConnection((err, conn)=>{
        conn.query("DELETE FROM alumnos WHERE Matricula = ?", [matri], (error, resultado)=>{
           if(error)
           re.json(error)
           else
           res.redirect("/alumnos", {usuario: req.session.usuario})
        })
    });
};

module.exports = controlador;