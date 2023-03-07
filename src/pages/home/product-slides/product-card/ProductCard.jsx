import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="card w-60 bg-base-200 shadow-xl mx-auto">
            <figure><img className='h-36 w-full border-2 border-black' src={product?.image} alt="Shoes" /></figure>
            <div className="card-body bg-slate-400 text-white h-48">
                <h2 className="card-title">
                    {product?.title}
                    <div className="badge bg-blue-500 text-white">{product?.condition}</div>
                </h2>
                <p>
                    {
                        product?.body?.length > 50 ? product?.body.slice(0, 50) : product?.body
                    }
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-sm bg-red-500 text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;