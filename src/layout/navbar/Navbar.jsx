import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const fakeUserImage = "https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg";

    const signOutHandler = () => {
        logOut()
            .then(result => {
                toast.success("user sign out successfully")
            })
            .catch(err => {
                toast.error(err.message)
            })
    }
    return (
        <section>
            <div className="navbar bg-red-500 px-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-80">
                            <li className='hover:bg-white text-white hover:text-red-600 font-semibold'><Link to={"/"}>HOME</Link></li>
                            <li className='hover:bg-white text-white hover:text-red-600 font-semibold'><Link to={"/pages"}>PAGES</Link></li>
                            {/* <li className='hover:bg-white text-white hover:text-red-600 font-semibold'><Link to={"/blog"}>BLOG</Link></li> */}
                            <li className='hover:bg-white text-white hover:text-red-600 font-semibold'><Link to={"/about-us"}>ABOUT US</Link></li>
                            <li className='hover:bg-white text-white hover:text-red-600 font-semibold'><Link to={"/contact-us"}>CONTACT US</Link></li>
                        </ul>
                    </div>
                    <Link to={"/"} className="hidden md:inline-block normal-case text-xl p-2 border-2 border-white text-white bg-black font-semibold">
                        <em >Fitness<span className='text-red-600'>Zone</span></em>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='hover:bg-white text-white hover:text-red-600 font-semibold'><Link to={"/"}>HOME</Link></li>
                        <li className='hover:bg-white text-white hover:text-red-600 font-semibold'><Link to={"/pages"}>PAGES</Link></li>
                        {/* <li className='hover:bg-white text-white hover:text-red-600 font-semibold'><Link to={"/blog"}>BLOG</Link></li> */}
                        <li className='hover:bg-white text-white hover:text-red-600 font-semibold'><Link to={"/about-us"}>ABOUT US</Link></li>
                        <li className='hover:bg-white text-white hover:text-red-600 font-semibold'><Link to={"/contact-us"}>CONTACT US</Link></li>
                    </ul>
                </div>

                <div className="navbar-end flex items-center">
                    {
                        !(user?.uid) &&
                        <div>

                            <ul className="menu menu-horizontal px-1">
                                <li className='hover:bg-white text-white hover:text-red-600 font-semibold'><Link to={"/sign-in"}>SIGN IN</Link></li>
                                <li className='hover:bg-white text-white hover:text-red-600 font-semibold'><Link to={"/sign-up"}>SIGN UP</Link></li>
                            </ul>
                        </div>
                    }

                    {
                        (user?.uid) &&

                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL ? user.photoURL : fakeUserImage} alt='user' />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <Link to={"/"} className="justify-between">
                                        MY ACCOUNT
                                    </Link>
                                </li>
                                <li><Link to={"/"}>Settings</Link></li>
                                <li>
                                    <button onClick={signOutHandler} className='btn btn-sm w-full bg-black text-white hover:bg-red-500 capitalize'>Sign Out</button>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </div>




        </section>
    );
};

export default Navbar;