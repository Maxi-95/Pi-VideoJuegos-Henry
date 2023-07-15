//const axios = require("axios");
const { Videogame, Genres, Plataforma } = require("../db.js")
const axios = require('axios')
//const {Sequelize, where} = require('sequelize');
//const { YOUR_API_KEY } = process.env;


const getById = async (id) => {

  //console.log(typeof(id));
  if(id.includes('-')){  // de esta manera verificamos que el id del juego sea el que creamos en la base de datos
    try {
      let videogameDb = await Videogame.findByPk(id, { include: [Genres, Plataforma] }) 
      return videogameDb;
    } catch (error) {
      return "error :" + " " + error.message;
      
    }
    }
  try {
    
    try {
      const result = await axios.get(`https://api.rawg.io/api/games/${id}?key=482ce32128f34992ba2f0adbe0a84c82`)
      if (result.data.id) {
        let genrestr=[]
        for (i=0;i<result.data.genres.length;i++) {   // recorremos el arreglo de generos del juego de la api y guardamos el valor del nombre en un array
            genrestr.push(result.data.genres[i].name)
        } 
        let platformstr=[] 
        for (i=0;i<result.data.platforms.length;i++) {  // recorremos el arreglo de plataformas del juego de la api y guardamos el valor del nombre en un array
          platformstr.push(result.data.platforms[i].platform.name)
        } 
        const searchapivg = {
          nombre: result.data.name,
          fecha_de_lanzamiento: result.data.released, 
          imagen: result.data.background_image,
          descripcion: result.data.description.replace(/<[^>]+>/g, ''), // reemplasamos siertas caracteristicas de la propiedad descripcion
          rating: result.data.rating,
          genres: genrestr.map((e)=>{  // mapeamos el array de generos y retornamos creando una propiedad nombre con el su valor 
            return{
              nombre:e
            } 
          }),
          plataformas: platformstr.map((e)=>{  // mapeamos el array de plataformas y retornamos creando una propiedad nombre con el su valor 
          return{
              nombre:e
             } 
           }),
        }
        return searchapivg
     }
      // const result = idApi.data

      //return result
    } catch (error) {
      return "error :" + " " + error.message;
      
    }

  } catch (error) {
    return "error :" + " " + error.message;
  }

};

module.exports = {
  getById,
  
};

//       const idApi = await axios.get(`https://api.rawg.io/api/games/${id}?key=482ce32128f34992ba2f0adbe0a84c82`)
//       return idApi.data;