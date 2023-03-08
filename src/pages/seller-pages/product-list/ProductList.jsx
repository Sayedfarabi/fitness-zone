import React, { useContext } from 'react';
import ProductRow from '../../../component/product-row/ProductRow';
import { AuthContext } from '../../../context/AuthProvider';
import { DatabaseContext } from '../../../layout/Root';

const ProductList = () => {
    const { products } = useContext(DatabaseContext);
    const { user } = useContext(AuthContext)
    const sellerProducts = products?.filter(product => product?.sellerEmail === user?.email);
    // console.log(sellerProducts);
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
                                <th>Ad</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody className='text-center'>
                            {
                                sellerProducts &&
                                sellerProducts.map(product => {
                                    return <ProductRow
                                        key={product?._id}
                                        product={product}
                                        position={sellerProducts?.indexOf(product)}
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

export default ProductList;