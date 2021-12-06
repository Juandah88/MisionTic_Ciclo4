import React from "react";

import '../css/Contacto.css';

import style from "../css/Contacto.module.css";
import emailjs from "emailjs-com";
import swal from "sweetalert";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDog, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faMobile} from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";


const Contacto = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2g9fmp4', 'template_xopdnqy',e.target,'user_BLMjPgWw1lzctNbxUeHQt')
      .then((result) => {
          console.log(result.text);
          console.log("enviado")
          swal({
            title: "Mensaje enviado exitosamente",
            icon: "success",
            button: "Aceptar!",
          });
      }, (error) => {
          console.log(error.text);
          console.log("nada")
      });
      e.target.reset();
  };
  return (
    <div  className="ContainerMain">
    <div className="cover-container ">
      <video className="videos" src="../assets/img/media/manada.mp4" autoPlay loop muted/>
      <h3 className="text-center  tuitulovideo">Contacta con nosotros</h3>
    
          <p className=" fs-7 parrafovideo">
            * Es nuestra misión contribuir al bienestar de las mascotas,
            buscar un hogar digno a cada uno de los animales y ayudar al
            bienestar tanto de ellos, como de las personas que los llevan y
            adoptan en su hogar, garantizando el confort y la comodidad.{" "}
            <br />
            <br />
            * Tu opinión es muy importante para nosotros, ya que nos ayuda a
            mejorar como organización, y por supuesto, podemos mejorar,
            cambiar e innovar pensando siempre en el bienestar de todos los
            perritos. 
          </p>
          </div>
          {/* / from_wrap*/ }
          <section className="body" >
          <div className={style.flex__container}>

            
            <form className={style.from} onSubmit={sendEmail}>
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
                      placeholder="mensaje"
                      required
                      
                    ></textarea>
                  </div>
                  <div id="bt2">
                  
                    <input className={style.bto} type="submit" 
                    id="" />
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
                    <img src="assets/img/slider/oficina2.jpg " className="imagenformulario" alt=".imagen." />
                  </div>
                 

                </div>
              </div>
            </div>
          </div>
          </section>
        </div>

  );
};

export default Contacto;