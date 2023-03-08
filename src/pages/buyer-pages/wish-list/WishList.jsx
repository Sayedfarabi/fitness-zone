import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import ProductRow from '../../../component/product-row/ProductRow';
import { AuthContext } from '../../../context/AuthProvider';
import { DatabaseContext } from '../../../layout/Root';

const WishList = () => {
    const { user } = useContext(AuthContext);
    const { wishList } = useContext(DatabaseContext);

    const wishProduct = wishList?.filter(data => data?.userEmail === user?.email);

    const cartHandle = product => {
        fetch("http://localhost:5000/addBookingList", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('fitnessZone')}`
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result?.success) {
                    toast.success(`${product?.productName} added to booking list`)
                } else {
                    toast.error(result?.message)
                }
            })
    }

    const deleteHandler = (id) => {
        fetch(`http://localhost:5000/deleteWishProduct?id=${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('fitnessZone')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    toast.success(result?.message)
                } else {
                    toast.error(result?.message)
                }
            })
    }
    return (
        <section>
            <section>
                <div className="overflow-x-auto py-4">
                    <table className=" table w-full">

                        <thead className='text-center text-md md:text-lg font-semibold'>
                            <tr>

                                <th>SL No</th>
                                <th>Product Image</th>
                                <th>Product Name</th>
                                <th>In Stock</th>
                                <th>Order</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody className='text-center'>
                            {
                                wishProduct &&
                                wishProduct.map(data => {
                                    return <ProductRow
                                        key={data?._id}
                                        product={data}
                                        cartHandle={cartHandle}
                                        deleteHandler={deleteHandler}
                                        position={wishProduct.indexOf(data)}
                                    >
                                    </ProductRow>
                                })
                            }


                        </tbody>
                    </table>
                </div>
            </section>
        </section>
    );
};

export default WishList;