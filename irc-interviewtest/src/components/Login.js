import { useState } from 'react';

import '../shared/css/style.css';

export const Login = () => {

    const [loginValues, setLoginValues] = useState({
        email: "",
        password: "",
        remember_me: false,
    });

    const handleInputChange = (e) => {
        e.persist();
        let prev = { ...loginValues };
        prev[e.target.id] = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setLoginValues(prev);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        alert("Clicked "+loginValues.email + " " + loginValues.password + " " + loginValues.remember_me);
    }


    return (
        <body className="irc">
            <div className="container-fluid h-100">
                <div className="login-container h-100 d-flex align-items-center justify-content-center">
                    <div className="login-form">
                        <div className="page-header mb-4" id="banner">
                            <div className="text-center">
                                <a href="#">
                                    <img src={"../shared/img/LOGO.png"}/>
                                </a>
                            </div>
                        </div>
                        <div className="main-div">
                            <div className="panel mb-4">
                                <h2 className="text-center">Sign in to your account</h2>
                            </div>
                            <form id="Login" onSubmit={handleLogin}>
                                <div className="form-group mb-3">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        id="email"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        id="password"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            name="remember_me"
                                            className="custom-control-input"
                                            id="remember_me"
                                            onChange={handleInputChange}
                                        />
                                        <label htmlFor="remember_me" className="custom-control-label">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <button onClick={handleLogin} type="submit" className="btn btn-primary">
                                        Continue
                                    </button>
                                </div>
                                <div className="forgot">
                                    <a href="#">Forgot password?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <footer id="footer">
                <div className="container">
                    <div className="row text-center text-xs-center text-sm-center text-md-left">
                        <div className="col-xs-12 col-md-12 text-center">
                            <ul className="list-unstyled quick-links ml-auto">
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Terms of Services</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </body>
    )
}