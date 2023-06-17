import { useContext } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure"
import { AuthContext } from "../../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const imageHostingToken = import.meta.env.VITE_IMGBB_KEY;
const Addmovie = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const {user} = useContext(AuthContext);
    console.log(user);
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate();
    const imagHostingUrl = `https://api.imgbb.com/1/upload?&key=${imageHostingToken}`;

    const onSubmit = data => {
        console.log(data);
        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(imagHostingUrl, {
            method: "POST",
            body: formData
        }).then(res => res.json()).then(imgRes => {
            console.log(imgRes.data.display_url);
            delete data.image;
            const movieDetails = {
                ...data,
                banner: imgRes.data.display_url,
            };
            if (imgRes.success) {
                axiosSecure.post('/addMovie', movieDetails).then(res => {
                    if (res.data.insertedId) {
                        reset();
                        Swal.fire(
                            'Movie is Added into the list!',
                            'See the list in home page',
                            'success'
                        )
                        navigate('/',{replace:true});
                    }
                })
            }
        })
    }
    return (
        <div className="hero min-h-screen ">
            <div className="my-36 lg:my-0 hero-content flex-col lg:flex-row-reverse border border-red-600 rounded-2xl glass-bg w-2/4">

                <div className="card-body w-full rounded-3xl ">
                    <div className="divider text-2xl font-bold">Add Movie</div>
                    <form onSubmit={handleSubmit(onSubmit)} >

                        {/* Movie Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Movie Name</span>
                            </label>
                            <input type="text" {...register("movieName", { required: true })} placeholder="Movie Name"
                                className="input input-bordered" />
                            {errors.movieName?.type === 'required' && <span className="text-red-500">Movie Name can not be empty</span>}
                        </div>
                        {/* Movie Poster */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Movie Poster</span>
                            </label>
                            <input type="file" className="file-input file-input-bordered file-input-xs w-full max-w-xs"
                                {...register("image", { required: true })} />

                            {errors.image?.type === 'required' && <span className="text-red-500">Class Banner can not be empty</span>}
                        </div>
                        {/* IMDB rating */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">IMDB Rating</span>
                            </label>
                            <input type="text" {...register("imdbRating", { required: true })} placeholder="IMDB Rating"
                                className="input input-bordered" />
                            {errors.imdbRating?.type === 'required' && <span className="text-red-500">imdb Rating can not be empty</span>}
                        </div>
                        {/* story line */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Story Line</span>
                            </label>
                            <input type="text" {...register("storyLine", { required: true })} placeholder="Story Line"
                                className="input input-bordered" />
                            {errors.storyLine?.type === 'required' && <span className="text-red-500">Story Line can not be empty</span>}
                        </div>
                        {/* releaseDate seats */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Release Date</span>
                            </label>
                            <input type="date" {...register("releaseDate", { required: true })} placeholder="Available seats"
                                className="input input-bordered" />
                            {errors.releaseDate?.type === 'required' && <span className="text-red-500">Release Date can not be
                                empty</span>}
                        </div>
                        {/* Languages*/}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Languages</span>
                            </label>
                            <input type="text" {...register("languages", { required: true })} placeholder="Languages"
                                className="input input-bordered" />
                            {errors.languages?.type === 'required' && <span className="text-red-500">Languages can not be empty</span>}
                        </div>
                        {/* movie category*/}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select {...register("category", { required: true })} className="select select-bordered">
                                <option value="">Select a Category</option>
                                <option value="action">Action</option>
                                <option value="adventure">Adventure</option>
                                <option value="comedy">Comedy</option>
                                <option value="drama">Drama</option>
                                <option value="others">Others</option>
                                {/* Add more options as needed */}
                            </select>
                            {errors.category?.type === 'required' && <span className="text-red-500">Category cannot be empty</span>}
                        </div>

                         {/* movie type*/}
                         <div className="form-control">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <select {...register("type", { required: true })} className="select select-bordered">
                                <option value="">Select a Type</option>
                                <option value="movie">Movie</option>
                                <option value="webSeries">Web Series</option>
                                {/* Add more options as needed */}
                            </select>
                            {errors.type?.type === 'required' && <span className="text-red-500">Category cannot be empty</span>}
                        </div>

                        {/* movie industry*/}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Industry</span>
                            </label>
                            <select {...register("industry", { required: true })} className="select select-bordered">
                                <option value="">Select a Industry</option>
                                <option value="hollywood">Hollywood</option>
                                <option value="bollywood">Bollywood</option>
                                <option value="tollywood">Tollywood</option>
                                <option value="others">Others</option>
                                {/* Add more options as needed */}
                            </select>
                            {errors.industry?.type === 'required' && <span className="text-red-500">Industry cannot be empty</span>}
                        </div>

                        {/* star cast */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Star Cast</span>
                            </label>
                            <input type="text" {...register("starCast", { required: true })} placeholder="Star Casts"
                                className="input input-bordered" />
                            {errors.starCast?.type === 'required' && <span className="text-red-500">Star Cast can not be empty</span>}
                        </div>
                        {/* hosting url */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Hosting Url</span>
                            </label>
                            <input type="text" {...register("hostingUrl", { required: true })} placeholder="Hosting Url"
                                className="input input-bordered" />
                            {errors.hostingUrl?.type === 'required' && <span className="text-red-500">Hosting Url can not be empty</span>}
                        </div>
                        {/* youtube trailer */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Youtube Trailer</span>
                            </label>
                            <input type="text" {...register("youtubeTrailer", { required: true })} placeholder="Trailer"
                                className="input input-bordered" />
                            {errors.youtubeTrailer?.type === 'required' && <span className="text-red-500">Enter the Trailer</span>}
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Movie</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Addmovie;