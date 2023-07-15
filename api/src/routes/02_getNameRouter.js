const { Router } = require("express");
const { getByNombre } = require("../controllers/02_getNameController");
const { todosJuegos } = require("../controllers/00_juegosController");

const router = Router();


router.get("/", async (req, res) => {
    const { nombre } = req.query;
    try {
        if(nombre === null){
            const todosLosJuegos = await todosJuegos()
            
            res.status(200).json(todosLosJuegos);
        }
        const juegoNombre = await getByNombre(nombre)
        
        res.status(200).json(juegoNombre);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
    
});



module.exports = router;