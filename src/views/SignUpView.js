import { useState } from 'react';
import { signUpUser } from '../services/authService'
import { useNavigate } from 'react-router';

const Signup = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        signUpUser(user);
        setUser({
            name: "",
            email: "",
            password: ""
        })
        alert (`Welcome ${user.name}!`)
        await navigate("/");

    }

    return (
        <div className="login-background">
        <div className="container">
            <form className="form">
                <h3>Sign Up</h3>
                <input
                    value={user.name}
                    name= "name"
                    onChange = {handleChange}
                    placeholder = "name"
                    type= "text"
                    className="form-control"
                /><br/>
                <input
                    value={user.email}
                    onChange={handleChange}
                    name="email"
                    placeholder="email"
                    type="text"
                    className="form-control"
                /><br/>
                <input
                    value={user.password}
                    onChange={handleChange}
                    name="password"
                    placeholder="password"
                    type="password"
                    className="form-control"
                /><br/>
                <button
                    onClick={handleSubmit}
                    className="form-control btn btn-outline-dark">
                    Sign Up
                </button>
        </form>
    </div>
    </div>
    );
};
    
export default Signup;