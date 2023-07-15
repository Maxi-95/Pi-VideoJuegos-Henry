//import './App.css';
import { useLocation } from "react-router-dom";
import Detail from "./Views/Detail/Detail.jsx";
import Form from "./Views/Form/Form.jsx";
import Home from "./Views/Home/Home.jsx";
import { Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Landing from "./Views/Landing/Landing";
import Landin2 from "./Views/Landin2.jsx";

function App() {
  const location = useLocation();
  return (
    <div>
      <Route exact path="/home" component={Home}></Route>
      {location.pathname !== "/" && <NavBar />}
      <Route exact path={"/"} component={Landing} />
      <Route path="/home/:id" component={Detail}></Route>
      <Route path="/form" component={Form}></Route>
      <Route path="/landin2" component={Landin2}></Route>
    </div>
  );
}

export default App;
