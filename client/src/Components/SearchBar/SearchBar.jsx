import s from './SearchBar.module.css'
import {  useState } from "react";
import { useDispatch } from "react-redux";
import { getByNombre } from "../../Redux/Actions/actions";


function SearchBar() {
  //const [name, setName] = useState("");
  const dispatch = useDispatch();
  const [ searchString, setSearchString ] = useState("");
  
  function handleSumbit(e){
     e.preventDefault();
     dispatch(getByNombre(searchString))
  }

  function handleChange(e){
     setSearchString(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSumbit}>
        <div className={s.buscador}>
          <input
            type="text"
            className={s.input}
            placeholder='Buscar...'
            name="input-text"
            value={searchString}
            onChange={handleChange}
            />
          <button className={s.boton} type='submit'><h1>Buscar</h1></button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;