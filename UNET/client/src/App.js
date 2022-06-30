import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Home from "./components/homepage/home";
import OpenLayers from "./components/Map/openLayers";


function App() {
  return (
    <>
      <Home/>
      <OpenLayers/>
    </>
  );
}

export default App;
