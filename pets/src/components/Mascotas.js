import React, { Component } from "react";
import axios from "axios";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import Api from "../helpers/Conector.js";
import "../css/GuardarRegistro.css";
import swal from "sweetalert";
 
export default class Admin extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.state = {

      modalIsertar: false,
      elementId: "",
      tipoModal: "",

      pets: [],
      _id: "",
      nombre: "",
      raza: "",
      genero: "",
      edad: "",
      foto: "",
      fotoNombre: "",
      perfil: "",
      tipo: "",

    };

    this.onFileChange = this.onFileChange.bind(this);
  }

  // Para obtner los datos de la api
  get = () => {
    axios
      .get(Api + "/mascotas")
      .then((response) => {
        this.setState({ pets: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  //Fin obtener datos de la api

  // Función para agregar nuevas mascotas
  post = (formData) => {
    axios
      .post(Api + "/mascotas/crear", formData)
      .then(() => {
        //Cuando termina de hacer la insercción se carga nuevamente el listado de mascotas
        this.get();
        swal({
          title: "Una mascota a llegado la familia!",
          icon: "success",
          button: "Aceptar!",
        });
      })
      .catch((error) => {
        console.log(error);
      });
    this.limpiarCampos();
  };
  //Fin funcón agregar mascotas

  // Función para Editar mascotas
  put = (formData) => {
    let API = `${Api}/mascotas/${this.state._id}/editar`;
    axios
      .put(API, formData)
      .then(() => {
        this.get();
        swal({
          title: "Los cambios de la mascota han sido realizado con exíto!",
          icon: "success",
          button: "Aceptar!",
        });
      })
      .catch((error) => {
        console.log(error);
      });

    this.limpiarCampos();
  };
  // Fin Función para Editar mascotas

  //Función Elimanar Mascotas
  delete = (mascota) => {
    this.setState({
      _id: mascota._id,
      ocultarMostrarBtCancelar: false,
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
          .then(() => { this.get(); })

          .catch((err) => {
            console.log(err);

          });

        swal("Registro eliminado exitosamente!", {
          icon: "success",

        })
      } else {
        swal("Acción cancelada");
      }
    });

    this.limpiarCampos();

  };
  //Fin Función Elimanar Mascotas

  // Para prevenir que se vuelva a cargar la página
  onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    this.state.foto !== "" && formData.append('foto', this.state.foto);
    this.state.foto !== "" && formData.append('fotoNombre', this.state.fotoNombre);
    console.log(this.state.fotoNombre)
    formData.append('nombre', this.state.nombre);
    formData.append('edad', this.state.edad);
    formData.append('tipo', this.state.tipo);
    formData.append('genero', this.state.genero);
    formData.append('raza', this.state.raza);
    formData.append('perfil', this.state.perfil);

    this.state._id ? this.put(formData) : this.post(formData);
  }
  // Fin para prevenir la carga de la página

  // se limpian los campos del estado
  limpiarCampos = () => {
    this.setState({
      nombre: "",
      raza: "",
      genero: "",
      edad: "",
      foto: "",
      perfil: "",
      tipo: "",
      ocultarMostrar: false,
    });

  };

  botonCancelar = (e) => {
    this.limpiarCampos();
    this.setState({
      ocultarMostrarBtCancelar: false,
      ocultarMostrarBtAgregar: true,
    })

  }
  // Fin limpiar campos

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
      ocultarMostrar: true,
      ocultarMostrarBtAgregar: false,
      ocultarMostrarBtCancelar: true,

    });
  };
  //Fin Función para mostrar los campos de editar mascotas

  componentDidMount() {
    this.get();
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onFileChange(e) {
    if (e.target.files && e.target.files[0]) {
      //Se obtiene la infomración de la imagen
      const imagen = e.target.files[0];
      //Se valida el formato
      if (!/\.(jpge|jpg|png|svg|JPG|PNG|SVG)$/i.test(imagen.name)) {
        swal({
          icon: "error",
          title: "error",
          text: "El archvio a adjuntar no es un formato valido.",
        });
        e.target.value = "";
      } else {
        this.setState({ foto: imagen }, () => { console.log(this.state.foto) });
      }
    }
  }

  render() {
    return (
      <div className="ContainerMain ">
        
        <div className="fondo-formulario ">
        <br/>
        <div className="content  text-white">
        <br/>
        <br/>
        <br/>
          <h1 className="text-center text-white bg-dark container-lg ">Ingresa los datos de tu mascota</h1>
            <Container className="my-auto table-hover bg-dark">
            <Form onSubmit={this.onSubmit} enctype="multipart/form-data">
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  required
                  placeholder="Ingrese el nombre de la mascota"
                  name="nombre"
                  value={this.state.nombre}
                  onChange={this.onInputChange}
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Edad</Form.Label>
                  <Form.Control
                    required
                    name="edad"
                    value={this.state.edad}
                    onChange={this.onInputChange}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Raza</Form.Label>
                  <Form.Control
                    required
                    name="raza"
                    value={this.state.raza}
                    onChange={this.onInputChange}
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Genero</Form.Label>
                  <Form.Select
                    required
                    name="genero"
                    value={this.state.genero}
                    onChange={this.onInputChange}
                  >
                    <option>Genero...</option>
                    <option value={0}>Macho</option>
                    <option value={1}>Hembra</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Tipo</Form.Label>
                  <Form.Select
                    required
                    name="tipo"
                    value={this.state.tipo}
                    onChange={this.onInputChange}
                  >
                    <option>Tipo</option>
                    <option value={1}>Canino</option>
                    <option value={0}>Felino</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Foto de la mascota</Form.Label>
                <input
                  type="file"
                  className="form-control"
                  onChange={this.onFileChange}
                />
              </Form.Group>

              <Form.Group
                className="mb-3">
                <Form.Label>Perfil de la mascota</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows={3}
                  name="perfil"
                  value={this.state.perfil}
                  onChange={this.onInputChange}
                />
              </Form.Group>
              {
                !this.state._id ?
                  (<Button variant="primary" type="submit"> Agragar Mascotas </Button>)
                  : (<Button variant="primary" type="submit"> Actualizar</Button>)
              }
              {this.state._id ?
                <Button
                  className="btn btn-danger m-1"
                  onClick={this.botonCancelar}> Cancelar</Button>
                : null}
            </Form>
            <hr />
            <table className="table table-dark table-hover  table-responsive ">
              <thead>
                <tr >
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
                    <td>{pet.genero !== 1 ? 'Macho' : 'Hembra'}</td>
                    <td>{pet.perfil}</td>
                    <td>{pet.tipo !== 0 ? 'Canino' : 'Felino'}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary m-1"
                        onClick={() => {
                          this.seleccionarMascota(pet);
                        }}>
                        Editar
                      </button>

                      <button
                        type="button"
                        className="btn btn-danger m-1"
                        onClick={() => {
                          this.delete(pet); this.get();
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
        <br />
        </div>
      </div>
    );
  }
}
