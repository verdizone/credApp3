import Tarjeta from './Tarjeta'
import './Tarjetas.css'

const Tarjetas = () => {
  return (
    <>
    <div className='container'>
      <h3 className='header'>Aquí van las tarjetas</h3>
      
    </div>
    <div className='tarjeta'>
       <Tarjeta />
       <Tarjeta />
       <Tarjeta />
       <Tarjeta />
       <Tarjeta />
       <Tarjeta />
       <Tarjeta />
    </div>
    </>
  )
}

export default Tarjetas