import React, { Component } from 'react';
import Foter from './Footer';
import axios from 'axios';

export default class Adoptar extends Component {


    get = () => {
        axios
          .get("http://localhost:5000/api/mascotas")
          .then((response) => {
            this.setState({ pets: response.data });
          })
          .catch((error) => {
            console.log(error.message);
          });
      };

    render() {
        return (

            <div className="fondo">
            <h1>Página adoptar</h1>

        <div class="row row-cols-1 row-cols-md-3 g-4 m-5">
        <div class="col">
        {
            this.state.pets.map(pet =>
            <div class="card h-100">
            <img src="..." class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">{ pet.nombre }</h5>
                <p class="card-text">{ pet.perfil }</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">{ pet.raza } - { pet.edad }</small>
            </div>
            </div>
            )
        }
        </div>

        </div>
            <Foter/>
        </div>

        );
    }

}
