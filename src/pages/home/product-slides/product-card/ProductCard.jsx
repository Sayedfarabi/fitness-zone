import React from 'react';
import { BiCartDownload } from 'react-icons/bi';
import { GiEternalLove } from 'react-icons/gi';

const ProductCard = ({ product }) => {
    return (


        <div className="group relative item-center justify-center overflow-hidden cursor-default hover:shadow-xl hover:shadow-black/30 trans transition-shadow">
            <div className="h-96 w-72">
                <img className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src={product?.image} alt="Product" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">

            </div>
            <div className="absolute inset-0 flex justify-end mt-2 mr-2 ">
                <div className=''>
                    <p>
                        <span className="badge bg-fuchsia-500 badge-md">{product?.condition}</span>
                    </p>
                </div>

            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[70%] md:translate-y-[70%] group-hover:translate-y-0 transition-all">

                <div>
                    <h1 className='text-3xl font-bold text-white mb-8'>{product?.title}</h1>
                </div>
                <div>
                    <p className='text-lg italic text-white mb-3 opacity-100 transition-opacity duration-300'>
                        {
                            product?.body?.length > 50 ? product?.body.slice(0, 50) : product?.body
                        }
                    </p>
                    <p className='text-lg italic text-white mb-3 opacity-100 transition-opacity duration-300 font-bold'>
                        Price : $
                        <span className='text-amber-500'>
                            {product?.price}
                        </span>
                    </p>
                </div>
                <div className='mt-12'>

                    <button className=' btn btn-sm bg-red-500 hover:bg-orange-400 text-2xl capitalize text-white mx-4'><GiEternalLove></GiEternalLove></button>
                    <button className=' btn btn-sm bg-red-500 hover:bg-orange-400  text-2xl capitalize text-white  mx-4'><BiCartDownload></BiCartDownload></button>


                </div>
            </div>

        </div>


    );
};

export default ProductCard;