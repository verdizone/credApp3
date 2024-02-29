import { useEffect } from 'react'
import Tarjeta from './Tarjeta'
import './Tarjetas.css'

const Tarjetas = ({alumnos, setAlumno, eliminarAlumno}) => {
  
  useEffect(()=>{
    if(alumnos.length > 0){
      console.log('Nuevo Alumno.');
    }
  },[alumnos])

  return (
    <>
    <div className='container'>
      {
        alumnos && alumnos.length 
        ? <h3 className='header'>Credenciales</h3> 
        : <h3 className='header'>Ingresar Alumnos</h3> 
      }
      
    </div>
    <div className='tarjeta'>
        {
          alumnos.map(alumno=>(
           <Tarjeta
              alumno={alumno}
              key={alumno.id}
              setAlumno={setAlumno}
              eliminarAlumno={eliminarAlumno}
              
           />
          ))
        }
    </div>
    </>
  )
}

export default Tarjetas