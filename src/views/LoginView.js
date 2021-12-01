import { useState } from 'react';
import { useNavigate } from 'react-router';
import { loginUserToApi } from '../services/authService';

const LoginView = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(
        {
            email: "",
            password: ""
        }
    )

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log("handlesubmit1")
            const userResponse = await loginUserToApi(user);
            console.log("handlesubmit2")
            navigate("/");
            await window.location.reload();
        }   catch (error) {
            console.log(error);
        }

        setUser({
            email: "",
            password: ""
        })
    }

    return (
        <div className="container mt-5">
            <form className="form">
                <h3>Login View</h3>
                <input  
                    onChange={handleChange}
                    name="email"
                    value={user.email}
                    className= "form-control"
                    type="text"
                    placeholder="email"
                />
                <input 
                    onChange={handleChange}
                    name="password"
                    value={user.password}
                    className="form-control"
                    type="password"
                    placeholder="password"
                />
                <button
                    onClick={handleSubmit}
                    className="form-control btn btn-success">
                        Log In
                </button>
            </form>
        </div>
    )
}

export default LoginView;