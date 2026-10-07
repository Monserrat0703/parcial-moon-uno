import './App.css';
import AlumnosView from './views/AlumnosView';
import { obtenerAlumnos, obtenerTarjetas } from './controllers/alumnosController';

function App() {
  return (
    <AlumnosView
      alumnos={obtenerAlumnos()}
      tarjetas={obtenerTarjetas()}
    />
  );
}

export default App;