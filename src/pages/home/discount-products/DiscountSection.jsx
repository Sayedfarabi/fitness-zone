import React from 'react';
import { Link } from 'react-router-dom';
import bike from '../../../assets/discount/bike.jpg';
import accessories from '../../../assets/discount/clothing.png';

const DiscountSection = () => {
    return (
        <div className='p-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className="card w-full bg-base-100 shadow-xl mx-auto">
                    <Link to={"/"}>
                        <div className='hover:border-2 hover:border-white'>
                            <div className="card-body h-52 w-full bg-red-500 text-white">
                                <h2 className="card-title text-2xl md:text-3xl font-semibold">EXERCISE BIKE</h2>
                                <p className='text-lg md:text-xl font-semibold'>03 sets - 40% off - Just only this week</p>
                            </div>
                            <div className='h-52'>
                                <figure>
                                    <img className='w-full h-52' src={bike} alt="Shoes" />
                                </figure>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="card w-full bg-base-100 shadow-xl mx-auto ">

                    <Link to={"/"}>
                        <div className='hover:border-2 hover:border-white'>
                            <div className='h-52'>
                                <figure>
                                    <img className='w-full h-52' src={accessories} alt="Shoes" />
                                </figure>
                            </div>
                            <div className="card-body h-52 w-full bg-red-500 text-white">
                                <h2 className="card-title text-2xl md:text-3xl font-semibold">FITNESS ACCESSORIES</h2>
                                <p className='text-lg md:text-xl font-semibold'>03 sets - 40% off - Just only this week</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DiscountSection;