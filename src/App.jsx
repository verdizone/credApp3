import { useState } from "react";
import FormAlumno from "./components/FormAlumno";
import Tarjetas from "./components/Tarjetas";
import './App.css'

const App = () => {
    const [alumnos, setAlumnos] = useState([])
  return (
    <>
      <div className="container">
        <div className="iz">
          <FormAlumno 
            alumnos={alumnos}
            setAlumnos={setAlumnos}
          />
        </div>
        <div className="de">
          <Tarjetas 
            alumnos={alumnos}
          />
        </div>
      </div>
    </>
  );
};

export default App;
