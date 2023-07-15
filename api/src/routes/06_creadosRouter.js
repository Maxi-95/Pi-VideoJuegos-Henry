const { Router } = require("express");
const { getByCreados } = require("../controllers/06_creadosController.js")
const router = Router();



router.get("/creados", async (req, res) => {
    try {

        const lasPlataformas = await getByCreados()

        res.status(200).json(lasPlataformas);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
    
});



module.exports = router;