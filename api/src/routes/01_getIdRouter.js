const { Router } = require("express");
const { getById } = require("../controllers/01_getIdController.js");
const router = Router();


router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const juegoPorBy = await getById(id)

        res.status(200).json(juegoPorBy);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
    
});



module.exports = router;