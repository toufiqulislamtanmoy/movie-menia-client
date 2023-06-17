import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

const Main = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>

    );
};

export default Main;