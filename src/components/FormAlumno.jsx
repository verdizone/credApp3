import { useState } from 'react'
import './FormAlumno.css'
import Error from './Error';

const FormAlumno = ({setAlumnos, alumnos}) => {

    const [nombre, setNombre] = useState('');
    const [matricula, setMatricula] = useState('');
    const [fechaNac, setFechaNac] = useState('')
    const [colegio, setColegio] = useState('')
    const [graGru, setGraGru] = useState('')
    const [foto, setFoto] = useState('')
    const [error, setError] = useState(false)

    const onNombre = (e) =>{
        setNombre(e.target.value);
       /*  console.log(nombre); */
    }
    const onMatricula = (e) =>{
        setMatricula(parseInt(e.target.value));
        /* console.log(matricula); */
    }
    const onFechaNac = (e) =>{
        setFechaNac(e.target.value);
        /* console.log(fechaNac); */
    }
    const onColegio = (e) =>{
        setColegio(e.target.value);
        /* console.log(colegio); */
    }
    const onGraGru = (e) =>{
        setGraGru(e.target.value);
        /* console.log(graGru); */
    }
    const onFoto = (e) =>{
        setFoto(e.target.value);
        /* console.log(foto); */
    }
    const onSubmit = (e) =>{
        e.preventDefault()
        //Comprobar si tenemos los datos suficiantes para continuar
        if([nombre, matricula, fechaNac, colegio, graGru, foto].includes('')){
            //console.log('No puedes dejar campos vacíos');
            setError(true)
            return
        }
        setError(false)

        const objetoAlumnos = {
            nombre, 
            matricula, 
            fechaNac, 
            colegio, 
            graGru, 
            foto
        }

        /* console.log(objetoAlumnos); */
        setAlumnos([objetoAlumnos, ...alumnos]);
        //TODO Almacenar los datos para luego usarlos
        // Resetear los datos de cada elemento guardado
       /*  setNombre('')
        setMatricula('')
        setFechaNac('')
        setColegio('')
        setGraGru('')
        setFoto('') */
    }
    
  return (
    <div>
        <form 
            className='formulario'
            onSubmit={onSubmit}
        >
    <h3 className='header'>Ingresa los datos del Alumno</h3> 
    {
        error && <Error />
    }  
          <hr />
            <div>
                <label htmlFor="nombre">Nombre del Alumno</label>
                <br />
                <input 
                    id="nombre" 
                    type="text" 
                    placeholder='Ej. Juan Pérez'
                    onChange={onNombre} 
                    value={nombre}
                />
            </div>
            <br />
            <div>
                <label htmlFor="matricula">Matrícula del Alumno</label>
                <br />
                <input 
                    id="matricula" 
                    type="number" 
                    placeholder='1058'
                    onChange={onMatricula}
                    value={matricula}
                />
            </div>
            <br />
            

            <div>
                      
                <label htmlFor="fechaNac">Fecha de Nacimiento</label>
                <br />
                <input 
                    id="fechaNac" 
                    type="date"
                    onChange={onFechaNac} 
                    value={fechaNac}     
                />
            </div>
            <br />

            <div>
                 <label htmlFor="colegio">Colegio</label>  
                 <br /> 
                   <select 
                        name="colegio" 
                        id="colegio"
                        onChange={onColegio} 
                        value={colegio}  
                    >
                    <option value="" >---Elegir---</option>
                    <option value="Albatros">Albatros</option>
                    <option value="Tecnoalbatros">Tecnoalbatros</option>
                   </select>
            </div>
            <br />

            <div>
                <label htmlFor="graGru">Grado y Grupo</label>
                <br />
                <select 
                    name="graGru" 
                    id="graGru"
                    onChange={onGraGru} 
                    value={graGru} 
                >
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
                <input 
                    className="archivo" 
                    id="foto" 
                    type="file"
                    onChange={onFoto}  
                    value={foto}
                />
            </div>
            
            <br />
            
            <div>
                <button className='boton'>
                    Ingresar Alumno
                </button>
            </div>
        </form>

    </div>
  )
}

export default FormAlumno