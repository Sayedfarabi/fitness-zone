import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    const [bgSidebar, setBgSidebar] = useState("");
    return (
        <section>
            <div className='ml-2 font-semibold hidden md:block mt-4'>
                <h3>Dashboard</h3>
            </div>
            <div className='mt-2'>
                <ul className='text-sm md:text-lg font-semibold ml-2 md:ml-4 grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-1 text-center md:text-start'>



                    <li className={`${bgSidebar === "add-category" ?
                        'bg-red-500' :
                        'bg-black'} text-white w-full md:rounded-none md:pl-1`}>
                        <Link to={`/pages/add-category`}>
                            <button onClick={() => setBgSidebar("add-category")}>
                                Add Category
                            </button>
                        </Link>
                    </li>

                    <li className={`${bgSidebar === "add-admin" ?
                        'bg-red-500' :
                        'bg-black'} text-white w-full md:rounded-none md:pl-1`}>
                        <Link to={`/pages/add-admin`}>
                            <button onClick={() => setBgSidebar("add-admin")}>
                                Add Admin
                            </button>
                        </Link>
                    </li>

                    <li className={`${bgSidebar === "buyer-users" ?
                        'bg-red-500' :
                        'bg-black'} text-white w-full md:rounded-none md:pl-1`}>
                        <Link to={`/pages/buyer-users`}>
                            <button onClick={() => setBgSidebar("buyer-users")}>
                                Buyer Users
                            </button>
                        </Link>
                    </li>

                    <li className={`${bgSidebar === "seller-users" ?
                        'bg-red-500' :
                        'bg-black'} text-white w-full md:rounded-none md:pl-1`}>
                        <Link to={`/pages/seller-users`}>
                            <button onClick={() => setBgSidebar("seller-users")}>
                                Seller Users
                            </button>
                        </Link>
                    </li>



                </ul>
            </div>
        </section>
    );
};

export default AdminSidebar;