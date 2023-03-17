import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <section className='py-6 md:py-12'>
            <div className='py-6 md:py-12 mx-6 md:mx-20'>
                <div>
                    <div>
                        <h1 className='text-4xl md:text-6xl text-center'>About FitnessZone</h1>
                    </div>
                    <div className='my-8 md:my-16 text-gray-600'>
                        <p className='my-4 md:my-6 text-base'>
                            FitnessZone is the largest commercial used fitness equipment bidding platform in the country.
                        </p>
                        <p className='my-4 md:my-6 text-base'>
                            We pride ourselves on making the experience of buying and selling gym equipment faster and better for everyone involved.
                        </p>
                        <p className='my-4 md:my-6 text-base'>
                            Our simple, streamlined process guarantees gyms sell their used gym equipment for the best price.
                        </p>
                        <p className='my-4 md:my-6 text-base'>
                            We are also the first choice of commercial dealers for buying used fitness equipment. We offer a genuine win-win proposition to gym operators and used fitness equipment traders.
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className='text-4xl md:text-6xl text-center'>Why Chose FitnessZone?</h1>
                    </div>
                    <div className='my-8 md:my-16 text-gray-600'>
                        <p className='my-4 md:my-6 text-base'>
                            FitnessZone works with world’s best commercial traders. They will review used gym equipment packages on our platform before making a blind bid.
                        </p>
                        <p className='my-4 md:my-6 text-base'>
                            The highest price is then sent to the seller (gym operator). The gym operator can then decide to accept or decline the offer within 90 days. When the price is accepted FitnessZone makes sure the goods are collected at a convenient time and the payment is made in full.
                        </p>
                        <p className='my-4 md:my-6 text-base'>
                            If you are looking to work with us and want to become a trader on the platform, please find out more by <span className='text-blue-500 underline'><Link to={"/"}>clicking here</Link></span>.
                        </p>
                        <p className='my-4 md:my-6 text-base'>
                            If you would like to SELL with us then please <span className='text-blue-500 underline'><Link to={"/"}>click here</Link></span> to find out more.
                        </p>
                        <p className='my-4 md:my-6 text-base'>
                            Our team will help the trade-in process of used fitness equipment from start to finish. The fitness industry has welcomed our platform because of our honest and transparent process. We have a reputation for operating with respect and integrity within the commercial fitness arena.
                        </p>
                        <p className='my-4 md:my-6 text-base'>
                            For the first time gyms can get real market value prices for their unwanted equipment. We also provide a superior extraction service that comes with all the latest legal and insurance documentation .
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className='text-4xl md:text-6xl text-center'>Looking Forward Working With You</h1>
                    </div>
                    <div className='my-8 md:my-16 text-gray-600'>
                        <p className='my-4 md:my-6 text-base'>
                            When it comes to the payment, gym operators get the funds in two agreed payment instalment. They will get 50% before the extraction and the balance on the final day of extraction (or no later than 3 working days post extraction).
                        </p>
                        <p className='my-4 md:my-6 text-base'>
                            FitnessZone is the global leader in managing the commercial fitness equipment buy-back process.  We are highly trusted and respected by the world’s largest fitness equipment manufacturers. We work closely with Life Fitness, Technology, Matrix Fitness, Precox, Pulse Fitness, Freemason and Draco. Many have on-going partnership agreements or official license agreements.
                        </p>
                        <p className='my-4 md:my-6 text-base'>
                            We are also lucky enough to be working with leading gym operators Holmes Place, Fitness First, Retro Fitness and Anytime Fitness.
                        </p>
                        <p className='my-4 md:my-6 text-base'>
                            After launching the business in 2015, we are very excited to see where the business goes beyond 2020. We’ll look forward to working with you too!
                        </p>

                        <p className='my-4 md:my-6 text-base'>
                            If you need to check out more information about how the platform works, please <span className='text-blue-500 underline'><Link to={"/"}>click here</Link></span>.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutUs;