import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../../assets/blog-section/compare-treadmills.jpg';
import image2 from '../../../assets/blog-section/download.jpg';
import image3 from '../../../assets/blog-section/lfod-blog-1-header-image.jpg';

const BlogSection = () => {
    return (
        <section className='py-12'>
            <div>
                <div className='text-center'>
                    <h1 className='text-2xl md:text-4xl text-bold'>Latest</h1>
                    <p className='text-gray-400 my-4 md:my-8'>coming soon some items for the buyers and sellers of all our team</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-2 py-6'>

                    <div className='mx-auto'>
                        <Link>
                            <div>
                                <p className='text-xl font-semibold text-orange-500'>Announcement</p>
                                <div className='h-72 w-80 border-2 border-black'>
                                    <img className='h-full w-full' src={image1} alt="" />
                                </div>
                                <p className='text-xl font-semibold'>Building an Inclusive Future:</p>
                                <p className='text-xl font-semibold'>2023 Diversity at Fitness Zone</p>
                            </div>
                        </Link>
                    </div>


                    <div className='mx-auto'>
                        <Link>
                            <div>
                                <p className='text-xl font-semibold text-orange-500'>Announcement</p>
                                <div className='h-72 w-80 border-2 border-black'>
                                    <img className='h-full w-full' src={image2} alt="" />
                                </div>
                                <p className='text-xl font-semibold'>Building an Inclusive Future:</p>
                                <p className='text-xl font-semibold'>2023 Diversity at Fitness Zone</p>
                            </div>
                        </Link>
                    </div>

                    <div className='mx-auto'>
                        <Link>
                            <div>
                                <p className='text-xl font-semibold text-orange-500'>Announcement</p>
                                <div className='h-72 w-80 border-2 border-black'>
                                    <img className='h-full w-full' src={image3} alt="" />
                                </div>
                                <p className='text-xl font-semibold'>Building an Inclusive Future:</p>
                                <p className='text-xl font-semibold'>2023 Diversity at Fitness Zone</p>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BlogSection;