import FormAlumno from "./components/FormAlumno";
import Tarjeta from "./components/Tarjetas";
import './App.css'

const App = () => {
  
  return (
    <>
      <div className="container">
        <div className="iz">
          <FormAlumno />
        </div>
        <div className="de">
          <Tarjeta />
        </div>
      </div>
    </>
  );
};

export default App;
