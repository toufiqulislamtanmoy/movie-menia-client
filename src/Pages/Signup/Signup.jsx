import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2"
import useTitle from "../../hooks/useTitle";

const imageHostingToken = import.meta.env.VITE_IMGBB_KEY;
const Signup = () => {
    useTitle('Sign Up')
    const { userSignUp, updateUserInFo, userLogOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const imagHostingUrl = `https://api.imgbb.com/1/upload?&key=${imageHostingToken}`;
    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(imagHostingUrl, {
            method: "POST",
            body: formData
        }).then(res => res.json()).then(imgRes => {

            if (imgRes.success) {
                const imgurl = imgRes.data.display_url;
                const { name, email, password } = data;
                userSignUp(email, password).then((logedUser) => {
                    const newlyCreatedUser = logedUser.user;
                    console.log(newlyCreatedUser);
                    updateUserInFo(name, imgurl).then(() => {
                        const userDetails = {
                            name,
                            email,
                            profile_pic: imgurl,
                            role: 'user',
                            credit: 3
                        }
                        /********Insert user details in the database********/

                        fetch('https://movie-site-server.vercel.app/users', {
                            method: "POST",
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(userDetails)
                        }).then(res => res.json())
                            .then(data => {
                                reset();
                                userLogOut();
                                console.log(data)
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Account create successfully',
                                })
                                navigate("/login", { replace: true });
                            });


                    }).catch((error) => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: `${error}`,
                        })
                    });

                })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: `${errorMessage} - ${errorCode}`,
                        })
                    });




            }
        })
    };
    return (
        <div className="hero bg-base-700 my-36">
            <div className="card-body w-full lg:w-1/2 rounded-3xl shadow-2xl">
                <div className="divider text-2xl font-bold">Sign Up</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                        {errors.name && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                        {errors.email && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-xs w-full max-w-xs" />
                        {errors.image && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: true,
                            minLength: 6,
                            pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()\-=_+{};':"\\|,.<>/?]).+$/
                        })} placeholder="password" className="input input-bordered" />
                        {errors.password?.type === 'minLength' && <p className="text-red-500">Password Must be 6 Charecter Long</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-500">Password must have one uppercase lowercase symbol and number</p>}
                        {errors.password?.type === 'required' && <span className="text-red-500">This field is required</span>}
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign Up</button>
                    </div>

                    <p className="mt-3 space-x-2">Already Have an account? <Link className="text-blue-600 underline" to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Signup;