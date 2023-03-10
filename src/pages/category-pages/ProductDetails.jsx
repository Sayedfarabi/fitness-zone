import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { BiCartDownload } from 'react-icons/bi';
import { GiEternalLove } from 'react-icons/gi';
import { AuthContext } from '../../context/AuthProvider';
import { DatabaseContext } from '../../layout/Root';
import { toast } from 'react-hot-toast';

const ProductDetails = () => {
    const data = useLoaderData()
    const product = data?.product;
    const productPostedTime = product?.postedTime;
    const postedTime = new Date(productPostedTime).toDateString()
    const navigate = useNavigate();
    // console.log(postedTime);



    const { user } = useContext(AuthContext)
    const { refetchBookings, refetchWishList, wishList, bookings } = useContext(DatabaseContext);

    const userEmail = user?.email;
    const productId = product?._id;
    const userHaveWishList = wishList.find(data => (data?.userEmail === userEmail) && (data?.productId === productId))
    const userHaveBookings = bookings.find(data => (data?.userEmail === userEmail) && (data?.productId === productId))

    const newProduct = {
        userName: user?.displayName,
        userEmail: user?.email,
        productId: product?._id,
        productName: product?.productName,
        image: product?.image,
        productPrice: product?.resalePrice
    }

    const cartHandle = () => {
        fetch("https://fitness-zone-server.vercel.app/addBookingList", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('fitnessZone')}`
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(result => {
                if (result?.success) {
                    refetchBookings()
                    navigate("/pages/order-list")
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
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(result => {
                if (result?.success) {
                    refetchWishList()
                    navigate("/pages/wish-list")
                    toast.success(`${product?.productName} added to wish list`)
                } else {
                    toast.error(result?.message)
                }
            })
    }
    return (
        <section className='py-12'>
            <div className='grid grid-cols-1 md:grid-cols-3 border-2 h-full m-4 md:m-8'>
                <div className='m-4 col-span-1 flex justify-center items-center'>
                    <div>
                        <div>
                            <img className='h-full w-full' src={product?.image} alt="" />
                        </div>
                    </div>
                </div>
                <div className='m-4 col-span-2'>
                    <div className='flex justify-between items-center'>
                        <div>

                            <h1 className='text-2xl text-orange-500'>{product?.productName}</h1>

                        </div>
                        <div>
                            <p className='text-sm'>Posted Date : {postedTime}</p>
                        </div>
                    </div>
                    <div className="rating rating-sm">
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                    </div>
                    <div className='text-xl flex justify-between items-center'>

                        <div>
                            <h1>Original Price : $<span className='text-purple-500'><del className='text-black'>{product?.originalPrice}</del></span></h1>
                        </div>

                        <div>
                            <h1>Resale Price : $<span className='text-orange-500'>{product?.resalePrice}</span></h1>
                        </div>

                    </div>
                    <div>
                        <p className='text-base'>
                            <span className='font-semibold mr-1'>Description:</span>
                            {product?.body}

                        </p>
                    </div>
                    <div className=' flex-none md:flex justify-between items-center'>
                        <div>
                            <div className=' text-base'>
                                <div>
                                    <p><span className='font-semibold mr-1'>In Stock :</span> {product?.inStock}</p>
                                </div>
                                <div>
                                    <p><span className='font-semibold mr-1'>Condition :</span>
                                        {product?.condition}</p>
                                </div>
                                <div>
                                    <p><span className='font-semibold mr-1'>Used time :</span>
                                        {product?.yearsOfUsedProduct}</p>
                                </div>
                            </div>

                            <div className='text-base'>
                                <div>
                                    <p><span className='font-semibold mr-1'>Name :</span>
                                        {product?.sellerName}</p>
                                </div>
                                <div>
                                    <p><span className='font-semibold mr-1'>Location :</span>
                                        {product?.location}</p>
                                </div>
                                <div>
                                    <p><span className='font-semibold mr-1'>Phone :</span>
                                        {product?.phone}</p>
                                </div>
                                <div>
                                    <p><span className='font-semibold mr-1'>Email :</span>
                                        {product?.sellerEmail}</p>
                                </div>
                            </div>
                        </div>
                        <div className='mx-auto'>
                            <div className='mb-2'>
                                <button onClick={() => cartHandle()} className='btn btn-md bg-lime-600 hover:bg-black text-white px-6'
                                    disabled={userHaveBookings && true}> <span className='text-2xl mr-2'><BiCartDownload /></span> Add to Cart</button>
                            </div>
                            <div className='mb-2'>
                                <button onClick={() => wishHandle()} className='btn btn-md bg-yellow-600 hover:bg-black text-white px-6'
                                    disabled={userHaveWishList && true}> <span className='text-2xl mr-2'><GiEternalLove /></span> Add to Wish</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;