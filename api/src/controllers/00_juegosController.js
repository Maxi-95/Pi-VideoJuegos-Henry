const { Videogame, Genres } = require("../db");
const axios = require("axios");
const { YOUR_API_KEY } = process.env;

//######### TRAEMOS LOS JUEGOS DE LA API  #########
const ApiJuegos = async () => {
 try {
   let juegos = [];
   for (let i = 1; i < 6; i++) {
   const infoApi = await axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=${i}`)
   const e = infoApi.data.results
      let juego = e.map((i)=>{
         return{
            id: i.id,
            nombre: i.name, 
            imagen: i.background_image,
            rating: i.rating,
            genres: i.genres.map(g => {
               return{
                  nombre: g.name
               }})
         }
          
         })
      
      juegos.push(juego)
   }

   
    console.log(juegos.length);
    return juegos.flat();
 } catch (error) {
    return "error :" + " " + error.message;
 }
}

   //######### TRAEMOS LOS JUEGOS DE LA BASE DE DATOS  #########

const BDJuegos = async () => {
   try {
      const bdJuegos = await Videogame.findAll({
         include: [
            { model: Genres}  // renderizamos tambien los generos generos cuando usamos el metodo findAll() al mostrar los juegos
          ]
     })
     
      return bdJuegos;
   } catch (error) {
      return "error :" + " " + error.message;
   }
}

//######### CONCATENAMOS LOS JUEGOS DE LA API Y DE LA BD Y LOS RETORNAMOS #########
const todosJuegos = async () => {
   try {
      const juegosBD = await BDJuegos();
      const juegosApi = await ApiJuegos();
      const result = [...juegosApi, ...juegosBD] // metodo de concatenacion con print operator
      return result;
   } catch (error) {
      console.log({error: error.message});
      return "error :" + " " + error.message;

   }
}


module.exports = {
   todosJuegos
}
