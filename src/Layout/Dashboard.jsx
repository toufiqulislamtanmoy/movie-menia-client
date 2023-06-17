import { Link, NavLink, Outlet } from "react-router-dom";
import {
    FaPlusCircle,
    FaInfoCircle,
    FaUserSlash,
    FaBookReader,
    FaHistory
} from "react-icons/fa"


import { FaArrowCircleLeft, FaMoon, FaSun } from "react-icons/fa"

const Dashboard = () => {

    const navItems =
        <>

            <li><NavLink className={({ isActive }) => (isActive ? 'text-[#7E90FE]' : '')} to="/dashboard/manageMovie">Manage Movies <FaInfoCircle/></NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? 'text-[#7E90FE]' : '')} to="/dashboard/addMovie">Add Movies <FaPlusCircle /></NavLink></li>
        </>


    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
                {/* Navbar */}
                <div className="w-full navbar bg-base-300">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 justify-end lg:justify-start px-2 mx-2 text-2xl ">
                        <Link className="hover:text-info" to="/"><FaArrowCircleLeft /></Link>
                    </div>

                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}
                            {
                                navItems
                            }
                        </ul>
                    </div>
                </div>
                {/* Page content here */}

                <Outlet />

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200">
                    {/* Sidebar content here */}
                    {
                        navItems
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;