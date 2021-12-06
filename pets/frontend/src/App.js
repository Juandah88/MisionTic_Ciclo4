import './css/Navbar.css'
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './components/Inicio';
import Mascotas from './components/Mascotas';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import Adoptar from './components/Adoptar';
import Login from './components/Login';
import {PageNotFound} from './components/PageNotFound'
import {DetallesMascotas} from './components/DetallesMascotas'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';




import { Fragment } from 'react';
import ScrollButton from './components/ScrollButton';



export default class App extends React.Component {

  
  constructor(props){
    super(props);
    this.state = {
      logged: true,
      username: "",
    };
    this.updateState = this.updateState.bind(this);

  }

  // useEffect(()=>{
  //   const userlogged = localStorage.getItem('LoggedApp')
  //   if (userlogged) {
  //     updateState(userlogged[0],userlogged[1]);
  //   }
  // },[]) 

  async updateState(logged,username){
    
    await this.setState({
      logged: logged,
      username: username,
    });
    const user = this.state;
    localStorage.setItem( 'LoggedApp',JSON.stringify(user));
    console.log(this.state);
  }

  

  renderLogin(){
    return (
      // <Login />
      <Router>
      
      <div>
        <header>
          <nav id="menu" className="navbar navbar-expand-md nav__color ">
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

                </ul>
              </div>
            </div>
          </nav>
         
        </header>
      </div>
      <Routes>
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/admin" element={<Login onTryLogin = {this.updateState} />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Adoptar" element={<Adoptar />} />
        <Route path="/AdoptarMascota/:id" element={<DetallesMascotas/>}/>
   
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="/Login" element={<Login/>}/>
        </Routes>
    </Router>
    );
  }

  renderApp(){
    return(
      <Router>
      <Fragment>
      <div>
     
        <header>
          <nav className="navbar navbar-expand-md sticky-top  nav__color   ">
            <div className="container-fluid">
              <div className="size_logo">
                 <Link className="navbar-brandv" to="/">
                  <img className="navbar-brandv  img_size ml-5" src="/img/logo.png" alt="logo" />
                </Link>
              </div>
              <button className="navbar-toggler menuhamburguesa " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                
                <span><FontAwesomeIcon className="logopata " icon={faBars}/></span>
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
        <Route path="/AdoptarMascota/:id" element={<DetallesMascotas/>}/>
        <Route path="*" exact={true} element={<PageNotFound/>}/>
        <Route path="/Login" element={<Login/>}/>
        

    
       

      </Routes>
      <ScrollButton />
   
      </Fragment>
 
    </Router>
    );
  }

  render(){
    
    const userlogged = localStorage.getItem('LoggedApp')
    if (userlogged) {
      return this.renderApp();
    }else if (this.state.logged) {
      return this.renderApp();
    }else{
      return this.renderLogin();
    }

  }
  
}