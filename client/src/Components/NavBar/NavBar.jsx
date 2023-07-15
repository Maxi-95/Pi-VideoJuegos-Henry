//import Home from "../../Views/Home/Home";
import SearchBar from "../SearchBar/SearchBar";
import s from "./Navbar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
    return (
      <div className={s.barraDeNavegador}>
      <div>
        <SearchBar/>
      </div>
      
      <div className={s.caja_botones}>
        <div className={s.botonInicio}>
          
            <Link to={"/home"} style={{ textDecoration: 'none'}} ><h1>Inicio</h1></Link>
          
        </div>
        <div className={s.linea}></div>
        <div className={s.botonForm}>
          
            <Link to={"/form"} style={{ textDecoration: 'none'}}  ><h1>Crear VideoJuego</h1></Link>
          
        </div>

      </div>
      
      </div>
    );
  }
  
  export default NavBar;