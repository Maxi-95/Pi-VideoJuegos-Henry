const { Router } = require("express");
const { todosJuegos } = require("../controllers/00_juegosController.js");
const router = Router();


router.get("/todo", async (req, res) => {
    try {

        const todosLosJuegos = await todosJuegos()

        res.status(200).json(todosLosJuegos);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
    
});



module.exports = router;