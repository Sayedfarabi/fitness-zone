import React, { useContext } from 'react';
import Slider from "react-slick";
import ProductCard from './product-card/ProductCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DatabaseContext } from '../../../layout/Root';

const ProductsSection = () => {
    const { products } = useContext(DatabaseContext);
    const availableProducts = products.filter(product => product?.inStock === "available")

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
            <div className='mb-12'>
                <div className='text-center'>
                    <h3 className='text-2xl md:text-4xl font-bold'><em>Our Products</em></h3>
                    <p className='text-xl text-gray-600 font-semibold'>-----X-----</p>
                </div>
            </div>
            <div>
                <Slider {...settings}>
                    {
                        availableProducts?.map(product => {
                            return <ProductCard
                                key={product?._id}
                                product={product}
                            >
                            </ProductCard>
                        })
                    }
                </Slider>
            </div>
        </div>
    );
};

export default ProductsSection;