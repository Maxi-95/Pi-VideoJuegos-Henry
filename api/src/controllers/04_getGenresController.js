const { Genres } = require('../db.js')
const axios = require('axios')
//const { YOUR_API_KEY } = process.env;

const getByGenres = async() =>{
    try {
        const getTipos = await axios(`https://api.rawg.io/api/genres?key=482ce32128f34992ba2f0adbe0a84c82`)
        const infoTipos = getTipos.data.results
        
        //return infoTipos
        const arrayName = await infoTipos.map((t) => {  // guardamos en una variable el mapeo de aquellos valores de los nombres de generos
            return { nombre: t.name }
            });
        
        //console.log(arrayName.length);
        
        await Genres.bulkCreate(arrayName)  // creamos una lista de todos los generos con el metodo bulkCreate() donde por parametro, al pasarle un array, creara automaticamente con cada elemento del array un objeto en el modelo
        
        const dataTipos = await Genres.findAll()  
        
        console.log(dataTipos.length);

    } catch (error) {
        return error;
    }
}

module.exports = {
    getByGenres
};