import React from 'react';
import { Link } from 'react-router-dom';
import banner1 from "../../../assets/second-banner/banner1.png";
import banner2 from "../../../assets/second-banner/banner2.png";

const SecondBanner = () => {
    return (

        <div className='py-12 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4'>
                <div className='relative  md:col-span-2 mx-auto mb-6'
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-delay="50"
                >
                    <Link to={"/"}>
                        <div className=' w-full'>
                            <div className=' w-full'>

                                <img className=' w-full' src={banner1} alt="" />

                            </div>
                            <div className='absolute text-white top-1/3 md:top-1/2 translate-x-1/4'>
                                <h1 className='text-2xl md:text-4xl font-semibold'>
                                    BODY <br />
                                    MEN'S
                                </h1>
                                <p>Do something today that your future <br />
                                    self will thank you for.</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='relative  md:col-span-1 mx-auto w-full'
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    <Link to={"/"}>
                        <div className='w-full '>
                            <div className='w-full'>

                                <img className=' w-full' src={banner2} alt="" />

                            </div>
                            <div className=' absolute text-white top-1/2 translate-x-1/2 md:translate-x-1/3'>
                                <h4 className='text-xl md:text-3xl font-semibold text-center'>DISCOVER <br />
                                    OUR PROMOTION</h4>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default SecondBanner;