import React, { Component } from 'react';
import Foter from './Footer';
import axios from 'axios';

export default class Adoptar extends Component {

    state = {
        pets: [],
        petNombre: '',
        petEdad: '',
        petGenero: '',
        petTipo: '',
        petFoto: '',
        petPerfil: '',
        petRaza: ''
    };

    async componentDidMount() {
        this.getPets();
    }

    getPets = async () => {
        const res = await axios.get('http://localhost:5000/api/mascotas')
        this.setState({ pets: res.data });
    }

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
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
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

// const Adoptar = () => {
//     return ( 
//         <div className="fondo">
//             <h1>Página adoptar</h1>

//         <div class="row row-cols-1 row-cols-md-3 g-4 m-5">
//         <div class="col">
//             <div class="card h-100">
//             <img src="..." class="card-img-top" alt="..."></img>
//             <div class="card-body">
//                 <h5 class="card-title">Card title</h5>
//                 <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//             </div>
//             <div class="card-footer">
//                 <small class="text-muted">Last updated 3 mins ago</small>
//             </div>
//             </div>
//         </div>
//         <div class="col">
//             <div class="card h-100">
//             <img src="..." class="card-img-top" alt="..."></img>
//             <div class="card-body">
//                 <h5 class="card-title">Card title</h5>
//                 <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//             </div>
//             <div class="card-footer">
//                 <small class="text-muted">Last updated 3 mins ago</small>
//             </div>
//             </div>
//         </div>
//         <div class="col">
//             <div class="card h-100">
//             <img src="..." class="card-img-top" alt="..."></img>
//             <div class="card-body">
//                 <h5 class="card-title">Card title</h5>
//                 <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//             </div>
//             <div class="card-footer">
//                 <small class="text-muted">Last updated 3 mins ago</small>
//             </div>
//             </div>
//         </div>
//         <div class="col">
//             <div class="card h-100">
//             <img src="..." class="card-img-top" alt="..."></img>
//             <div class="card-body">
//                 <h5 class="card-title">Card title</h5>
//                 <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//             </div>
//             <div class="card-footer">
//                 <small class="text-muted">Last updated 3 mins ago</small>
//             </div>
//             </div>
//         </div>

//         </div>







//             <Foter/>
//         </div>
//      );
// }
 
// export default Adoptar;