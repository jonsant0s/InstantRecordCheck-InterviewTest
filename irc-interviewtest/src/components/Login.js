import { useState } from 'react';


export const Login = () => {
    const [loginValues, setLoginValues] = useState({
        username: "",
        password: "",
    });

    const handleInputChange = (e) => {
        e.persist();
        let prev = { ...loginValues };
        prev[e.target.id] = e.target.value;

        setLoginValues(prev);
    }

    const handleLogin = (e) => {
        
    }


    return (
        <div>
            <form id="Login">
                <label>Email</label>
                <input
                    type="email"
                    name="login_email"
                    id="login_email"
                />
                <label>Password</label>
                <input
                    type="password"
                    name="login_password"
                    id="login_password"
                />
                <input
                    type="checkbox"
                    name="remember_me"
                    id="remember_me"
                />
                <label>Remember Me</label>
            </form>
            <div>
                <a href="#">Forgot password?</a>
            </div>
        </div>
    )
}