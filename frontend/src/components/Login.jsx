import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { database } from "./FirebaseConfig";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Bounce, ToastContainer, toast } from "react-toastify";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
             await signInWithEmailAndPassword(database, email, password);
            toast.success('successfully signed in', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        } catch (err) {
            console.log(err.message);
            toast.error('Something went wrong, please try again!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                
            });
        }
    }
    
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