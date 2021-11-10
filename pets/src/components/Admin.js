import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './Footer';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
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
        <div>
        <div className="content">
            <Container className="my-auto" >
                <Form>
                    <Form.Group className="mb-3" controlId="formNombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control placeholder="Ingrese el nombre de la mascota" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formEdad">
                            <Form.Label>Edad</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGenero">
                            <Form.Label>Genero</Form.Label>
                            <Form.Select defaultValue="Genero...">
                                <option>Genero...</option>
                                <option>Macho</option>
                                <option>Hembra</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formTipo">
                            <Form.Label>Tipo</Form.Label>
                            <Form.Select defaultValue="Tipo...">
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
                        <Form.Label>Perfil de la mascota</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </Container>
        </div>

        <Footer />

    </div>
    );
}

export default Admin;