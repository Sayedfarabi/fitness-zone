import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const PaymentPage = () => {
    const { user } = useContext(AuthContext)
    const data = useLoaderData()
    const product = data?.product;
    // console.log(product);
    return (
        <section>
            <div className='py-4 md:py-12'>
                <div className="m-4">
                    <h3 className="text-3xl my-4 text-lime-700"> Wellcome to , <strong className=''>{user?.displayName}</strong></h3>
                    <p className="text-2xl ">Payment for <strong className='text-blue-500'>{product?.productName}</strong>, <br></br>
                        <span className="text-xl"> Please pay <strong className='text-orange-500'>${product?.resalePrice}</strong> for your Exercise Equipment...</span></p>
                </div>

                <div className='my-8'>
                    <h1 className='text-center text-2xl text-blue-500'>This Page is being updated</h1>
                </div>
            </div>
        </section>
    );
};

export default PaymentPage;