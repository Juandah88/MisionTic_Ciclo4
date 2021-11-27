import React from "react";

import '../css/Contacto.css';

import style from "../css/Contacto.module.css";
import emailjs from "emailjs-com";
import swal from "sweetalert";
import manada from "../media/manada.mp4";

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
    <div>
    <div className="cover-container ">
      <video className="videos" src={manada} autoPlay loop muted/>
      <h3 className="text-center  tuitulovideo">Contactate con nosotros</h3>
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
                <div className={style.imagen2}>
                  <div className={style.imagen}>
                    <img
                      src="https://img.icons8.com/ios/452/gmail--v2.png"
                      alt="Imagen"
                    />
                  </div>
                </div>
              </div>
            </div>

  );
};

export default Contacto;
