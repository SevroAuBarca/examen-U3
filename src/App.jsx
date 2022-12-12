import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Alumno from "./components/Alumno";
import Carrera from "./components/Carrera";
import Final from "./components/Final";

/*
  componente1.-crear componente llamado alumno con 4 componentes
  componente2.-
  componente3.-
*/

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Examen U3</h1>
      <Alumno />
      <Carrera />
      <Final />
    </div>
  );
}

export default App;
