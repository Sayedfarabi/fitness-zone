import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const CounterSection = () => {
    const [counterStart, setCounterStart] = useState(false);
    return (
        <ScrollTrigger onEnter={() => setCounterStart(true)} onExit={() => setCounterStart(false)}>
            <section className=' py-12 bg-base-200'>
                <div className='mx-4'>
                    <div className='text-center'>
                        <h1 className='text-2xl md:text-4xl'>About Us And Our Members</h1>
                        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quia inventore? Molestiae, quos.</p>
                    </div>
                    <div className='h-96 py-20 flex justify-evenly  w-full'>
                        <div className=''>
                            <div className='h-24 w-24 md:h-36 md:w-36 flex justify-center items-center border-2 border-black'>
                                <div className='text-center text-lg md:text-2xl'>
                                    <h1>Buyers</h1>
                                    <p className='font-semibold text-orange-400'>
                                        {
                                            counterStart &&
                                            <CountUp start={0} end={500} duration={2} delay={0} />
                                        }+
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-end'>
                            <div className='h-24 w-24 md:h-36 md:w-36 flex justify-center items-center border-2 border-black'>
                                <div className='text-center text-lg md:text-2xl'>
                                    <h1>Products</h1>
                                    <p className='font-semibold text-orange-400'>
                                        {
                                            counterStart &&
                                            <CountUp start={0} end={5000} duration={2} delay={0} />
                                        }+
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='h-24 w-24 md:h-36 md:w-36 flex justify-center items-center border-2 border-black'>
                                <div className='text-center text-lg md:text-2xl'>
                                    <h1>Sellers</h1>
                                    <p className='font-semibold text-orange-400'>
                                        {
                                            counterStart &&
                                            <CountUp start={0} end={500} duration={2} delay={0} />
                                        }+
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollTrigger>
    );
};

export default CounterSection;