import './css/Navbar.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './components/Inicio';
import Mascotas from './components/Mascotas';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import Adoptar from './components/Adoptar';
import Login from './components/Login';
import {DetallesMascotas} from './components/DetallesMascotas'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';



function App() {


  return (



    <Router>
      <div>
        <header>
          <nav className="navbar navbar-expand-md   nav__color ">
            <div className="container-fluid">
              <div className="size_logo">
                 <Link className="navbar-brandv" to="/">
                  <img className="navbar-brandv  img_size ml-5" src="/img/logo.png" alt="logo" />
                </Link>
              </div>
              <button className="navbar-toggler menuhamburguesa " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                
                <span className="navbar-toggler-icon"><span><FontAwesomeIcon className="log" icon={faBars}/></span></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav me-auto mb-8 mb-lg-0 menu">
                  <li  className="nav-item">
                    <Link className="navbar-brand" to="/Nosotros">Nosotros</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="navbar-brand" to="/admin">Agragar Mascota</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="navbar-brand" to="/Contacto">Contacto</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="navbar-brand nav-links-btn" to="/Adoptar">Adoptar</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
         
        </header>
      </div>
      <Routes>
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/admin" element={<Mascotas />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Adoptar" element={<Adoptar />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/mascota:id" element={<DetallesMascotas/>}></Route>
       

      </Routes>
    </Router>);
}

export default App;