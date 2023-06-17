
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const Login = () => {
    useTitle('Login');
    const { userLogin, LoginWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    const destination = location.state?.from?.pathname || "/"
    const navigate = useNavigate();
    // Social Login
    const handelGoogleLogin = () => {
        LoginWithGoogle().then((loggedInUser) => {
            // Signed in 
            const user = loggedInUser.user;
            console.log(user);

            const saveUser = {
                name: user.displayName,
                email: user.email,
                profile_pic: user.photoURL,
                role: 'user',
                credit: 3
            }
            fetch("https://movie-site-server.vercel.app/users", {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
            }).then(res => res.json()).then(data => {
                console.log(data);
                if (data.insertedId || data.message) {
                    navigate(destination, { replace: true })
                    console.log(destination);
                    Swal.fire({
                        icon: 'success',
                        title: 'Login successfully',
                        showConfirmButton: true,

                    })

                }
            })
            // ...
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error Message: ", errorMessage, "Error Code: ", errorCode);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            });
    }

    // Manual Login
    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        userLogin(email, password).then((loggedInUser) => {
            // Signed in 
            const user = loggedInUser.user;
            console.log(user);
            navigate(destination, { replace: true })
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login Successful',
                // title: `${destination}`,
                showConfirmButton: true,
            })
            // ...
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error Message: ", errorMessage, "Error Code: ", errorCode);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            });
    }
    return (
        <div className="hero bg-base-700 my-36 ">
            <div className="card-body w-full lg:w-1/2 rounded-3xl shadow-2xl">
                <div className="divider text-2xl font-bold">Login</div>
                <form onSubmit={handelLogin}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>

                    <p className="mt-3 space-x-2">Don't Have any account? <Link className="text-blue-600 underline" to="/signup">Sign up</Link></p>
                </form>
                <div className="divider text-2xl font-bold">Login With</div>
                <div className="text-center inline-block">
                    <button onClick={handelGoogleLogin} className="text-3xl btn btn-wide bg-transparent hover:bg-orange-100"><FcGoogle /></button>
                </div>
            </div>
        </div>
    );
};

export default Login;