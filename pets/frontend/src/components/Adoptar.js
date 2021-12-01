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
    <div className="ContainerMain">
      <ul className="mascotaGrid">
        {state.map((pet) => (
          <li key={pet._id} className="mascotaCard">
            {pet.nombre.toUpperCase()}
            <div className="mascotaImagen">
            <Link to={`/mascota${pet._id}`}>
            <img className="mascotaImagen"
              src={
                "https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733__480.jpg"
              }
              alt={pet.nombre}
            ></img>
            
            </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Adoptar;
