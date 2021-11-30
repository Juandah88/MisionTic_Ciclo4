import './css/Navbar.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './components/Inicio';
import Mascotas from './components/Mascotas';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import Adoptar from './components/Adoptar';
import Login from './components/Login';
import {DetallesMascotas} from './components/DetallesMascotas'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      logged: true,
      username: "",
    }
  }

  renderLogin(){
    return (
      // <Login />
      <Router>
      <div>
        <header>
          <nav className="navbar navbar-expand-lg   nav__color ">
            <div className="container-fluid">
              <div className="size_logo">
                 <Link className="navbar-brandv" to="/">
                  <img className="navbar-brandv  img_size ml-5" src="/img/logo.png" alt="logo" />
                </Link>
              </div>
              <button className="navbar-toggler menuhamburguesa " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                
                <span ><FontAwesomeIcon className="logopata bg-white" icon={faBars}/></span>
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
                  <li className="nav-item">
                    <Link className="navbar-brand" to="/Login">Login</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
         
        </header>
      </div>
      <Routes>
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Adoptar" element={<Adoptar />} />
        <Route path="/mascota:id" element={<DetallesMascotas/>}></Route>
       

      </Routes>
    </Router>
    );
  }

  renderApp(){
    return(
      <Router>
      <div>
        <header>
          <nav className="navbar navbar-expand-md    ">
            <div className="container-fluid">
              <div className="size_logo">
                 <Link className="navbar-brandv" to="/">
                  <img className="navbar-brandv  img_size ml-5" src="/img/logo.png" alt="logo" />
                </Link>
              </div>
              <button className="navbar-toggler menuhamburguesa " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                
                <span className="navbar-toggler-icon"></span>
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
                  <li className="nav-item">
                    <Link className="navbar-brand" to="/Login">Login</Link>
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
        <Route path="/mascota:id" element={<DetallesMascotas/>}>

      </Route>
       

      </Routes>
    </Router>
    );
  }

  render(){
    if (this.state.logged) {
      return this.renderApp();
    }else{
      return this.renderLogin();
    }

  }
}
