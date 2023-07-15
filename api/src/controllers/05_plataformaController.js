const axios = require("axios");
const { Plataforma } = require('../db.js')
//const { YOUR_API_KEY } = process.env;


const getPlatforms = async (req, res) => {
    try {
        const platformsApi = await axios.get(`https://api.rawg.io/api/platforms?key=482ce32128f34992ba2f0adbe0a84c82`);
        const platforms = platformsApi.data.results;
        platforms.forEach(async (p) => {       // el resultado de retornar las plataformas de la api, mapeamos, y cada elemento lo usamos para crear un objeto en el modelo con el metodo findOrCreate()
            await Plataforma.findOrCreate({
                where: {
                    nombre: p.name,
                }
            })
        });

        const platformsDb = await Plataforma.findAll();  // retornamos toda la informacion del modelo Plataforma

       return platformsDb;
        
    } catch (error) {
        return error;
    }
};

module.exports = {
    getPlatforms
};