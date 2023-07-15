import axios from 'axios';

import {
    GET_GENEROS,
    GET_VIDEOJUEGOS,
    FILTER_GENEROS,
    ORDER_RATING,
    ORDER_NOMBRE,
    GET_BY_NOMBRE,
    GET_BY_DETALLE,
    GET_CREADOS,
    CREATE_JUEGO,
    GET_PLATAFORM
    
} from "./constantes.jsx";

export const getVideojuegos = () => {
    return async function(dispatch){
                                           
        const result = await axios("http://localhost:3001/juegos/todo"); 
        const info = result.data;
        console.log(info);
        return dispatch({ type:GET_VIDEOJUEGOS, payload:info })
    }
}

export const getCreados = () => {
    return async function(dispatch){
                                           
        const result = await axios("http://localhost:3001/juegos/creados"); 
        const info = result.data;
        console.log(info);
        return dispatch({ type:GET_CREADOS, payload:info })
    }
}

export const getById = (id) => {
    return async function(dispatch){
                                           
        const result = await axios(`http://localhost:3001/juego/${id}`); 
        const info = result.data;
        console.log(info);
        
        return dispatch({ type:GET_BY_DETALLE, payload:info })
    }
}

export const getGeneros = () => {
    return async function(dispatch){
                                           
        const result = await axios("http://localhost:3001/genres/generos"); 
        const info = result.data;
        //console.log(result);
        return dispatch({ type:GET_GENEROS, payload:info })
    }
}

export const getPlataformas = () => {
    return async function(dispatch){
                                           
        const result = await axios("http://localhost:3001/plataforma/plataformas"); 
        const info = result.data;
        console.log(info);
        return dispatch({ type:GET_PLATAFORM, payload:info })
    }
}

export const createVideojuegos = (input) => {
    return async function () {
        try {
            const result = await axios.post("http://localhost:3001/crear/agregar", input); 
            const info = result.data;
            
            alert(info)
            //return dispatch({ type: CREATE_JUEGO, payload: info })
            
        } catch (error) {
            alert(error.message)
        }

    }
} 

export function getByNombre(name) {
    return async function (dispatch) {
      try {
        let response = await axios(`http://localhost:3001/juego?nombre=${name}`);
        
        if (response.data.length === 0) {
          alert('Juego No encontrado');
          dispatch(getVideojuegos());
        } else {
          return dispatch({
            type: GET_BY_NOMBRE,
            payload: response.data,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
}
  
export const ordenByNombre = (payload) => {
       
    return { type: ORDER_NOMBRE, payload }
}
export const ordenByRating = (payload) => {
       
    return { type: ORDER_RATING, payload }
}
export const filtrarGeneros = (filtrado) => {
    console.log(filtrado)
    
    return { type: FILTER_GENEROS, payload : filtrado }  
}



