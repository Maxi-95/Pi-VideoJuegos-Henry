import Card from "../Card/Card";
import s from "./CardsContainer.module.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  filtrarGeneros,
  getCreados,
  getGeneros,
  ordenByRating,
  ordenByNombre,
} from "../../Redux/Actions/actions";
import { useState } from "react";
import Pagination from "../Pagination/Pagination";
//import NavBar from "../NavBar/NavBar.jsx";

function CardContainer() {
  const pokemons = useSelector((state) => state.videojuegos);
  const losGeneros = useSelector((state) => state.generos);
  const [estadoTipos, setEstadoTipos] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(15);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = pokemons.slice(firstPostIndex, lastPostIndex);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGeneros());
  }, [dispatch]);

  function handleOrden(e) {
    e.preventDefault();
    dispatch(ordenByNombre(e.target.value));
    setEstadoTipos(e.target.value);
  }
  function handleAtaque(e) {
    e.preventDefault();
    dispatch(ordenByRating(e.target.value));
    setEstadoTipos(e.target.value);
  }
  function handleFilterByType(e) {
    dispatch(filtrarGeneros(e.target.value));
  }

  function handleCreados(e) {
    e.preventDefault();
    dispatch(getCreados(e.target.value));
    setEstadoTipos(e.target.value);
  }
  return (
    <div>
      <div className={s.divicion}>
        <div className={s.divicionOscuro}></div>
      </div>
      <div className={s.contenedor_cartas}>
        {currentPosts.length === 0 ? (
          <div className={s.loading}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          currentPosts?.map((pokes) => (
            <Card pokes={pokes} className={s.las_cartas} />
          ))
        )}
        <div className={s.paginado}>
          <Pagination
            totalPost={pokemons.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>

      <div className={s.navegador}></div>

      <div className={s.orden}>
        <p>Ordenar por:</p>
        <select name="Nombre" id="Nombre" onChange={handleOrden}>
          <option value="nombre">Nombre</option>
          <option value="A-Z">Ascendente</option>
          <option value="Z-A">Descendente</option>
        </select>
        <p>Ordenar por:</p>
        <select name="Ataque" id="Ataque" onChange={handleAtaque}>
          <option value="ataque">Rating</option>
          <option value="Min">Ascendente</option>
          <option value="Max">Descendente</option>
        </select>
        <p>Filtrar:</p>

        <select onChange={handleFilterByType}>
          <option value="All">Todos los generos</option>
          {losGeneros?.map((e) => {
            return (
              <option key={e.nombre} value={e.nombre}>
                {e.nombre}
              </option>
            );
          })}
        </select>

        <p>Creados:</p>
        <select name="" id="" onChange={handleCreados}>
          <option value="All" key="All">
            Mostrar
          </option>
          <option value="dataBase" key="dataBase">
            Creados
          </option>
        </select>
      </div>
    </div>
  );
}

export default CardContainer;

// .navbar {
//   height: 150px;
//   margin-bottom: 20px;
// }
// .cajaLogo {
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }
// .logo {
//   height: 40px;
// }
// .busqueda {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 63%;
// }
// .carrito {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgb(241, 241, 241);
//   color: aliceblue;
//   width: 20%;
// }
// .carritoLogo {
//   height: 83px;
//   width: 88px;
// }
// .caja1 {
//   display: flex;
//   justify-content: center;
//   height: 98px;
// }
// .caja1A {
//   display: flex;
//   width: 62%;
//   height: 98px;
// }
// .caja2 {
//   display: flex;
//   justify-content: center;
//   background-color: rgb(71, 71, 71);
//   display: flex;
// }
// .caja2B {
//   display: flex;
//   width: 62%;
//   height: 65px;
// }
// .home {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgb(255, 0, 0);
//   width: 9%;
// }
// .imagenHome {
//   width: 35px;
//   height: 33px;
// }
// .categorias {
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   width: 72%;
//   color: aliceblue;
//   margin-left: 20px;
//   margin-right: 20px;
// }
// .actividades {
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
//   background-color: rgb(0, 0, 0);
//   width: 20.5%;
//   color: aliceblue;
// }
