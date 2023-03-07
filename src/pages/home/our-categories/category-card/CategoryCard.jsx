import React from 'react';
import { Link } from 'react-router-dom';


const CategoryCard = ({ category }) => {
    return (


        <div className="group relative item-center justify-center overflow-hidden cursor-default hover:shadow-xl hover:shadow-black/30 trans transition-shadow">
            <div className="h-80 w-72">
                <img className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src={category?.image} alt="Product" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">

            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[70%] md:translate-y-[70%] group-hover:translate-y-0 transition-all">

                <div>
                    <h1 className='text-3xl font-bold text-white mb-8'>{category?.name}</h1>
                </div>
                <div>
                    <p className='text-md italic text-white mb-3 opacity-100 transition-opacity duration-300'>
                        {
                            category?.body?.length > 100 ? category?.body.slice(0, 100) : category?.body
                        }
                    </p>

                </div>
                <div className='mt-12'>
                    <button className=' btn btn-sm bg-red-500 hover:bg-orange-400 text-md capitalize text-white mx-4'>See More</button>
                </div>
            </div>

        </div>

        // <div className="card h-64 w-56 bg-base-200  shadow-xl mx-auto">
        //     <Link to={"/"}>
        //         <div className='hover:border hover:rounded-md hover:border-black'>
        //             <div className='h-1/2 mt-2'>
        //                 <figure className='p-1'>
        //                     <img className='h-28 w-24 rounded-md' src="https://cdn.shopify.com/s/files/1/0584/9867/8984/products/717_uoIVHTL._AC_SL1500_280x315@2x.jpg?v=1669625310" alt="car!" />
        //                 </figure>
        //             </div>
        //             <div className="card-body h-1/2 ">
        //                 <h2 className="card-title">Exercise bike</h2>
        //                 <div className="card-actions justify-end">
        //                     <button className="btn bg-red-500 text-white btn-sm">more</button>
        //                 </div>
        //             </div>
        //         </div>
        //     </Link>
        // </div>
    );
};

export default CategoryCard;