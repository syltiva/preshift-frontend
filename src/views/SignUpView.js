import { useState } from 'react';
import { signUpUser } from '../services/authService'

const Signup = () => {
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
    }

    return (
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
                />
                <input
                    value={user.email}
                    onChange={handleChange}
                    name="email"
                    placeholder="email"
                    type="text"
                    className="form-control"
                />
                <input
                    value={user.password}
                    onChange={handleChange}
                    name="password"
                    placeholder="password"
                    type="password"
                    className="form-control"
                />
                <button
                    onClick={handleSubmit}
                    className="form-control btn btn-success">
                    Sign Up
                </button>
        </form>
    </div>
    );
};
    
export default Signup;