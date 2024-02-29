import { useEffect, useState } from "react";
import FormAlumno from "./components/FormAlumno";
import Tarjetas from "./components/Tarjetas";
import './App.css'

const App = () => {



    const [alumnos, setAlumnos] = useState([])
    const [alumno, setAlumno] = useState({});
    const eliminarAlumno = (id) => {
      /* console.log('Eliminando Alumno', id); */
      const alumnosActualizados = alumnos.filter(alumno=>(
        alumno.id !== id
      )) 
      setAlumnos(alumnosActualizados);
    }

    
    useEffect(()=>{
      console.log('Cambió alumnos o componente listo');
    }, [alumnos])



    return (
    <>
      <div className="container">
        <div className="iz">
          <FormAlumno 
            alumnos={alumnos}
            setAlumnos={setAlumnos}
            alumno={alumno}
            setAlumno={setAlumno}
          />
        </div>
        <div className="de">
          <Tarjetas 
            alumnos={alumnos}
            setAlumno={setAlumno}
            eliminarAlumno={eliminarAlumno}
            
          />
        </div>
      </div>
    </>
  );
};

export default App;
