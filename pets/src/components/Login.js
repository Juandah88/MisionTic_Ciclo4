import React from "react";
import Foter from './Footer';

import { FacebookLoginButton } from 'react-social-login-buttons'
const Login = () => {
    return(
    <div className="row">
        <div className="col-md-4 offset-md-4">
            <div className="card mt-4 text-center mb-4">
                <div className="card-header">
                    <h3>Inicio de Sesión</h3>
                </div>
                <div className="card-body">
                    <form action="/signin" method="POST">
                        <div className="form-group mb-4">
                        <input className="form-control" type="email" name="email" placeholder="Insert Email" autofocus required></input>
                        </div>
                        <div className="form-group mb-4">
                            <input className="form-control" type="password" name="password" placeholder="Insert Password" required></input>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block" type="submit">SignIn</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Foter />
</div>
    );
}
export default Login;