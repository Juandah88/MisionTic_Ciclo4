import React, { useEffect, useState } from "react";
import Api from "../helpers/Conector.js";
import axios from "axios";



const Adoptar = () => {
  const [state, setState] = useState([]);
  const [isLoding, setIsLoding] = useState(true);

  useEffect(() => {
  
    axios.get(Api + "/mascotas").then((res) => {
      setState(res.data);
      
    });
      setIsLoding(false);
  }, []);
  
  return (
    <div className="ContainerMain">

      <h1>Página adoptar</h1>
     
       <div class="row row-cols-1 row-cols-md-3 g-4 m-5">
       {state.map((pet) => (
        <div class="col">
         <div class="card h-100">
         <img
          src="https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/06/12/150612173542_mascota_promo_624x351_thinkstock.jpg" class="card-img-top" alt="..."></img>
         <div class="card-body">
             <h5 class="card-title">{ pet.nombre }</h5>
             <p class="card-text">{ pet.perfil }</p>
             <a class="btn btn-success"> ver mas...</a>
         </div>
         <div class="card-footer" bgcolor="white">
             <small class="text-muted">Raza: { pet.raza } - meses: { pet.edad }</small>
         </div>
         </div>
       </div>
       ))}
      </div>
    </div>
  );
};

export default Adoptar;