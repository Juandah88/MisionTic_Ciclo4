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
import style from "../css/Contacto.module.css";

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
        <p className="CenterNombre ">Adpota a tu merjor Amigo </p>
          <div className="Mascotadiv contenedora"> 
        
            
          </div>
        <div class="card mb-3 card-targeta">
          <div class="row g-0 fondo-targeta">
            <div class="col-md-8">
              <img src={ state.foto} class="img-fluid AdotarImg rounded-start" alt={state.nombre}/>
            </div>
            <div class="col-md-4">
              <div class="card-body titless">
                <h5 class="card-title1 ">{state.nombre}</h5>
                <p class="card-text">Raza: {state.raza}</p>
                <p class="card-text">Edad: {state.edad}</p>
                <p class="card-text"><small class="text-muted">Perfil: {state.perfil}</small></p>
                <button type="button" class="btn btns" onClick={onClickAdoptar}>Adoptar</button>
              </div>
            </div>
          </div>
        </div>
      
         
          <div className={style.flex__container}>

          
            <form className= {style.from} onSubmit={onsSubmitsend}>
              <div className={style.fromm__section}>
                  <input
                    type="text" name="name"
                    className={style.from__input}
                    placeholder="Nombre"
                    required
                  />
              </div>
              <div className={style.fromm__section}>
                    <input
                      type="email"
                      name="email"
                      className={style.from__input}
                      placeholder="email"
                      required
                    />
                  </div>
                  <div className={style.fromm__section}>
                    <textarea
                      className={style.from__input}
                      name="message"
                      placeholder="¿Porque quieres adoptar?"
                      required
                      
                    ></textarea>
                  </div>
                  <div id="bt2">
                  
                    <input className={style.bto} type="submit" 
                    id="" />
                    {/* <button type="submit"  class="btn btnes">Enviar</button> */}
                    <button type="submit" className={style.bto}>Enviar</button>
                   <button type="button"  className={style.bto} onClick={onclickCancelar}>Cancelar</button>
                  </div>
                </form>
                
                <div className="abajo">
                  <div className={style.imagen2}>
                    <div className={style.imagen}>
                      <section className="contact-info">
                      <span><FontAwesomeIcon className="logopata" icon={faDog}/></span>
                        <br/>
                        <h2>INFORMACION<br/>DE CONTACTO</h2>

                      </section>
                      <section className="info-items"> 
                          <p><span className=""><FontAwesomeIcon icon={faEnvelope}/></span>mascotas@gmail.com</p>
                          <p><span className=""> <FontAwesomeIcon icon={faMobile}/></span>+57 31425033</p>
                          <p><span className=""> <FontAwesomeIcon icon={faMapMarkerAlt}/></span>BOGOTA-CUNDINAMARCA</p>


                      </section>

                      
                      <div className="imagenformulario">
                        <img src="/assets/img/slider/oficina2.jpg " className="imagenformulario" alt=".imagen." />
                      </div>
                  

                    </div>
                  </div>
                </div>
              </div>
        
      </div>
    </div> 
    
  );
}
