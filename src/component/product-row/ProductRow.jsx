import React, { useContext } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { MdPayments, MdPostAdd } from 'react-icons/md';
import { AuthContext } from '../../context/AuthProvider';


const ProductRow = ({ product, position, deleteHandler, advertiseHandler, cartHandle }) => {
    const location = useLocation()
    const pathname = location.pathname;
    const serial = position + 1;
    const { user } = useContext(AuthContext);

    const data = {
        userName: user?.displayName,
        userEmail: user?.email,
        productId: product?._id,
        productName: product?.productName,
        image: product?.image
    }


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
                <td className='text-xl md:text-2xl text-green-600'>
                    <button>
                        <MdPayments></MdPayments>
                    </button>
                </td>
            }
            {
                (pathname === "/pages/wish-list") &&
                <td className='text-xl md:text-2xl text-lime-600'>
                    <button onClick={() => cartHandle(data)}>
                        <BsFillCartCheckFill></BsFillCartCheckFill>
                    </button>
                </td>
            }

            {
                (pathname === "/pages/product-list") &&
                <td className='text-lg md:text-xl'>
                    <button onClick={() => advertiseHandler(product?._id)}
                        className='btn btn-xs bg-white hover:bg-red-500 hover:text-white md:btn-sm text-yellow-600 font-semibold'
                        disabled={product?.advertisement && true}
                    >
                        <MdPostAdd></MdPostAdd>
                    </button>
                </td>
            }



            <td className='text-xl md:text-2xl text-red-600'>
                <button onClick={() => deleteHandler(product?._id)}>
                    <MdDeleteForever></MdDeleteForever>
                </button>
            </td>
        </tr>
    );
};

export default ProductRow;