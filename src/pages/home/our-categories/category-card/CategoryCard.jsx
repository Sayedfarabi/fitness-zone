import React from 'react';
import { Link } from 'react-router-dom';


const CategoryCard = () => {
    return (

        <div className="card h-64 w-56 bg-base-200  shadow-xl mx-auto">
            <Link to={"/"}>
                <div className='hover:border hover:rounded-md hover:border-black'>
                    <div className='h-1/2 mt-2'>
                        <figure className='p-1'>
                            <img className='h-28 w-24 rounded-md' src="https://cdn.shopify.com/s/files/1/0584/9867/8984/products/717_uoIVHTL._AC_SL1500_280x315@2x.jpg?v=1669625310" alt="car!" />
                        </figure>
                    </div>
                    <div className="card-body h-1/2 ">
                        <h2 className="card-title">Exercise bike</h2>
                        <div className="card-actions justify-end">
                            <button className="btn bg-red-500 text-white btn-sm">more</button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CategoryCard;