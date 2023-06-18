import { useContext } from "react";
import logo from "../../assets/logo/logo.png"
import userphoto from "../../assets/usericon/user.jpg"
import { Link } from "react-router-dom"
import { AuthContext } from "../../Providers/AuthProvider";
import useUserRole from "../../hooks/useUserRole";
import { FaGem, FaMoon, FaSignInAlt, FaSun } from 'react-icons/fa'
import useThemeToggle from "../../hooks/useThemeToggle";
const Navbar = () => {
    const { user, userLogOut } = useContext(AuthContext);
    const [role, refetch] = useUserRole();
    const { theme, toggleTheme } = useThemeToggle();
    console.log(role.role);
    const handelLogOut = async () => {
        await userLogOut(); // Wait for the logout operation to complete
        console.log('Inside Handel Logout');
        await refetch();
        console.log(role.role);
    }
    const navitem =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tvSeries">Tv Series</Link></li>
            {(role.role === 'admin' && user) && <li><Link to="/dashboard/addMovie">Admin Panel</Link></li>}

        </>
    return (
        <div className="navbar bg-base-300 p-5 fixed top-0 z-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10">
                        {
                            navitem
                        }
                    </ul>
                </div>
                <Link to="/" className="hidden lg:block btn btn-ghost normal-case text-xl">
                    <img className="" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navitem
                    }
                </ul>
            </div>
            <div className="navbar-end space-x-5">
                {/*  */}
                {user?.email ?
                    <div className="flex-none space-x-5">
                        <div className="dropdown dropdown-end">
                            <div className="indicator">
                                <button className="btn btn-circle btn-outline">
                                    <FaGem className="text-3xl text-info" />
                                    <span className={`badge ${role.credit<5 ?'badge-error':'badge-ghost'}  indicator-item`}>{role.credit}</span>
                                </button>
                            </div>
                            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">{role.credit} Credit Remaining</span>
                                    
                                    <div className="card-actions">
                                        <Link className="btn btn-block btn-outline">Buy Credit</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL ? user.photoURL : userphoto} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li>
                                    <button
                                        title={theme === 'dark' ? 'Light' : 'Dark'}
                                        onClick={toggleTheme}
                                    >
                                        {theme === 'dark' ? (
                                            <>
                                                <FaSun className="text-yellow-300 text-xl" />
                                                <span>Light</span>
                                            </>
                                        ) : (
                                            <>
                                                <FaMoon />
                                                <span>Dark</span>
                                            </>
                                        )}
                                    </button>
                                </li>
                                <li><button onClick={handelLogOut}><FaSignInAlt />Logout</button></li>
                            </ul>
                        </div>
                    </div>
                    :
                    <Link to="/login">Login</Link>
                }






                {/*  */}
                {/* {user?.email ? <div className="flex items-center gap-5">

                    <div className="avatar">
                        <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL ? user.photoURL : userphoto} />
                        </div>
                    </div>
                    <button onClick={handelLogOut}><FaSignInAlt /></button>
                    <div className="flex gap-2 items-center"><FaGem className="text-info text-2xl" />{role.credit}</div>
                </div>
                    :
                    <Link to="/login">Login</Link>
                } */}

            </div>
        </div>
    );
};

export default Navbar;