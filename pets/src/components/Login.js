import React from "react";
import { FacebookLoginButton } from 'react-social-login-buttons'

const Login = () => {

    return(
    <div class="row ContainerMain">
        <div class="col-md-4 offset-md-4">
            <div class="card mt-4 text-center mb-4">
                <div class="card-header">
                    <h3>Inicio de Sesión</h3>
                </div>
                <div class="card-body">
                    <form action="/signin" method="POST">
                        <div class="form-group mb-4">
                        <input class="form-control" type="email" name="email" placeholder="Insert Email" autofocus required></input>
                        </div> 
                        <div class="form-group mb-4">
                            <input class="form-control" type="password" name="password" placeholder="Insert Password" required></input>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary btn-block" type="submit">SignIn</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
</div>
    );
}
export default Login;