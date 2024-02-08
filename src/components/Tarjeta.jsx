import './Tarjeta.css'

const Tarjeta = ({alumno}) => {
  const {nombre, matricula, fechaNac, colegio, graGru, foto} = alumno;
  return (
    <>
      <div className='formato-tarjeta'>

        <p>Nombre del alumno: {nombre}</p>
        <p>Matrícula: {matricula}</p>
        <p>Fecha de nacimiento: {fechaNac} </p>
        <p>Colegio: {colegio}</p>
        <p>Grado y grupo: {graGru}</p>
        <p>Fotografía: {foto}</p>
      </div>
    </>
  )
}

export default Tarjeta