import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { MdPayments, MdPostAdd } from 'react-icons/md';

const ProductRow = ({ product, position }) => {
    const location = useLocation()
    const pathname = location.pathname;
    const serial = position + 1;

    return (
        <tr className='hover text-sm md:text-md'>
            <td>
                <div>
                    <p>{serial}</p>
                </div>
            </td>
            <td>
                <div>
                    <div className="avatar">
                        <div className="w-6 md:w-8 rounded-full ring ring-blue-300 ring-offset-base-100 ring-offset-2">
                            <img src={product?.image} alt="" />
                        </div>
                    </div>
                </div>
            </td>

            <td >
                <div>
                    <p>{product?.productName}</p>
                </div>
            </td>

            <td className=''>
                <div className='text-yellow-600'>
                    <p>{product?.inStock}</p>
                </div>
            </td>

            {
                (pathname === "/pages/order-list") &&
                <td className='text-lg md:text-xl'>
                    <button className='btn btn-xs md:btn-sm bg-white hover:bg-yellow-500 text-green-500 font-semibold  hover:text-white'>
                        <MdPayments></MdPayments>
                    </button>
                </td>
            }
            {
                (pathname === "/pages/wish-list") &&
                <td className='text-lg md:text-xl'>
                    <button className='btn btn-xs bg-white hover:bg-red-500 hover:text-white md:btn-sm text-yellow-600 font-semibold'>
                        <BsFillCartCheckFill></BsFillCartCheckFill>
                    </button>
                </td>
            }

            {
                (pathname === "/pages/product-list") &&
                <td className='text-lg md:text-xl'>
                    <button className='btn btn-xs bg-white hover:bg-red-500 hover:text-white md:btn-sm text-violet-600 font-semibold'>
                        <MdPostAdd></MdPostAdd>
                    </button>
                </td>
            }



            <td className='text-xl md:text-2xl text-red-600'>
                <button>
                    <MdDeleteForever></MdDeleteForever>
                </button>
            </td>
        </tr>
    );
};

export default ProductRow;