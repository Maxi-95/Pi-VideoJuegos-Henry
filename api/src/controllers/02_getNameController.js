const { Videogame, Genres } = require('../db.js');
//const { Sequelize } = require('sequelize');
// const { getAllRecipes, getApiInfo } = require('./01_getController.js')
const { Op } = require('sequelize')
const axios = require("axios");


const getByNombre = async (nombre) => {
  //console.log(nombre)
  try {
    const resultDB = await Videogame.findAll({
      where:{
          nombre:{[Op.iLike]: "%" + nombre + "%"}, // busca registros en la base de datos donde el nombre contenga la cadena especificada en la variable nombre sin importar si está en mayúsculas o minúsculas. 
        },
        include:{
          model: Genres,                     // acá retornamos tambien los generos donde muestren su id y su nombre
          attributes: ['id', 'nombre']  
        }
      })
      
    
      const nameApi = await axios(`https://api.rawg.io/api/games?search=${nombre}&key=482ce32128f34992ba2f0adbe0a84c82`)
      
      const resultApi = await nameApi.data.results.map((e)=>{
        return {
           id: e.id,
           nombre: e.name,
           imagen: e.background_image,
           rating: e.rating,
           genres: e.genres.map(el => {
              return {
                 nombre:el.name
        }}),
        }
      });

      const results = [...resultDB, ...resultApi];  // concatenamos los resultados de buscar por nombre en la BD y en la API para mostrar en pantalla

      return results;
    
  } catch (error) {
    return "error :" + " " + error.message;
  }
}


module.exports = {
  getByNombre,
};