import { useParams } from "react-router";
import { Spiner } from "./Spiner";
import axios from "axios";
import Api from "../helpers/Conector.js";
import { useState, useEffect } from "react";
import '../../src/css/DetallesMascotas.css'

export function DetallesMascotas() {
  let { id } = useParams();
  const [state, setState] = useState([]);
  const [isLoding, setIsLoding] = useState(true);

  useEffect(() => {
    axios.get(Api + "/mascotas/" + id).then((res) => {
      setState(res.data);
      console.log(setState(res.data));
    });

    setIsLoding(false);
  }, []);
  if (isLoding) {
    return <Spiner />;
  }
  return (
    <div className="ContainerMain ContainerMascotas">
      <div className="Mascotadiv">
        <p className="CenterNombre">Nombre {state.nombre}</p>
        <img
          
          src={
            "https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733__480.jpg"
          }
          alt={state.nombre}
        ></img>
      </div>
      <div className="DetalleMascota">
        <p>Raza {state.raza}</p>
        <p>Edad {state.edad}</p>
        <p>Perfil {state.perfil}</p>
        
      </div>
    </div>
  );
}
