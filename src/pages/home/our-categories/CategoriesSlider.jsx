import React, { useContext } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryCard from './category-card/CategoryCard';
import { DatabaseContext } from '../../../layout/Root';

const CategoriesSlider = () => {
    const { categories } = useContext(DatabaseContext)


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (

        <div className='py-12 md:pb-24 mx-12'>
            <div className='text-center'>
                <h3 className='text-2xl md:text-4xl font-bold'><em>Our Categories</em></h3>
                <p className='text-xl text-gray-600 font-semibold'>-----X-----</p>
            </div>
            <div className='py-12'>
                <div className=''>
                    <Slider {...settings}>
                        {
                            categories &&
                            categories.map(category => {
                                return <CategoryCard
                                    key={category?._id}
                                    category={category}
                                >
                                </CategoryCard>
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default CategoriesSlider;