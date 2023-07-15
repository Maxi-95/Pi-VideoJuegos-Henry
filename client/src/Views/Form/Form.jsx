import { useEffect, useState } from "react";
import s from "./Form.module.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createVideojuegos,
  getPlataformas,
  getGeneros,
} from "../../Redux/Actions/actions";

const regexImg = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
const regexNum = /^-?\d+(\.\d+)?$/;
const regexFecha = /^\d{2}\/\d{2}\/\d{4}$/;
const regexNombre = /^[a-zA-Z\s]+$/;

function Form() {
  let losGenres = useSelector((state) => state.generos);
  let lasPlataform = useSelector((state) => state.plataformas);
  let resultForm = useSelector((state) => state.form);
  console.log(resultForm);


  //console.log(losGenres);
  //console.log(pokemon)
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getGeneros());
  }, []);
  useEffect(() => {
    dispatch(getPlataformas());
  }, []);

  const [input, setInput] = useState({
    nombre: "",
    imagen: "",
    rating: "",
    fecha_de_lanzamiento: "",
    descripcion: "",
    generos: [],
    plataformas: [],
  });
  const [error, setError] = useState({
    nombre: " ",
    imagen: " ",
    rating: " ",
    fecha_de_lanzamiento: " ",
    descripcion: " ",
    generos: " ",
    plataformas: " ",
  });

  const validate = (input) => {
    if (!input.nombre) {
      setError({ ...error, nombre: "debe tener nombre" });
      return;
    } else if (!regexNombre.test(input.nombre)) {
      setError({ ...error, nombre: "no debe tener caracteres especiales" });
      return;
    } else if (!input.imagen) {
      setError({ ...error, imagen: "debe tener imagen" });
      return;
    } else if (!regexImg.test(input.imagen)) {
      setError({ ...error, imagen: "debe ser una URL" });
      return;
    } else if (!input.rating) {
      setError({ ...error, rating: "deben tener un rating" });
      return;
    } else if (!regexNum.test(input.rating)) {
      setError({ ...error, rating: "deben ser un decimal" });
      return;
    } else if (!input.fecha_de_lanzamiento) {
      setError({
        ...error,
        fecha_de_lanzamiento: "debe tener fecha de lanzamiento",
      });
      return;
    } else if (!regexFecha.test(input.fecha_de_lanzamiento)) {
      setError({
        ...error,
        fecha_de_lanzamiento: "debe ser de formato --/--/----",
      });
      return;
    } else if (!input.descripcion) {
      setError({ ...error, descripcion: "debe tener una descripcion" });
      return;
    } else if (input.generos.length === 0) {
      setError({ ...error, generos: "debe ser de varios generos" });
      return;
    } else if (input.plataformas.length === 0) {
      setError({ ...error, plataformas: "deben ser de varias plataformas" });
      return;
    } else {
      setError({
        ...error,
        nombre: null,
        imagen: null,
        rating: null,
        fecha_de_lanzamiento: null,
        descripcion: null,
        generos: null,
        plataformas: null,
      });
    }
  };

  function handleChecked(e) {
    if (e.target.checked) {
      setInput({
        ...input,
        generos: [...input.generos, e.target.value],
      });
      validate({
        ...input,
        generos: [...input.generos, e.target.value],
      });
    }
  }
  function handlePlataforms(e) {
    e.preventDefault();
    setInput({
      ...input,
      plataformas: [...input.plataformas, e.target.value],
    });
    validate({
      ...input,
      plataformas: [...input.plataformas, e.target.value],
    });
  }

  function deleteCountry(e) {
    setInput({
      ...input,
      plataformas: input.plataformas.filter((p) => p != e.target.value),
    });
  }

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    validate({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  console.log(input);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createVideojuegos(input));
    history.push("/home");
  }

  return (
    <div className={s.fondo}>
      <div className={s.formulario}>
        <form action="" onSubmit={handleSubmit} className={s.division}>
          {/* PRIMERA MITAD */}
          <div>
            <label htmlFor="" className={s.labels}>
              Nombre :
            </label>
            <div className={s.enderesar}>
              <input
                type="text"
                name="nombre"
                value={input.value}
                onChange={handleChange}
                className={s.input}
              />

              <h4 className={s.error}>{error.nombre}</h4>
            </div>

            <label htmlFor="" className={s.labels}>
              Imagen :
            </label>
            <div className={s.enderesar}>
              <input
                type="text"
                name="imagen"
                value={input.value}
                onChange={handleChange}
                className={s.input}
              />
              <h4 className={s.error}>{error.imagen}</h4>
            </div>

            <div className={s.ratingFecha}>
              <div>
                <label htmlFor="" className={s.labels}>
                  Rating :
                </label>
                <div className={s.enderesar}>
                  <input
                    type="text"
                    name="rating"
                    value={input.value}
                    onChange={handleChange}
                    className={s.inputRating}
                  />
                  <h4 className={s.error}>{error.rating}</h4>
                </div>
              </div>
              <div className={s.FDL}>
                <label htmlFor="" className={s.labels}>
                  Fecha de lanzamiento (--/--/----) :
                </label>
                <div className={s.enderesar}>
                  <input
                    type="text"
                    name="fecha_de_lanzamiento"
                    value={input.value}
                    onChange={handleChange}
                    className={s.inputFecha}
                  />
                  <h4 className={s.error}>{error.fecha_de_lanzamiento}</h4>
                </div>
              </div>
            </div>

            <label htmlFor="" className={s.labels}>
              Descripcion :
            </label>
            <div className={s.enderesar}>
              <textarea
                type="text"
                name="descripcion"
                value={input.value}
                onChange={handleChange}
                className={s.descripcion}
              />
              <h4 className={s.error}>{error.descripcion}</h4>
            </div>
          </div>
          {/* Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum. */}
          <div className={s.linea}></div>
          {/* SEGUNDA MITAD */}
          <div>
            <p className={s.labels}>Generos :</p>
            <div className={s.tipos}>
              {losGenres.map((t, index) => (
                <label for={t.nombre} className={s.tipoLabel}>
                  <input
                    type="checkbox"
                    name="generos"
                    id={index}
                    value={t.nombre}
                    onChange={(e) => handleChecked(e)}
                  />
                  {t.nombre}
                </label>
              ))}
            </div>
            <div className={s.errorGeneros}>
              <p className={s.error}>{error.generos}</p>

            </div>

            <div className={s.zonaConsolas}>
              <div>
                <p className={s.labels}>Plataformas:</p>
                <select
                  onChange={(e) => handlePlataforms(e)}
                  required
                  className={s.select}
                >
                  <option value="All" hidden>
                    Seleccionar
                  </option>
                  {lasPlataform?.map((e) => {
                    return (
                      <option key={e.id} name="plataformas" value={e.nombre}>
                        {e.nombre}
                      </option>
                    );
                  })}
                </select>
                <div className={s.errorPlat}>
                <p className={s.error}>{error.plataformas}</p>

                </div>
              </div>

              <div className={s.zonaPlataform}>
                {input.plataformas.map((p, index) => {
                  return (
                    <div className={s.cajaEliminar}>
                      <button
                        type="button"
                        value={p}
                        onClick={(e) => deleteCountry(e)}
                        className={s.eliminar}
                      >
                        x
                      </button>
                      <span key={index}>{p}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={s.botonPosition}>
              {error.nombre ||
              error.imagen ||
              error.rating ||
              error.fecha_de_lanzamiento ||
              error.descripcion ||
              error.genres ||
              error.plataformas ? (
                <button type="submit" className={s.botonDisabled} disabled={true}>
                  <h2>Crear Juego</h2>
                </button>
              ) : (
                <button type="submit" className={s.boton}>
                  <h2>Crear Juego</h2>
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
