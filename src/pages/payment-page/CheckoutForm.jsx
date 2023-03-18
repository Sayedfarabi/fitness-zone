import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const CheckoutForm = ({ product, setSuccess, setTransactionId }) => {
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState("");
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState("");
    // console.log(clientSecret);


    useEffect(() => {

        fetch(`https://fitness-zone-server.vercel.app/create-payment-intent`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('fitnessZone')}`
            },
            body: JSON.stringify(product),
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data?.clientSecret)
            });
    }, [product]);

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })

        if (error) {
            setCardError(error.message)
        } else {
            setCardError("")
        }

        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: product?.userName,
                        email: product?.userEmail
                    },
                },
            },
        );

        setSuccess("")
        setTransactionId("")

        if (confirmError) {
            setCardError(confirmError.message)
            setProcessing(false)
            return
        }

        if (paymentIntent?.status === "succeeded") {
            setSuccess("Congrats! Your payment completed")
            setTransactionId(paymentIntent?.id)

            const paymentInfo = {
                status: paymentIntent?.status,
                transactionId: paymentIntent?.id,
                productId: product?.productId,
                buyerName: product?.userName,
                buyerEmail: product?.userEmail

            }
            fetch(`https://fitness-zone-server.vercel.app/payment`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${localStorage.getItem('fitnessZone')}`
                },
                body: JSON.stringify(paymentInfo)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.success) {
                        toast.success(result?.message)
                    }
                })
        }
        setProcessing(false)





    }



    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <div className='flex justify-between'>
                <div className='mt-4'>
                    <p className='text-red-400 ml-0 text-sm '>{cardError}</p>
                </div>
                <div className='flex justify-end'>
                    <button className='btn btn-sm bg-lime-500 mt-4 ' type="submit"
                        disabled={!stripe || processing || !clientSecret}>
                        Pay
                    </button>
                </div>
            </div>

        </form>
    );
};

export default CheckoutForm;