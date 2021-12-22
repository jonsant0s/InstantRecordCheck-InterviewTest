import { useState } from 'react';

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
        <div>
            <form id="Login" onSubmit={handleLogin}>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleInputChange}
                />
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleInputChange}
                />
                <input
                    type="checkbox"
                    name="remember_me"
                    id="remember_me"
                    onChange={handleInputChange}
                />
                <label>Remember Me</label>
                <button onClick={handleLogin}> Continue </button>
            </form>
            <div>
                <a href="#">Forgot password?</a>
            </div>
            <div>
                <a href="#">Contact Us</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Services</a>
            </div>
        </div>
    )
}