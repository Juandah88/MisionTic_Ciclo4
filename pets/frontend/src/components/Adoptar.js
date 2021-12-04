import React, { useEffect, useState } from "react";
import Api from "../helpers/Conector.js";
import axios from "axios";
import "../../src/css/Adoptar.css";
import { Link } from "react-router-dom";
import { Spiner } from "./Spiner";

const Adoptar = () => {
  const [state, setState] = useState([]);
  const [isLoding, setIsLoding] = useState(true);

  useEffect(() => {
  
    axios.get(Api + "/mascotas").then((res) => {
      setState(res.data);
      
    });
      setIsLoding(false);
  }, []);
  if (isLoding) {
    return <Spiner />;
  }
  return (
    <div className="fondo-img">
    <br/>
    <div className="ContainerMain">
    <br/>
    
      <ul className="mascotaGrid">
        {state.map((pet) => (
          <li key={pet._id} className="mascotaCard masco">
            {pet.nombre.toUpperCase()}
            <div className="mascotaImagen">
            <Link to={`/AdoptarMascota/${pet._id}`}>
            <img className="mascotaImagen"
              src={pet.foto}
              alt={pet.nombre}
            ></img>
              
            </Link>
            </div>
           
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Adoptar;
