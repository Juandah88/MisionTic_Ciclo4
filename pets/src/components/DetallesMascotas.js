import { useParams } from "react-router";
import { Spiner } from "./Spiner";
import axios from "axios";
import Api from "../helpers/Conector.js";
import { useState, useEffect } from "react";
import '../../src/css/DetallesMascotas.css'
import emailjs from "emailjs-com";
import swal from "sweetalert";

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
    <div>
    <div className="ContainerMain ContainerMascotas">
      <div className="Mascotadiv">
        <p className="CenterNombre">Nombre {state.nombre}</p>
        <img
          
          src={
            "https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733__480.jpg"
          }
          alt={state.nombre}
        ></img>
        <button type="button" class="btn btn-success" onClick={onClickAdoptar}>Adoptar</button>
        
      </div>
      <div className="DetalleMascota">
        <p>Raza {state.raza}</p>
        <p>Edad {state.edad}</p>
        <p>Perfil {state.perfil}</p>
        
      </div>{
        form?
      <form className="formAdoptar" onSubmit={onsSubmitsend}>
          <h2 className="h2Adoptar">Adoptar la Mascota</h2>
          <input  type="text" name="id" value={state._id}/>
          <input type="text" name="name" placeholder="Tú nombre" required/>
          <input type="email" name="email" placeholder="ejemplo@gmail.com" required/>
          <textarea name="message"placeholder="¿Porque quieres adoptar?" required /><br/>
          <button type="submit"  class="btn btn-success">Enviar</button>
          <button type="button"  class="btn btn-danger" onClick={onclickCancelar}>Cancelar</button>
        </form>
        :null
}
    
    </div>
    </div>
  );
}
