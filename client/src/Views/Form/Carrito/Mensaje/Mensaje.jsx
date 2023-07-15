import React from "react";
import s from "./Mensaje.module.css";
import { Link } from "react-router-dom";

export default function Mensaje() {
  return (
    <div className={s.mensaje}>
      <h1>Tu carrito está vacío</h1>
      <p>
        ¿No sabés qué comprar? ¡Miles de productos en All Market te esperan!
      </p>
      <Link to={"/"}>
        <button>Explorar Mas</button>
      </Link>
    </div>
  );
}
