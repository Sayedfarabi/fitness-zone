import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_Stripe_Publishable_Key)

const PaymentPage = () => {
    const { user } = useContext(AuthContext)
    const data = useLoaderData()
    const product = data?.product;
    // console.log(product);
    const [success, setSuccess] = useState("")
    const [transactionId, setTransactionId] = useState("")

    return (
        <section>
            <div className='py-4 md:py-12'>
                <div className="m-4">
                    <h3 className="text-3xl my-4 text-lime-700"> Wellcome to , <strong className=''>{user?.displayName}</strong></h3>
                    <p className="text-2xl ">Payment for <strong className='text-blue-500'>{product?.productName}</strong>, <br></br>
                        <span className="text-xl"> Please pay <strong className='text-orange-500'>${product?.resalePrice}</strong> for your Exercise Equipment...</span></p>
                </div>


            </div>
            <div className=' my-12'>
                <div className='text-center'>
                    {
                        success && <div>
                            <p className='text-green-500'>{success}</p>
                            <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
                        </div>
                    }
                </div>
                <div className='border p-6 py-12 rounded-md w-96 mx-auto my-8' >
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            product={product}
                            setSuccess={setSuccess}
                            setTransactionId={setTransactionId} />
                    </Elements>
                </div>
            </div>
        </section>
    );
};

export default PaymentPage;