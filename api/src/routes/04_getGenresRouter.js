const { Router } = require("express");
//const { getByGenres } = require("../controllers/04_getGenresController");
const { Genres } = require('../db.js')
const router = Router();


router.get("/generos", async (req, res) => {
    try {

        const dataTipos = await Genres.findAll()
        //console.log(dataTipos.length);

        res.status(200).json(dataTipos);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
    
});



module.exports = router;