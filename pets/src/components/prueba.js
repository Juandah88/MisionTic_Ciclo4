import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import Footer from './Footer';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import '../css/GuardarRegistro.css'
const API = process.env.API_URI

export default class Admin extends Component {


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
    };

    onSubmit = async (e) => {
        alert(this.state.petFoto)

        //Evita refrescar la página.
        e.preventDefault();
        await axios.post('http://localhost:5000/api/mascotas/crear', {

            nombre : this.state.petNombre,
            edad : this.state.petEdad,
            raza : this.state.petRaza,
            //genero : this.state.petGenero
            //tipo : this.state.petTipo
            //foto : this.state.petFoto,
            perfil : this.state.petPerfil
        });
       
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    getPets = async () => {
        const res = await axios.get('http://localhost:5000/api/mascotas')
        this.setState({ pets: res.data });
    }

    render() {
        return (
            <div>
                <div className="content">
                    <Container className="my-auto" >
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group className="mb-3" controlId="formNombre">
                                <Form.Label>Nombre*</Form.Label>
                                <Form.Control
                                    onChange={this.onInputChange}
                                    name="petNombre"
                                    value={this.state.petNombre}
                                    placeholder="Ingrese el nombre de la mascota"
                                    required />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formEdad">
                                    <Form.Label>Edad*</Form.Label>
                                    <Form.Control
                                        onChange={this.onInputChange}
                                        name="petEdad"
                                        value={this.state.petEdad}
                                        required />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formRaza">
                                    <Form.Label>Raza*</Form.Label>
                                    <Form.Control
                                        onChange={this.onInputChange}
                                        name="petRaza"
                                        value={this.state.petRaza}
                                        required />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGenero">
                                    <Form.Label>Genero</Form.Label>
                                    <Form.Select
                                        defaultValue="Genero..."
                                        onChange={this.onInputChange}
                                        name="petGenero"
                                        value={this.state.petGenero}>
                                        <option>Genero...</option>
                                        <option>Macho</option>
                                        <option>Hembra</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formTipo">
                                    <Form.Label>Tipo</Form.Label>
                                    <Form.Select
                                        defaultValue="Tipo..."
                                        onChange={this.onInputChange}
                                        name="petTipo"
                                        value={this.state.petTipo}>
                                        <option>Tipo..</option>
                                        <option>Canino</option>
                                        <option>Felino</option>
                                    </Form.Select>
                                </Form.Group>
                                
                            </Row>

                            <Form.Group className="mb-3" id="formTipo">
                                <Form.Label>Foto de la mascota</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Perfil de la mascota*</Form.Label>
                                <Form.Control
                                    onChange={this.onInputChange}
                                    name="petPerfil"
                                    value={this.state.petPerfil}
                                    as="textarea"
                                    rows={3}
                                    required />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Guardar
                            </Button>
                        </Form>
                        <hr />

                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Tipo</th>
                                    <th scope="col">Raza</th>
                                    <th scope="col">Edad (en años)</th>
                                    <th scope="col">Genero</th>
                                    <th scope="col">Perfil</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.pets.map(pet =>
                                        <tr>
                                            <td>{pet.nombre}</td>
                                            <td> {pet.tipo != 0 ? 'Canino' : 'felino'}</td>
                                            <td>{pet.raza}</td>
                                            <td>{pet.edad}</td>
                                            <td>{pet.genero != 0 ? 'Macho' : 'Hembra'}</td>
                                            <td>{pet.perfil}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </Container>
                </div>
                <Footer />
            </div>
        );

    }
}