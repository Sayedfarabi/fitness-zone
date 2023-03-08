import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SellerSidebar = () => {


    const location = useLocation();
    const pathname = location?.pathname;
    const isProductList = pathname === "/pages/product-list";
    const isAddProduct = pathname === "/pages/add-product";
    return (
        <section>
            <div className='ml-2 font-semibold text-center md:text-start mt-4'>
                <h3 className='underline md:no-underline'>Dashboard</h3>
            </div>
            <div className='mt-2'>
                <ul className='text-sm md:text-lg font-semibold ml-2 md:ml-4 grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-1 text-center md:text-start'>


                    <li className={`${isProductList && "bg-black text-white w-full rounded-sm"} md:pl-2`} >
                        <Link to={`/pages/product-list`}>
                            <button>
                                Product List
                            </button>
                        </Link>
                    </li>
                    <li className={`${isAddProduct && "bg-black text-white w-full rounded-sm"} md:pl-2`}>
                        <Link to={`/pages/add-product`}>
                            <button>
                                Add Product
                            </button>
                        </Link>
                    </li>



                </ul>
            </div>
        </section>
    );
};

export default SellerSidebar;