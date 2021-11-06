import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './Footer';
import '../css/formPets.css';
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
        <div className="mainconteiner">
            <div className="container bg-dark">
                <h1 className="h1__color">Agregar mascotas</h1>
                <div>
                    <form className="m-0 p-0" action="/" method="POST">
                        <div className="col-md-6">
                            <input type="text" name="nombre" placeholder="Nombre mascota" className="form-control my-1"></input>
                        </div>
                        <div className="col-md-6">
                            <input type="text" name="raza" placeholder="Raza" className="form-control my-1"></input>
                        </div>
                        <div className="col-md-6">
                            <input type="text" name="genero" placeholder="Genero" className="form-control my-1"></input>
                        </div>
                        <div className="col-md-6">
                            <input type="text" name="edad" placeholder="Edad" className="form-control my-1"></input>
                        </div>
                        <div className="col-md-6">
                            <input type="file" name="foto" placeholder="Imagen" className="form-control my-1"></input>
                        </div>
                        <div className="col-md-6">
                            <textarea name="perfil" cols="80" placeholder="Perfil" className="form-control my-1"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary my-2">
                            Agregar registro
                        </button>

                    </form>

                </div>
                <div className="row g-3 mb-3 col-md-12">
                    <h3>Todas las mascotas</h3>
                    <table className="table table-bordered table-hover p-2 align-middle">
                        <thead>
                            <tr>
                                <th className="text-center">Id</th>
                                <th className="text-center">Nombre</th>
                                <th className="text-center">Raza</th>
                                <th className="text-center">Genero</th>
                                <th className="text-center">Edad</th>
                                <th className="text-center">Imagen</th>
                                <th className="text-center">Perfil</th>
                                <th className="text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className="text-center"></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <div className="d-grid gap-2">
                                        <a className="btn <%= tasks[i].status ? 'btn-info' : 'btn-success' %>"
                                            href="/turn/<%= tasks[i]._id %>">

                                        </a>
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button>Editar</button>
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button>Borrar</button>
                                    </div>

                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

            <Footer />

        </div>



    );
}

export default Admin;