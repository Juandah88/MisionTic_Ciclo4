import React, { Component } from 'react';
import { Form, Container } from "react-bootstrap";
import axios from 'axios';
import Api from '../helpers/Conector';
import swal from "sweetalert";
import '../css/Login.css';


class Login extends Component {

    constructor(prosp){

        super(prosp);

        this.pressChange = this.pressChange.bind(this);
        this.pressClick = this.pressClick.bind(this);
        this.changeStateApp = this.props.onTryLogin;
        this.state= {
            email: '',
            password: ''
        };
    }

    // handleClick = (e) => {
    //     alert('estos es una funcion')
    //   }
    async pressClick(){
       let response = await axios.post(Api+'/usuarios/credenciales',this.state);
       if(response.data === true){
           //Actualizacion del estado componente App
           this.changeStateApp(true);
       }else{
        swal({
            title: "Contraseña Incorrecta!",
            icon: "error",
            button: "Aceptar!",
          });
       }
    }   

      async pressChange(e){
        if (e.target.name === 'email') {
           await this.setState({
               email: e.target.value,
          });
      } else{
           await this.setState({
           password: e.target.value,
          });
      }

      }

    render() {
        return (
            <div className="ContainerMain fondo-login">
            <br/>
            <br/>
            <br/>
            <br/>
                <br/>
                <br/>
                <br/>
                <div className="row ">
                
               
                <Container className="my-auto fondo-ta col-4">
                <h1 className="text-center text-white mt-3">Bienvenido</h1>
                  <Form onSubmit={this.onSubmit} enctype="multipart/form-data">
                  <Form.Group className="mb-3">
                    <Form.Label>Email de Usuario</Form.Label>
                    <Form.Control
                            required
                            name="email"
                            onChange={this.pressChange}
                          />
                    </Form.Group>
                    <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                            required
                            name="password"
                            type='password'
                            onChange={this.pressChange}
                          />
                    </Form.Group>
                    <Form.Control
                            type="button"
                             value="Login"
                             className="btn btn-success m-1"
                            onClick={this.pressClick}
                          />
                    
                    </Form>
                        </Container>
                    </div>
                </div>
        );
    }
}
export default Login;