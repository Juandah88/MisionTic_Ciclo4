import React, { Component } from 'react';
import { Form, Button, Container, h1 } from "react-bootstrap";

class Login extends Component {

    constructor(prosp){

        super(prosp);

        this.pressChange = this.pressChange.bind(this);
        this.pressClick = this.pressClick.bind(this);
        this.state= {
            username: '',
            password: ''
        };
    }

    // handleClick = (e) => {
    //     alert('estos es una funcion')
    //   }
    pressClick(){
        alert('estos es una funcion');
    }

      async pressChange(e){
        if (e.target.name === 'usename') {
           await this.setState({
               username: e.target.value,
          });
      } else{
           await this.setState({
           password: e.target.value,
          });
      }
      console.log(this.state);
      }

    //  handleChange = (e) => {
    //    if (e.target.name === 'usename') {
    //          this.setState({
    //             username: e.target.value,
    //        });
    //    } else{
    //          this.setState({
    //         password: e.target.value,
    //        });
    //    }
    //    console.log(this.state);
    //   }
    render() {
        return (
    <div className="ContainerMain">
        <div className="content">
            <h1 className="text-center mt-3"> Login </h1>
        <Container className="my-auto">
          <Form onSubmit={this.onSubmit} enctype="multipart/form-data">
          <Form.Group className="mb-3">
            <Form.Label>Nombre de Usuario</Form.Label>
            <Form.Control
                    required
                    name="username"
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