import './css/App.css';
import './css/Navbar.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './components/Inicio';
import Admin from './components/Admin';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import Adoptar from './components/Adoptar';
import Login from './components/Login';



function App() {


  return (



    <Router>
      <div>
        <header>
       
          <nav className="navbar navbar-expand-lg navbar-dark nav__color">
            <div className="container-fluid">
              <div className="size_logo">
                <Link className="navbar-brandv" to="/">
                  <img className="navbar-brandv  img_size ml-5" src="assets/img/logo.png" alt="logo" />
                </Link>
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="menu-nav">
                  <li className="nav-item">
                    <Link className="navbar-brand" to="/Nosotros">Nosotros</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="navbar-brand" to="/admin">Admin</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="navbar-brand" to="/Contacto">Contacto</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="navbar-brand" to="/Adoptar">Adoptar</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="navbar-brand nav-links-btn" to="/Login">Registrate</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav> 
          

        </header>
      </div>
      <Routes>
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Adoptar" element={<Adoptar />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>

  );


}

export default App;
