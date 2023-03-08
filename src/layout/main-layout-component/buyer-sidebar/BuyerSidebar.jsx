import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BuyerSidebar = () => {

    const location = useLocation();
    const pathname = location?.pathname;
    const isOrderList = pathname === "/pages/order-list";
    const isWishList = pathname === "/pages/wish-list";
    return (
        <section>
            <div className='ml-2 font-semibold text-center md:text-start mt-4'>
                <h3 className='underline md:no-underline'>Dashboard</h3>
            </div>
            <div className='mt-2'>
                <ul className='text-sm md:text-lg font-semibold ml-2 md:ml-4 grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-1 text-center md:text-start'>


                    <li className={`${isOrderList && "bg-black text-white w-full rounded-sm"} md:pl-2`} >
                        <Link to={`/pages/order-list`}>
                            <button>
                                Order List
                            </button>
                        </Link>
                    </li>
                    <li className={`${isWishList && "bg-black text-white w-full rounded-sm"} md:pl-2`} >
                        <Link to={`/pages/wish-list`}>
                            <button>
                                Wish List
                            </button>
                        </Link>
                    </li>

                </ul>
            </div>
        </section>
    );
};

export default BuyerSidebar;