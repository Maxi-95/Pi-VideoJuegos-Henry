import {
    GET_GENEROS,
    FILTER_GENEROS,
    GET_VIDEOJUEGOS,
    ORDER_RATING,
    ORDER_NOMBRE,
    GET_BY_NOMBRE,
    GET_BY_DETALLE,
    GET_CREADOS,
    CREATE_JUEGO,
    GET_PLATAFORM
} from './Actions/constantes.jsx'

const initialState = {
    state : [],
    videojuegos: [],
    generos: [],
    plataformas:[],
    form: [],
    detail:{}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_VIDEOJUEGOS:
            return { ...state, videojuegos: action.payload, state: action.payload };

        case GET_GENEROS:
            return { ...state, generos: action.payload };
        
        case GET_PLATAFORM:
            return { ...state, plataformas: action.payload };

        case GET_BY_NOMBRE:
                  return {
                    ...state,
                    videojuegos: action.payload
                  };
              
        case GET_CREADOS:
            return { ...state, videojuegos: action.payload };

        case GET_BY_DETALLE:
            return { ...state, detail: action.payload };
        
        case CREATE_JUEGO:
            return { ...state, form: action.payload };

        case ORDER_NOMBRE:
            const orderNombres = action.payload === 'A-Z' ?
                state.videojuegos.sort(function (a, b) {
                    if (a.nombre > b.nombre) {
                        return 1;
                    }
                    if (b.nombre > a.nombre) {
                        return -1
                    }
                    return 0;
                }) :
                state.videojuegos.sort(function (a, b) {
                    if (a.nombre > b.nombre) {
                        return -1;
                    }
                    if (b.nombre > a.nombre) {
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                videojuegos: orderNombres
            }

        case ORDER_RATING:
            const orderRating = action.payload === 'Min' ?
                    state.videojuegos.sort(function (a, b) {
                        if (a.rating > b.rating) {
                            return 1;
                        }
                        if (b.rating > a.rating) {
                            return -1
                        }
                        return 0;
                    }) :
                    state.videojuegos.sort(function (a, b) {
                        if (a.rating > b.rating) {
                            return -1;
                        }
                        if (b.rating > a.rating) {
                            return 1;
                        }
                        return 0;
                    })
                return {
                    ...state,
                    videojuegos: orderRating
            }

        case FILTER_GENEROS:
            const allJuegos = state.state
            const juegosFiltrados = action.payload === "All" ? allJuegos : allJuegos.filter(objeto => {
                return objeto.genres.some(genre => genre.nombre === action.payload);
              });
            
            return {
                ...state,
                videojuegos: juegosFiltrados
            }

        default:
            return {...state}
    }
}

export default rootReducer;