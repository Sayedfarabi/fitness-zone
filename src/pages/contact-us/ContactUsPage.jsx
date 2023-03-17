import React from 'react';
import { Link } from 'react-router-dom';
import ContactUs from '../home/contact-us/ContactUs';

const ContactUsPage = () => {
    return (
        <section className='py-8 md:py-12'>
            <div className='mx-8 md:mx-20 text-gray-600'>
                <div className='my-8 md:my-12'>
                    <h1 className='text-center text-3xl md:text-5xl font-semibold text-blue-500'>About FitnessZone</h1>
                </div>
                <div>
                    <p>
                        SinceFitnessZone launched in 2015, it has become the most popular way gym operators sell their unwanted gym equipment. Now, with offices across the world, we pride ourselves on making the experience of buying and selling gym equipment faster and better for everyone involved. We guarantee gyms get the best price for their used gym equipment. For more info about us please <span className='text-blue-500 underline'><Link to={"/"}>click here</Link></span>.
                    </p>
                </div>
            </div>
            <div className='mx-8 md:mx-20 text-gray-600'>
                <div className='my-8 md:my-12'>
                    <h1 className=' text-xl md:text-3xl font-semibold'>Why Chose Us?</h1>
                </div>
                <div className='my-4 md:my-6'>
                    <p>
                        FitnessZone is also the first choice of the best commercial gym equipment dealers in the world. These traders make a blind bid on the gym equipment packages on our platform and the highest price is then sent to the seller (gym operator). The seller can then decide to accept or decline the offer within 90 days. When the price is accepted FitnessZone makes sure the goods are collected at a convenient time and payment is made in full. Our team will make sure you have a smooth and easy trade-in process from start to finish. We manage a superior extraction service complete with all the latest legal and insurance documentation .
                    </p>
                </div>
                <div className='my-4 md:my-6'>
                    <p>
                        When it comes to the payment, gym operators get the funds in two agreed payment instalment. They will get 50% before the extraction and the balance on the final day of extraction (or no later than 3 working days post extraction). FitnessZone is the global leader in managing the commercial fitness equipment buy-back process.
                    </p>
                </div>
                <div className='my-4 md:my-6'>
                    <p>
                        We have earned our enviable reputation with the world’s largest fitness equipment manufacturers. We work closely with Life Fitness, Technogym, Matrix Fitness, Precox, Pulse Fitness, Freemason and Draco. Many have on-going partnership agreements or official license agreements. We are proud to be working with leading gym operators Holmes Place, Fitness First, Retro Fitness and Anytime Fitness. Our business has gone from strength to strength since launching in 2015. Now we are bigger and more successful than ever with an expanding global network and cant wait to see where the business goes beyond 2020. We look forward to working with you too!
                    </p>
                </div>
            </div>
            <div className='my-20 mx-4 md:mx-20'>
                <ContactUs></ContactUs>
            </div>
        </section>
    );
};

export default ContactUsPage;