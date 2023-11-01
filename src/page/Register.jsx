import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {createUser} = useAuth();

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();

        const toastID = toast.loading('Logging in');
        try {
            await createUser(email, password)
            .then(res => {
                console.log(res);
                
                toast.success('Logged in...', {id: toastID});
                navigate('/');
            })
        } catch(err) {
            console.log(err);
            toast.error( err.message, {id: toastID});
        }
        // toast.success('Logged in...');
        // navigate('/');
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                            onBlur={(e) => setEmail(e.target.value)}
                            type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input 
                            onBlur={(e) => setPassword(e.target.value)}
                            type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;