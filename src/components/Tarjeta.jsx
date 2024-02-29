import { useEffect } from 'react';
import './Tarjeta.css'


const Tarjeta = ({alumno, setAlumno, eliminarAlumno}) => {
  
  useEffect(()=>{
    /* console.log('El componente esta listo!'); */
  },[])
  
  const {nombre, matricula, fechaNac, colegio, graGru, foto, id} = alumno;

  const handleEliminar = () =>{
    /* console.log('Eliminando Alumno', id); */
    const respuesta = confirm("¿Esta seguro que desea eliminar a este alumno?")
    if(respuesta){
      eliminarAlumno(id)
    }
  }

  return (
    <>
      <div className='fondo-aparte'>
        
        <div className='formato-tarjeta'>
          <div className='flex-tarjeta'>
            <div>
              <img src={"../src/assets/img/sidney_cred.jpg"} alt={foto}/>
                <div className='data'>
                  <h3>Nombre: <br />{nombre}</h3>
                  <h4>Grado y grupo: <br />{graGru}</h4>
                  
                  <h4>Fecha de nacimiento: <br />{fechaNac} </h4>
                </div>
            </div>
    

           
        {/*     <p>Id: {id}</p> */}
            <div className='pie-tarjeta'>
              <p>Colegio: {colegio}</p>
              <p>Matrícula: {matricula}</p>
              <p></p>
            </div>
          </div>
            
        </div>

        <div className='botones'>
            <button
              className='editar'
              type='button'
              onClick={ () => setAlumno(alumno) }
            >
              Editar
            </button>
            <button
              className='eliminar'
              type='button'
              /* onClick={()=> eliminarAlumno(id)} */
              onClick={handleEliminar}
            >
              Eliminar
            </button>
  {/*           <button
              type='button'
            >
              Imprimir
            </button> */}
          </div>
      </div>
    </>
  )
}

export default Tarjeta