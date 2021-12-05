import { useParams } from "react-router";
import { Spiner } from "./Spiner";
import axios from "axios";
import Api from "../helpers/Conector.js";
import { useState, useEffect } from "react";
import '../../src/css/DetallesMascotas.css'
import emailjs from "emailjs-com";
import swal from "sweetalert";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDog, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faMobile} from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export function DetallesMascotas() {
  let { id } = useParams();
  const [state, setState] = useState([]);
  const [isLoding, setIsLoding] = useState(true);
  const [form, setForm] = useState(false);
  const onClickAdoptar = () =>{
    setForm(true);
  }
  const onclickCancelar = () =>{
    setForm(false);
  }
  const onsSubmitsend = (e) =>{

    e.preventDefault();
    emailjs.sendForm('service_2g9fmp4', 'template_x0cqsvl',e.target,'user_BLMjPgWw1lzctNbxUeHQt')
    .then((result) => {
        console.log(result.text);
        console.log("enviado")
        swal({
          title: "Mensaje enviado exitosamente, Revisa tu bandeja de spam,si no encuentras el mensaje de recibido",
          icon: "success",
          button: "Aceptar!",
          
        });
        setForm(false);
    }, (error) => {
        console.log(error.text);
        console.log("nada")
    });
    e.target.reset();

    
  }

  useEffect(() => {
    axios.get(Api + "/mascotas/" + id).then((res) => {
      setState(res.data);
      console.log(setState(res.data));
    });

    setIsLoding(false);
  }, [id]);
  if (isLoding) {
    return <Spiner />;
  }
  return (
    <div className="fondo-img">
    
      <div className="ContainerMain ContainerMascotas">
      <p className="CenterNombre ">{state.nombre}</p>
        <div className="Mascotadiv contenedora">
        
        <figure>
          <img className="AdotarImg"
            
            src={ state.foto}
            alt={state.nombre}
          ></img>
        
        
      
        <div className="DetalleMascota capas">
          <h3>Raza: {state.raza}</h3>
          <h3>Edad: {state.edad}</h3>
          <h3>Perfil: {state.perfil}</h3>
          <button type="button" class="btn btns" onClick={onClickAdoptar}>Adoptar</button>
    
    
        
        </div>
        </figure>  
          
        </div>{
          

      
        form?
      
        <form className="formAdoptar" onSubmit={onsSubmitsend}>
            <h2 className="h2Adoptar">Adoptar la Mascota</h2>
            <input className="codigo"  type="text" name="id" value={state._id}/>
            <input type="text" name="name" placeholder="Tú nombre" required/>
            <input type="email" name="email" placeholder="ejemplo@gmail.com" required/>
            <textarea className="texts" name="message"placeholder="¿Porque quieres adoptar?" required /><br/>
            <button type="submit"  class="btn btnes">Enviar</button>
            <button type="button"  class="btn btnes" onClick={onclickCancelar}>Cancelar</button>
          </form>
          :null
        }
        
          
      </div>
      

    </div> 
    
  );
}
