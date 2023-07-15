import s from "./Card.module.css";
import { Link } from "react-router-dom";

function Card({ pokes }) {
  const { nombre, imagen, rating, genres, id } = pokes;
  return (
    <div className={s.carta}>
      <Link
        to={`/home/${id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        {/* <div style={{background:{imagen}}} className={s.fondoImagen}> */}
        <img src={imagen} alt={"imagen"} className={s.imagen} />
        {/* </div> */}
        <div className={s.nombre}>
          <h3>{nombre}</h3>
        </div>

        <div className={s.tipo}>
          <p>Rating:</p>
          <h2>{rating}</h2>
        </div>


        <div className={s.tipo}>
          <p>Generos:</p>
        </div>

        <div className={s.caja}>
          {genres &&
            genres.map((t, index) => {
              return (
                <div className={s.tipoH4}>
                  <span key={index}>{t.nombre}</span>
                </div>
              );
            })}
        </div>
      </Link>
    </div>
  );
}

export default Card;






// import React, { useState } from "react";
// import s from "./SearchBar.module.css";

// export default function SearchBar() {
//   const [producto, setProducto] = useState("");

//   function handleChange(e) {
//     setProducto(e.target.value);
//   }

//   function handleClick(e) {}

//   return (
//     <div className={s.buscador}>
//       <input
//         onChange={handleChange}
//         value={producto}
//         className={s.barra}
//       ></input>
//       <button onClick={handleClick} className={s.boton}>
//         Buscar
//       </button>
//     </div>
//   );
// }
