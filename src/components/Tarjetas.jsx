import Tarjeta from './Tarjeta'
import './Tarjetas.css'

const Tarjetas = ({alumnos}) => {

  return (
    <>
    <div className='container'>
      <h3 className='header'>Aquí van las tarjetas</h3>
      
    </div>
    <div className='tarjeta'>
        {
          alumnos.map(alumno=>(
           <Tarjeta
              alumno={alumno}
           />
          ))
        }
    </div>
    </>
  )
}

export default Tarjetas