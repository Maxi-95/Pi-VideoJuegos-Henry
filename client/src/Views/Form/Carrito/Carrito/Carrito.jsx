import React, { useState } from "react";
import Total from "../Total/Total";
import s from "./Carrito.module.css";
import Mensaje from "../Mensaje/Mensaje";
import Seleccion from "../Seleccion/Seleccion";

const Carrito = () => {
  const [productos, setProductos] = useState([
    {
      id: 1,
      name: "Producto Aleatorio",
      imagen:
        "https://www.computron.com.ec/wp-content/uploads/2023/05/SAM-A135ML-BL-1.jpg",
      cantidad: 1,
      precio: 50,
    },
    {
      id: 2,
      name: "Producto Aleatorio",
      imagen:
        "https://www.computron.com.ec/wp-content/uploads/2023/05/SAM-A135ML-BL-1.jpg",
      cantidad: 1,
      precio: 50,
    },
    {
      id: 3,
      name: "Producto Aleatorio",
      imagen:
        "https://www.computron.com.ec/wp-content/uploads/2023/05/SAM-A135ML-BL-1.jpg",
      cantidad: 1,
      precio: 50,
    },
  ]);

  const updateQuantity = (id, quantity) => {
    const updatedProducts = productos.map((producto) => {
      if (producto.id === id) {
        return { ...producto, cantidad: quantity };
      }
      return producto;
    });
    setProductos(updatedProducts);
  };

  return (
    <div>
      <div className={s.fondo}>
        <div className={s.caja}>
          <div className={s.fondo2}>
            <div className={s.titulo}>
              <h1>Carrito</h1>
              <p>Precio</p>
            </div>

            {productos.length === 0 ? (
              <Mensaje></Mensaje>
            ) : (
              productos?.map((producto) => (
                <Seleccion
                  key={producto.id}
                  pokes={producto}
                  updateQuantity={updateQuantity}
                />
              ))
            )}
          </div>
          <Total productos={productos} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Carrito;
