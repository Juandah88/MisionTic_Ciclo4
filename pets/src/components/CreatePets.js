import React, { Component } from "react";
import axios from "axios";
import Footer from "./Footer";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import Api from "../Conector.js";
import "../css/GuardarRegistro.css";
import swal from "sweetalert";
import { Link } from "react-router-dom";

export default class Admin extends Component {
  constructor(props) {
    super(props);

    this.onChangeNombre = this.onChangeNombre.bind(this);
    this.onChangeRaza = this.onChangeRaza.bind(this);
    this.onChangeGenero = this.onChangeGenero.bind(this);
    this.onChangeEdad = this.onChangeEdad.bind(this);
    this.onChangeFoto = this.onChangeFoto.bind(this);
    this.onChangePerfil = this.onChangePerfil.bind(this);
    this.onChangeTipo = this.onChangeTipo.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      pets: [],
      modalIsertar: false,
      OcultarMostrar: false,
      OcultarMostrarBtAGregar: true,
      elementId: "",

      _id: "",
      nombre: "",
      raza: "",
      genero: "",
      edad: "",
      foto: "",
      perfil: "",
      tipo: "",
      tipoModal: "",
    };
  }
  // Para obtner los datos de la api
  peticionGet = () => {
    axios
      .get(Api + "/mascotas")
      .then((response) => {
        this.setState({ pets: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }; //Fin obtener datos de la api

  //funciones para cada input
  onChangeNombre(e) {
    this.setState({ nombre: e.target.value });
  }
  onChangeRaza(e) {
    this.setState({ raza: e.target.value });
  }
  onChangeGenero(e) {
    this.setState({ genero: e.target.value });
  }
  onChangeEdad(e) {
    this.setState({ edad: e.target.value });
  }
  onChangeFoto(e) {
    this.setState({ foto: e.target.value });
  }
  onChangePerfil(e) {
    this.setState({ perfil: e.target.value });
  }
  onChangeTipo(e) {
    this.setState({ tipo: e.target.value });
  }

  // Fin de las funciones para cada input

  // Para prevenir que se vuelva a cargar la página
  onSubmit(e) {
    e.preventDefault();
  } // Fin para prevenir la carga de la página

  // se limpian los campos
  LimpiarCampos = () => {
    this.setState({
      nombre: "",
      raza: "",
      genero: "",
      edad: "",
      foto: "",
      perfil: "",
      tipo: "",
    }); // Fin limpiar campos
  };

  ObjetoPets = (PetsObject) => {
    // se crea el objeto para pasarlo al metodo
    PetsObject = {
      nombre: this.state.nombre,
      raza: this.state.raza,
      genero: this.state.genero,
      edad: this.state.edad,
      foto: this.state.foto,
      perfil: this.state.perfil,
      tipo: this.state.tipo,
    }; // Fin

    return PetsObject;
  };

  // Función para agregar nuevas mascotas
  peticipnPost = () => {
    axios
      .post(Api + "/mascotas/crear", this.ObjetoPets())
      .then(() => {
        this.peticionGet();
        swal({
          title: "Nuevo registro insertado!",
          icon: "success",
          button: "Aceptar!",
        });
      })
      .catch((error) => {
        console.log(error);
      });
    this.LimpiarCampos();
  }; //Fin funcón agregar mascotas

  // Función para Editar mascotas
  peticionPut = () => {
    let API = `${Api}/mascotas/${this.state._id}/editar`;
    axios
      .put(API, this.ObjetoPets())

      .then(() => {
        this.peticionGet();
        swal({
          title: "registro editado!",
          icon: "success",
          button: "Aceptar!",
        });
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({
      OcultarMostrarBtAGregar: true,
      OcultarMostrar: false,
    });
    this.LimpiarCampos();
  }; // Fin Función para Editar mascotas

  //Función Elimanar Mascotas
  peticionDelete = (mascota) => {
    this.setState({
      _id: mascota._id,
    });

    swal({
      title: "¿Estás seguro?",
      text: "Una vez eliminado, ¡no podrás recuperar este registro",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(Api + "/mascotas/" + this.state._id)
          .then(() => {})
          .catch((err) => {
            console.log(err);
          });
        this.peticionGet();
        swal("Registro eliminado exitosamente!", {
          icon: "success",
        });
      } else {
        swal("Acción cancelada");
      }
    });
    this.LimpiarCampos();
  }; //Fin Función Elimanar Mascotas

  //Función para mostrar los campos de editar mascotas
  seleccionarMascota = (mascota) => {
    this.setState({
      _id: mascota._id,
      nombre: mascota.nombre,
      raza: mascota.raza,
      edad: mascota.edad,
      genero: mascota.genero,
      foto: mascota.foto,
      perfil: mascota.perfil,
      tipo: mascota.tipo,
      OcultarMostrar: true,
      OcultarMostrarBtAGregar: false,
    });
  }; //Fin Función para mostrar los campos de editar mascotas

  componentDidMount() {
    this.peticionGet();
  }

  render() {
    return (
      <div>
        <div className="content">
          <Container className="my-auto">
            <Form onSubmit={this.onSubmit}>
              <Form.Group className="mb-3" controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  required
                  placeholder="Ingrese el nombre de la mascota"
                  value={this.state.nombre}
                  onChange={this.onChangeNombre}
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formEdad">
                  <Form.Label>Edad</Form.Label>
                  <Form.Control
                    required
                    value={this.state.edad}
                    onChange={this.onChangeEdad}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formRaza">
                  <Form.Label>Raza</Form.Label>
                  <Form.Control
                    required
                    value={this.state.raza}
                    onChange={this.onChangeRaza}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGenero">
                  <Form.Label>Genero</Form.Label>
                  <Form.Select
                    required
                    value={this.state.genero}
                    onChange={this.onChangeGenero}
                  >
                    <option>Genero...</option>
                    <option value={0}>Macho</option>
                    <option value={1}>Hembra</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formTipo">
                  <Form.Label>Tipo</Form.Label>
                  <Form.Select
                    required
                    value={this.state.tipo}
                    onChange={this.onChangeTipo}
                  >
                    <option>Tipo</option>
                    <option value={0}>Canino</option>
                    <option value={1}>Felino</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formTipo">
                <Form.Label>Foto de la mascota</Form.Label>
                <Form.Control
                  type="file"
                  value={this.state.foto}
                  onChange={this.onChangeFoto}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Perfil de la mascota</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows={3}
                  value={this.state.perfil}
                  onChange={this.onChangePerfil}
                />
              </Form.Group>
              {this.state.OcultarMostrarBtAGregar ? (
                <Button
                  variant="primary"
                  type="submit"
                  onClick={this.peticipnPost}
                >
                  Agragar Mascotas
                </Button>
              ) : null}
              {this.state.OcultarMostrar ? (
                <Button cvariant="primary" onClick={this.peticionPut}>
                  Actualizar
                </Button>
              ) : null}
            </Form>
            <hr />

            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Edad (años)</th>
                  <th scope="col">Genero</th>
                  <th scope="col">Perfil</th>
                  <th scope="col">Tipo</th>
                </tr>
              </thead>
              <tbody>
                {this.state.pets.map((pet) => (
                  <tr key={pet._id}>
                    <td className="HideiTdId">{pet._id}</td>
                    <td>{pet.nombre}</td>
                    <td>{pet.edad}</td>
                    <td>{pet.genero}</td>
                    <td>{pet.perfil}</td>
                    <td>{pet.tipo}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary m-1"
                        onClick={() => {
                          this.seleccionarMascota(pet);
                        }}
                      >
                        Editar
                      </button>

                      <button
                        type="button"
                        className="btn btn-danger m-1"
                        onClick={() => {
                          this.peticionDelete(pet);
                        }}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}
