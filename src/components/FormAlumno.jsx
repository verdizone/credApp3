import React from 'react'
import './FormAlumno.css'

const FormAlumno = () => {
  return (
    <div>
        <form className='formulario'>
        
    <h3 className='header'>Ingresa los datos del Alumno</h3> 
          <hr />
            <div>
                <label htmlFor="nombre">Nombre del Alumno</label>
                <br />
                <input id="nombre" type="text" placeholder='Ej. Juan Pérez' />
            </div>
            <br />
            <div>
                <label htmlFor="matricula">Matrícula del Alumno</label>
                <br />
                <input id="matricula" type="number" placeholder='1058' />
            </div>
            <br />
            

            <div>
                      
                <label htmlFor="fechaNac">Fecha de Nacimiento</label>
                <br />
                <input id="fechaNac" type="date"/>
            </div>
            <br />

            <div>
                 <label htmlFor="colegio">Colegio</label>  
                 <br /> 
                   <select name="colegio" id="colegio">
                    <option value="" >---Elegir---</option>
                    <option value="Albatros">Albatros</option>
                    <option value="Tecnoalbatros">Tecnoalbatros</option>
                   </select>
            </div>
            <br />

            <div>
                <label htmlFor="graGru">Grado y Grupo</label>
                <br />
                <select name="graGru" id="graGru">
                    <option value="" >---Elegir---</option>
                    <option value="" disabled>---Preescolar---</option>
                    <option value="K1A">K1A</option>
                    <option value="K1B">K1B</option>
                    <option value="K1C">K1C</option>
                    <option value="K2A">K2A</option>
                    <option value="K2B">K2B</option>
                    <option value="K2C">K2C</option>
                    <option value="K3A">K3A</option>
                    <option value="K3B">K3B</option>
                    <option value="K3C">K3C</option>
                    <option value="" disabled>---Primaria Baja---</option>
                    <option value="P1A">P1A</option>
                    <option value="P1B">P1B</option>
                    <option value="P1C">P1C</option>
                    <option value="P2A">P2A</option>
                    <option value="P2B">P2B</option>
                    <option value="P2C">P2C</option>
                    <option value="P3A">P3A</option>
                    <option value="P3B">P3B</option>
                    <option value="P3C">P3C</option>
                    <option value="" disabled>---Primaria Alta---</option>
                    <option value="P4A">P4A</option>
                    <option value="P4B">P4B</option>
                    <option value="P4C">P4C</option>
                    <option value="P5A">P5A</option>
                    <option value="P5B">P5B</option>
                    <option value="P5C">P5C</option>
                    <option value="P6A">P6A</option>
                    <option value="P6B">P6B</option>
                    <option value="P6C">P6C</option>
                    <option value="" disabled>---Secundaria---</option>
                    <option value="S1A">S1A</option>
                    <option value="S1B">S1B</option>
                    <option value="S1C">S1C</option>
                    <option value="S2A">S2A</option>
                    <option value="S2B">S2B</option>
                    <option value="S2C">S2C</option>
                    <option value="S3A">S3A</option>
                    <option value="S3B">S3B</option>
                    <option value="S3C">S3C</option>
                    
                </select>
            </div>
            <br />

            <div>
                <label htmlFor="foto">Fotografía</label>
                <br />
                <input className="archivo" id="foto" type="file"/>
            </div>
            
            <br />
            
            <div>
                <input className='boton' type="button" value="Ingresar Alumno" />
            </div>
        </form>

    </div>
  )
}

export default FormAlumno