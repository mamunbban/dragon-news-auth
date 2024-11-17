import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Login = () => {

    const { signInUser, setUser} = useContext(AuthContext)

    const handleLogin = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({email, password});

        signInUser(email,password)
        .then((result) =>{
            console.log(result.user);
            const user = result.user;
            setUser(user)

        })
        .then((error) =>{
            alert( error.code);
        })

    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full rounded-none max-w-lg shrink-0 p-10">
                <h2 className="text-center text-2xl font-semibold ">Login your account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Login</button>
                    </div>
                </form>
                <p className="font-semibold text-center"> Don’t Have Any Account ? <Link className="text-red-500" to="/auth/register">Register</Link></p>
            </div>

        </div>
    );
};

export default Login;