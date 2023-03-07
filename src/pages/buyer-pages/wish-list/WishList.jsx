import React from 'react';
import ProductRow from '../../../component/product-row/ProductRow';

const WishList = () => {
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
                                <th>Payment Status</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody className='text-center'>
                            <ProductRow></ProductRow>
                            <ProductRow></ProductRow>
                            <ProductRow></ProductRow>
                            <ProductRow></ProductRow>
                            <ProductRow></ProductRow>
                            <ProductRow></ProductRow>
                            <ProductRow></ProductRow>


                        </tbody>
                    </table>
                </div>
            </section>
        </section>
    );
};

export default WishList;