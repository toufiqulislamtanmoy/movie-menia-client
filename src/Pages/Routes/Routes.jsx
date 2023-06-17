import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home/Home";
import MovieDetails from "../../Components/MovieDetails/MovieDetails";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import PrivetRoute from "./PrivetRoute";
import Addmovie from "../AdminPanel/AddMovie/Addmovie";
import Dashboard from "../../Layout/Dashboard";
import ManageMovie from "../AdminPanel/ManageMovie/ManageMovie";
import TvSerise from "../TvSerise/TvSerise";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/movieDetails/:id",
                element: <MovieDetails />,
                loader: ({ params }) => fetch(`https://movie-site-server.vercel.app/movies/${params.id}`)
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <Signup />
            },
            {
                path: "/tvSeries",
                element: <TvSerise />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivetRoute><Dashboard /></PrivetRoute>,
        children: [
            {
                path: "addMovie",
                element: <Addmovie />
            },
            {
                path: "manageMovie",
                element: <ManageMovie />
            }

        ]

    }
]);
export default router;