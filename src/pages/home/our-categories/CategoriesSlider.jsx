import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryCard from './category-card/CategoryCard';
import cyclingImg from '../../../assets/categories/cycling.png';
import dumbbellsImg from '../../../assets/categories/dumbbells.jpg';
import ellipticalImg from '../../../assets/categories/elliptical.jpg';
import treadmillsImg from '../../../assets/categories/treadmills.png';
import exerciseBikeImg from '../../../assets/categories/excercise_bike.png';
import bnmArtImg from '../../../assets/categories/b&m_art.jpg';
import sportsImg from '../../../assets/categories/team_sports.jpg';
import accessoriesImg from '../../../assets/categories/accessories.jpg';

const CategoriesSlider = () => {
    const categories = [
        {
            _id: "category001",
            name: "Cycling",
            body: "Are you looking for products in cycling category",
            image: cyclingImg
        },
        {
            _id: "category002",
            name: "Dumbbells",
            body: "Are you looking for products in dumbbells category",
            image: dumbbellsImg
        },
        {
            _id: "category003",
            name: "Elliptical",
            body: "Are you looking for products in elliptical category",
            image: ellipticalImg
        },

        {
            _id: "category004",
            name: "Treadmills",
            body: "Are you looking for products in treadmills category",
            image: treadmillsImg
        },
        {
            _id: "category005",
            name: "Exercise Bikes",
            body: "Are you looking for products in exercise bikes category",
            image: exerciseBikeImg
        },
        {
            _id: "category006",
            name: "B & M Arts",
            body: "Are you looking for products in boxing and material arts category",
            image: bnmArtImg
        },
        {
            _id: "category007",
            name: "Team Sports",
            body: "Are you looking for products in team sports category",
            image: sportsImg
        },
        {
            _id: "category008",
            name: "Fitness Accessories",
            body: "Are you looking for products in fitness accessories category",
            image: accessoriesImg
        }
    ]

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
            <div className='text-center text-white'>
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