const { Router } = require("express");
const router = Router();
const { crearJuego } = require("../controllers/03_postControlle.js");


router.post("/agregar", async (req, res) => {

    const { nombre, imagen, descripcion, plataformas, fecha_de_lanzamiento, rating, generos } = req.body;

    try {
        const juegoCreado = await crearJuego(nombre, imagen, descripcion, plataformas, fecha_de_lanzamiento, rating, generos)
        if(juegoCreado === "El Juego ya existe"){
            res.status(200).send("El Juego ya existe");
        }else{
            res.status(200).send("juego Creado");
            
        }
    } catch (error) {
        res.status(404).send(error.message);
    }
    
});



module.exports = router;