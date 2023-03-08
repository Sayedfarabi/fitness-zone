import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import ProductRow from '../../../component/product-row/ProductRow';
import { AuthContext } from '../../../context/AuthProvider';
import { DatabaseContext } from '../../../layout/Root';

const OrderList = () => {
    const { user } = useContext(AuthContext)
    const { bookings } = useContext(DatabaseContext);
    const bookProduct = bookings?.filter(data => data?.userEmail === user?.email);

    const deleteHandler = (id) => {
        fetch(`http://localhost:5000/deleteBookingProduct?id=${id}`, {
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
                                <th>Payment</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody className='text-center'>

                            {
                                bookProduct &&
                                bookProduct.map(data => {
                                    return <ProductRow
                                        key={data?._id}
                                        product={data}
                                        deleteHandler={deleteHandler}
                                        position={bookProduct.indexOf(data)}>
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

export default OrderList;