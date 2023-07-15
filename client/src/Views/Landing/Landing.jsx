import s from "./Landing.module.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className={s.fondo}>
      <div className={s.inicio}>
        <h1>Maximiliano Fonseca</h1>
        <h2>Poyecto Individual de soyHenry</h2>
        <h3>( Video Juegos )</h3>

        <button className={s.boton}>
          <Link to={"/home"} style={{ textDecoration: "none", color: "white" }}>
            Start
          </Link>
        </button>
        <button className={s.boton}>
          <Link
            to={"/landin2"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Landing
          </Link>
        </button>
        <p>Presione Start para ir a Inicio</p>
      </div>
      <div className={s.cubo}>
        {/* <img className={s.juegos2}src="https://i.3djuegos.com/juegos/17544/god_of_war_ragnarok/fotos/ficha/god_of_war_ragnarok-5732812.jpg" alt="" /> */}
        <div className={s.juegos2}></div>
        <div className={s.juegos1}></div>
        <div className={s.juegos3}></div>
      </div>
    </div>
  );
}

export default Landing;
