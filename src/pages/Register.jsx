import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {
    const {createNewUser,setUser} = useContext(AuthContext)

    const handleRegister = (e)=>{

        e.preventDefault();
        //get form data 
        const form = new FormData(e.target);

        const name = form.get("name");
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password")
        console.log({name, email, password, photo});

        createNewUser(email,password)
        .then((result) =>{
            const user = result.user
            setUser(user)
            console.log(user);
        })
        .catch((error) =>{
            const errorCode = error.code;
            const errorMessage = error.message
            console.log( errorMessage,errorCode);
        })



    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full rounded-none max-w-lg shrink-0 p-10">
                <h2 className="text-center text-2xl font-semibold ">Register  your account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name="photo" type="text" placeholder="photo URL" className="input input-bordered" required />
                    </div>
                    {/* email form */}
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
                        <button className="btn btn-neutral rounded-none">Register</button>
                    </div>
                </form>
                <p className="font-semibold text-center">Already Have An Account ? Please <Link className="text-red-500" to="/auth/register">Login</Link></p>
            </div>

        </div>
    );
};

export default Register;