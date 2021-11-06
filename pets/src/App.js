import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './components/Inicio';
import Admin from './components/Admin';
import Contacto from './components/Contacto';

function App() 
{
  return (
    <Router>
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
              <Link className="navbar-brand" to="/">
                <img className="navbar-brand  img_size" src={process.env.PUBLIC_URL + '/img/logo.png'} alt="logo" />
              </Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link className="navbar-brand" to="/admin">Admin</Link>
                  </li>
                  <li class="nav-item">
                    <Link className="navbar-brand" to="/Contacto">Contacto</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

        </header>
      </div>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </Router>

  );


}

export default App;
