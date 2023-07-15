const { Router } = require("express");
const { getPlatforms } = require("../controllers/05_plataformaController.js");
const router = Router();



router.get("/plataformas", async (req, res) => {
    try {

        const lasPlataformas = await getPlatforms()

        res.status(200).json(lasPlataformas);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
    
});



module.exports = router;