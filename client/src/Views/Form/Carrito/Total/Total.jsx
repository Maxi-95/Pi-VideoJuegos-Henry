import React, { useEffect, useState } from "react";
import s from "./Total.module.css";

export default function Total({ productos }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calcular el valor total sumando los precios de los productos
    const calculateTotal = () => {
      let sum = 0;
      for (const producto of productos) {
        sum += producto.precio * producto.cantidad;
      }
      setTotal(sum);
    };

    calculateTotal();
  }, [productos]);

  return (
    <div className={s.fondo}>
      <div className={s.titulo}>Sumatoria</div>
      <div className={s.total}>
        <h1>Total</h1>
        <p>${total}</p>
      </div>
      <button className={s.button}>
        <span>Comprar</span>
      </button>
    </div>
  );
}
