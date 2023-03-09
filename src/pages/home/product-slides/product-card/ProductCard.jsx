import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { BiCartDownload } from 'react-icons/bi';
import { GiEternalLove } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';
import { DatabaseContext } from '../../../../layout/Root';

const ProductCard = ({ product }) => {
    const { user } = useContext(AuthContext)
    const { refetchBookings, refetchWishList, wishList, bookings } = useContext(DatabaseContext);

    const userEmail = user?.email;
    const productId = product?._id;
    const userHaveWishList = wishList.find(data => (data?.userEmail === userEmail) && (data?.productId === productId))
    const userHaveBookings = bookings.find(data => (data?.userEmail === userEmail) && (data?.productId === productId))
    // console.log(userHaveBookings);

    const data = {
        userName: user?.displayName,
        userEmail: user?.email,
        productId: product?._id,
        productName: product?.productName,
        image: product?.image
    }

    const cartHandle = () => {
        fetch("https://fitness-zone-server.vercel.app/addBookingList", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('fitnessZone')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result?.success) {
                    refetchBookings()
                    toast.success(`${product?.productName} added to booking list`)
                } else {
                    toast.error(result?.message)
                }
            })
    }

    const wishHandle = () => {
        fetch("https://fitness-zone-server.vercel.app/addWishList", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('fitnessZone')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result?.success) {
                    refetchWishList()
                    toast.success(`${product?.productName} added to wish list`)
                } else {
                    toast.error(result?.message)
                }
            })
    }
    return (


        <div className="group relative item-center justify-center overflow-hidden cursor-default hover:shadow-xl hover:shadow-black/30 trans transition-shadow mx-auto">
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
                    <h1 className='text-2xl font-bold text-white mb-12'>{product?.productName}</h1>
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
                            {product?.resalePrice}
                        </span>
                    </p>
                </div>
                <div className='mt-12'>

                    {
                        user?.uid &&
                        <div className='w-full'>
                            <button onClick={() => wishHandle(product)}
                                className=' btn btn-sm bg-yellow-500 hover:bg-red-500 text-2xl capitalize text-black hover:text-white mx-4' disabled={userHaveWishList && true}><GiEternalLove></GiEternalLove></button>

                            <button onClick={() => cartHandle(product)}
                                className=' btn btn-sm bg-lime-400 hover:bg-red-500  text-2xl capitalize text-black hover:text-white  mx-4'
                                disabled={userHaveBookings && true}><BiCartDownload></BiCartDownload></button>
                        </div>
                    }
                    <Link to={`/pages/product/${product?._id}`}>
                        <button className=' btn btn-sm bg-fuchsia-500 hover:bg-red-500  text-sm capitalize text-white w-full mt-4'>Read More</button>
                    </Link>


                </div>
            </div>

        </div>


    );
};

export default ProductCard;