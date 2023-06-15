import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AdminSidebar = () => {


    const location = useLocation();
    const pathname = location?.pathname;
    const isAdCategory = pathname === "/pages/add-category";
    const isAddAdmin = pathname === "/pages/add-admin";
    const isBuyerUser = pathname === "/pages/buyer-users";
    const isSellerUser = pathname === "/pages/seller-users";
    return (
        <section>
            <div className='ml-2 font-semibold text-center md:text-start mt-4'>
                <h3 className='border-b-2 border-red-600 md:border-b-3 inline-block'>DASHBOARD</h3>
            </div>
            <div className='mt-2'>
                <ul className='text-sm md:text-lg font-semibold ml-2 md:ml-4 grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-1 text-center md:text-start'>

                    <li className={`${isAdCategory && "bg-black text-white w-full rounded-sm"} md:pl-2`} >
                        <Link to={`/pages/add-category`}>
                            <button>
                                Add Category
                            </button>
                        </Link>
                    </li>

                    <li className={`${isAddAdmin && "bg-black text-white w-full rounded-sm"} md:pl-2`} >
                        <Link to={`/pages/add-admin`}>
                            <button>
                                Add Admin
                            </button>
                        </Link>
                    </li>

                    <li className={`${isBuyerUser && "bg-black text-white w-full rounded-sm"} md:pl-2`} >
                        <Link to={`/pages/buyer-users`}>
                            <button>
                                Buyer Users
                            </button>
                        </Link>
                    </li>

                    <li className={`${isSellerUser && "bg-black text-white w-full rounded-sm"} md:pl-2`} >
                        <Link to={`/pages/seller-users`}>
                            <button>
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