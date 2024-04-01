import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const submitHandler = async () => {
        if(email === '' || password === '') {
            setError('Please fill all the fields');
            return;
        }
        if(email === "admin" && password === "admin") {
            setError('Logged in successfully');
            navigate('/generate')
            return;
        }
        setError('Invalid credentials');
    };
    
    return (
        <div>
        <h1>Login</h1>
        
            <input
            type="password"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="m-3 p-3"
            />
            <br />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="m-3 p-3"
            />
            <br />
            <button onClick={submitHandler}>Sign Up</button>
        
        {error && <p>{error}</p>}
        </div>
    );
    };

export default Login;