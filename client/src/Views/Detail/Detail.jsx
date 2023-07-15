import s from "./Detail.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../Redux/Actions/actions";


function Detail() {
  const estado = useSelector((state) => state.detail);
  const {
    imagen,
    nombre,
    descripcion,
    fecha_de_lanzamiento,
    rating,
    plataformas,
    genres,
  } = estado;

  
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(getById(id));
  }, []);


  return (
    <div className={s.fondo}>
      <div className={s.pagina}>
        <div className={s.detalles}>
          {imagen === undefined ? (<div className={s.loading}><div></div><div></div><div></div><div></div></div>) :
          <div
            className={s.caja_imagen}
            style={{
              backgroundImage: `url(${imagen})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            >
            <div className={s.nombre}>
              <div>
                <p>
                  <h1>{nombre}</h1>
                </p>
              </div>
            </div>
          </div>}

          <div className={s.ratingFecha}>
            <div className={s.fondo1}>
              <div className={s.rating}>
                <h1>Rating:</h1>
                <p>{rating}</p>
              </div>
              <div className={s.linea}></div>
              <div className={s.fechaDeLanzamiento}>
                <h1>Fecha de lanzamiento:</h1>
                <p>{fecha_de_lanzamiento}</p>
              </div>
            </div>
          </div>

          <div className={s.descripcion}>
            <div className={s.fondo2}>
              <h3 className={s.titulo}>D e s c r i p c i o n</h3>
              <p className={s.descripcion}>{descripcion}</p>
            </div>
          </div>

          <div className={s.plataforma}>
            <div className={s.fondo1}>
              <div className={s.caja1}>
                <div className={s.caja2}>
                  <h3 className={s.titulo}>P l a t a f o r m a</h3>
                </div>
                <div className={s.caja3}>
                  {plataformas?.map((t, index) => {
                    return (
                      <div className={s.cuadros}>
                        
                          <div className={s.logoConsola}></div>
                          
                          <div className={s.caja4}>
                            <span key={index}>{t.nombre}</span>
                          </div>
                        
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
         
          <div className={s.generos}>
            <div className={s.fondo2}>
              <div className={s.tituloGenres}>
                <h1 className={s.titulo}>G e n e r o s</h1>
              </div>
              <div className={s.circulos}>
                {genres?.map((t, index) => {
                  return (
                    <div className={s.genres}>
                      <div className={s.genres2}>
                        <div className={s.genres3}>
                          <span key={index}>{t.nombre}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
