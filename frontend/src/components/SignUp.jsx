import { useEffect, useState } from "react";
import { database } from "../config/FirebaseConfig";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        database.onAuthStateChanged((user) => {
            setUser(user);
        });
    }, []);
    
    useEffect(() => {
        if (user) {
            navigate('/dashboard');
        }
    }
    , [user]);


    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            if (password === confirmPassword) {
                await createUserWithEmailAndPassword(database, email, password);
                toast.success('Account successfully created, please signin now!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            } else {
                toast.error('Passwords are not matching', {
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
                return;
            }
        } catch (err) {
            toast.error('Account already exists!', {
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
            console.log(err.message);
        }
    }
    
    return (
        <div>
        <h1>Create Account</h1>
            <input
            type="email"
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
            <input
            type="password"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="m-3 p-3"
            />
            <br />
            <button onClick={handleSignUp}>Create!</button>
        </div>
    );
    };

export default SignUp;