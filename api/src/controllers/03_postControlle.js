const { Videogame, Genres, Plataforma} = require("../db.js");

const crearJuego = async ( nombre, imagen, descripcion, plataformas, fecha_de_lanzamiento, rating, generos ) => { // nos llega informacion sobre el juego a crear por body
    //console.log(nombre, imagen, descripcion, plataformas, fecha_de_lanzamiento, rating, generos);
    try {
        const jeugoExistente = await Videogame.findOne({  // primero verificamos que el juego ya exista
            where: {
                nombre: nombre,
            }
        });
        if(jeugoExistente){
            return "El Juego ya existe"
        }
        
        //console.log(nombre, imagen, resumen, nivel, paso, tipo)

            let gameCreated = await Videogame.create({      // usamos "create" para crear el juego en bace a la informacion traida por parametro
                nombre: nombre,
                imagen: imagen,
                descripcion: descripcion,
                fecha_de_lanzamiento: fecha_de_lanzamiento,
                rating: rating
            })

           
                let result1 = await Genres.findAll({   // guardamos en una variable todos aquellos generos que coincidan con el array de generos 
                    where: { nombre: generos }
                })
                //console.log(result1);
                
                await gameCreated.addGenres(result1)  // con "addGenres" añadimos lavariable en el objeto juego creado
                //console.log(gameCreated);
                let result2 = await Plataforma.findAll({    // guardamos en una variable todas aquellas plataformas que coincidan con el array de plataformas 
                    where: { nombre: plataformas }
                })
                //console.log(result2);
                
                await gameCreated.addPlataforma(result2)    // con "addPlataforma" añadimos lavariable en el objeto juego creado
                //console.log(gameCreated);
                
           
           
            // let resultGame = await Videogame.findOne({  
            //     where:{ 
            //         nombre: nombre
            //      },
                
            //     include: [Plataforma, Genres]
            //     });

                
            //     return resultGame;
            
    } catch (error) {
        return error;
    }
}

module.exports = {
    crearJuego
};