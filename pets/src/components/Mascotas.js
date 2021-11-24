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
      pets: [],
      modalIsertar: false,
      OcultarMostrar: false,
      OcultarMostrarBtAGregar: true,
      OcultarMostrarBtCancelar:false,
      elementId: "",
      _id: "",
      nombre: "",
      raza: "",
      genero: "",
      edad: "",
      foto: "",
      fotoNombre: "",
      perfil: "",
      tipo: "",
      tipoModal: "",
    };
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
  post = () => {
      axios
        .post(Api + "/mascotas/crear", this.crearMascota())
        .then(() => {
          //Cuando termina de hacer la insercción se carga nuevamente el listado de mascotas
          this.get();
          swal({
            title: "Nueva mascota agregada a la familia!",
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
  put = () => {
      let API = `${Api}/mascotas/${this.state._id}/editar`;
      axios
        .put(API, this.crearMascota())
        .then(() => {
          this.get();
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
        OcultarMostrarBtCancelar:false,
      });
      this.limpiarCampos();
  }; 
  // Fin Función para Editar mascotas

  //Función Elimanar Mascotas
  delete = (mascota) => {
      this.setState({
        _id: mascota._id,
        OcultarMostrarBtCancelar:false,
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
            .then(() => { })
            .catch((err) => {
              console.log(err);
              
            });
            
          swal("Registro eliminado exitosamente!", {
            icon: "success",
            
          });this.get()
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
    alert('asdasda')
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
      OcultarMostrar:false,
    });
   
  };
  BotonCancelar=(e)=>{
    this.limpiarCampos();
    this.setState({
      OcultarMostrarBtCancelar:false,
      OcultarMostrarBtAGregar: true,
    })
  
  }
  // Fin limpiar campos

  // se crea el objeto para pasarlo al método
  crearMascota = () => {
     return {
      nombre: this.state.nombre,
      raza: this.state.raza,
      genero: this.state.genero,
      edad: this.state.edad,
      foto: this.state.foto,
      perfil: this.state.perfil,
      tipo: this.state.tipo,
    };
  };
   // Fin


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
      OcultarMostrarBtCancelar:true,
      
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

  render() {
    return (
      <div className="ContainerMain">
        <div className="content">
          <Container className="my-auto">
            <Form onSubmit={this.onSubmit} >
              <Form.Group className="mb-3" controlId="formNombre">
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
                <Form.Group as={Col} controlId="formEdad">
                  <Form.Label>Edad</Form.Label>
                  <Form.Control
                    required
                    name="edad"
                    value={this.state.edad}
                    onChange={this.onInputChange}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formRaza">
                  <Form.Label>Raza</Form.Label>
                  <Form.Control
                    required
                    name="raza"
                    value={this.state.raza}
                    onChange={this.onInputChange}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGenero">
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

                <Form.Group as={Col} controlId="formTipo">
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

              <Form.Group className="mb-3" id="formTipo">
                <Form.Label>Foto de la mascota</Form.Label>
                <Form.Control
                  type="file"
                  name="foto"
                  value={this.state.foto}
                  onChange={this.onInputChange}
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
                  name="perfil"
                  value={this.state.perfil}
                  onChange={this.onInputChange}
                />
              </Form.Group>
              {this.state.OcultarMostrarBtAGregar ? (
                <Button
                  variant="primary"
                  type="submit"
                  onClick={this.post}>
                  Agragar Mascotas
                </Button>
              ) : null}
                {this.state.OcultarMostrarBtCancelar?
                <Button variant="success"
                type="button"
                onClick={this.BotonCancelar}>
                Cancelar</Button>
               :null}
              {this.state.OcultarMostrar ? (
                <Button cvariant="primary" onClick={this.put}>
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
                    <td>{pet.genero !== 1 ? 'Macho' : 'Hembra'}</td>
                    <td>{pet.perfil}</td>
                    <td>{pet.tipo !== 0 ? 'Canino' : 'Felino'}</td>
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
                          this.delete(pet);
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
        <br/>
        <br/>
        <br/>
        <br/>

      </div>
    );
  }
}
