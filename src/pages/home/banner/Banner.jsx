import React from 'react';
import { Link } from 'react-router-dom';
import slide1 from '../../../assets/slider/slider1.jpg';
import slide2 from '../../../assets/slider/slider_women.png';
import { Typewriter } from 'react-simple-typewriter'


const Banner = () => {
    return (
        <div>

            <div className='relative'>
                <div className="carousel w-full">

                    <div id="item1" className="carousel-item relative w-full ">
                        <div className='w-full carousel-image'>
                            <img src={slide1} className="w-full h-[400px] md:h-[550px] lg:h-[600px]" alt='slider' />
                        </div>


                        <div className='text-white absolute flex justify-start transform -translate-y-1/2 left-5 right-5 top-1/2'>
                            <div className='text-white ml-4 '>
                                <p className='text-xl md:text-4xl font-bold'>
                                    REASONABLE PRICE
                                </p>
                                <p className='text-2xl md:text-6xl font-bold'>
                                    <span>

                                        <Typewriter
                                            words={["FOR MAN'S"]}
                                            loop={3}
                                            cursor
                                            cursorStyle=''
                                            typeSpeed={100}
                                            deleteSpeed={70}
                                            delaySpeed={200}
                                        />
                                    </span>
                                </p>
                                <p className='text-2xl md:text-6xl font-bold'>
                                    FITNESS EQUIPMENTS
                                </p>

                                <div className='w-full my-4 md:my-8'>
                                    <button className='btn btn-md bg-red-500 text-white'>
                                        <Link to="/pages">Read More</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item2" className="carousel-item relative w-full">
                        <div className='w-full carousel-image'>
                            <img src={slide2} className="w-full h-[400px] md:h-[550px] lg:h-[600px]" alt='' />
                        </div>
                        <div className='text-white absolute flex justify-start transform -translate-y-1/2 left-5 right-5 top-1/2 '>
                            <div className='text-white ml-4 '>
                                <p className='text-xl md:text-4xl font-bold'>REASONABLE PRICE</p>
                                <p className='text-2xl md:text-6xl font-bold'>
                                    <span>

                                        <Typewriter
                                            words={["FOR WOMEN'S"]}
                                            loop={3}
                                            cursor
                                            cursorStyle=''
                                            typeSpeed={100}
                                            deleteSpeed={300}
                                            delaySpeed={200}
                                        />
                                    </span>
                                </p>
                                <p className='text-2xl md:text-6xl font-bold'> FITNESS EQUIPMENTS</p>

                                <div className='w-full my-8'>
                                    <button className='btn btn-md bg-red-500 text-white'>
                                        <Link to="">Read More</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="flex justify-center w-full gap-2 absolute bottom-4">
                    <a href="#item1" className="btn btn-sm text-black bg-white hover:bg-red-500 mx-1 hover:text-white">❮</a>
                    <a href="#item2" className="btn btn-sm text-black bg-white hover:bg-red-500 mx-1 hover:text-white">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;