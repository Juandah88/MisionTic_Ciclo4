import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Foter from './Footer';
import '../css/GuardarRegistro.css'
const URL = process.env.REACT_APP_URI
const Admin = () => {
    const [listaMascota, setlistaMascota] = useState([])
    // const [ id, setId ] = useState('')
    // const [ nombre, setNombre ] = useState('')
    // const [ raza, setRaza ] = useState('')
    // const [ genero, setGenero ] = useState('')
    // const [ edad, setEdad ] = useState('')
    // const [ perfil, setPerfil ] = useState(true)
    useEffect(() => {
        getMascota()
    }, [])

    const getMascota = async () => {
        const res = await axios.get(URL + 'mascotas')
        setlistaMascota(res.data)
    }



    return (
        <div className="fondo">
            <div className="container container__color">
                <h1 className="h1__color">Agregar mascotas</h1>


                <div className="formulario">
                    <form className=" form m-0 p-0" action="/" method="POST">

                        <input type="text" name="nombre" placeholder="Nombre mascota" ></input>


                        <input type="text" name="raza" placeholder="Raza" ></input>


                        <input type="text" name="genero" placeholder="Genero" ></input>


                        <input type="text" name="edad" placeholder="Edad" ></input>


                        <input type="file" name="foto" placeholder="Imagen" ></input>


                        <textarea name="perfil" cols="80" placeholder="Perfil" ></textarea>

                        <button type="submit" className="btn btn-primary my-2">
                            Agregar registro
                        </button>

                    </form>

                </div>



               
            </div>

            <Foter />

        </div>



    );
}

export default Admin;