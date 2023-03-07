import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BuyerSidebar = () => {
    const [bgSidebar, setBgSidebar] = useState("");
    return (
        <section>
            <div className='ml-2 font-semibold hidden md:block mt-4'>
                <h3>Dashboard</h3>
            </div>
            <div className='mt-2'>
                <ul className='text-sm md:text-lg font-semibold ml-2 md:ml-4 grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-1 text-center md:text-start'>


                    <li className={`${bgSidebar === "order-list" ?
                        'bg-red-500'
                        :
                        'bg-black'} text-white w-full md:rounded-none md:pl-1`}>
                        <Link to={`/pages/order-list`}>
                            <button onClick={() => setBgSidebar("order-list")}>
                                Order List
                            </button>
                        </Link>
                    </li>
                    <li className={`${bgSidebar === "wish-list" ?
                        'bg-red-500'
                        :
                        'bg-black'} text-white w-full md:rounded-none md:pl-1`}>
                        <Link to={`/pages/wish-list`}>
                            <button onClick={() => setBgSidebar("wish-list")}>
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