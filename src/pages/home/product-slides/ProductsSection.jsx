import React from 'react';
import Slider from "react-slick";
import ProductCard from './product-card/ProductCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductsSection = () => {
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
    const products = [
        {
            _id: "product01",
            title: "Treadmill",
            image: "https://specials-images.forbesimg.com/imageserve/63063bf352b931c1f3653b4d/NordicTrack-Commercial-1750/960x0.jpg?cropX1=0&cropX2=689&cropY1=0&cropY2=447",
            price: 500,
            body: "If a dog chews shoes whose shoes does he choose?",
            category: "Treadmills",
            model: "sadf4152",
            condition: "new"
        },
        {
            _id: "product02",
            title: "Dumbbell",
            image: "https://static.toiimg.com/photo/msid-91493753/91493753.jpg",
            price: 400,
            body: "If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?",
            category: "Dumbbells",
            model: "sdam4152",
            condition: "new"
        },
        {
            _id: "product03",
            title: "cycling",
            image: "https://static-01.daraz.com.bd/p/e025123c0c00db8b0efe1928ea57eb68.jpg",
            price: 600,
            body: "If a dog chews shoes whose shoes does he choose?",
            category: "cyclings",
            model: "schyf4152",
            condition: "new"
        },
        {
            _id: "product04",
            title: "Exercise Bike",
            image: "https://gymstore.co.za/wp-content/uploads/2022/05/Sole-Fitness-B94-Upright-Bike-Product-Image-New-1.jpg",
            price: 900,
            body: "If a dog chews shoes whose shoes does he choose?",
            category: "Exercises Bikes",
            model: "sbikef4152",
            condition: "new"
        },
        {
            _id: "product05",
            title: "Treadmill",
            image: "https://static-01.daraz.com.bd/p/675c4fe4996f7a9e426afcd9c92a7f3e.jpg",
            price: 400,
            body: "If a dog chews shoes whose shoes does he choose?",
            category: "Treadmills",
            model: "sadf4152",
            condition: "new"
        },
        {
            _id: "product06",
            title: "Elliptical",
            image: "https://4.imimg.com/data4/QQ/VI/MY-21529311/elliptical-exercise-machine-500x500.jpg",
            price: 1000,
            body: "If a dog chews shoes whose shoes does he choose?",
            category: "Elliptical",
            model: "sadf4152",
            condition: "new"
        },
        {
            _id: "product07",
            title: "Dumbbell",
            image: "https://www.shutterstock.com/image-photo/pair-black-dumbbells-isolated-on-260nw-586412594.jpg",
            price: 500,
            body: "If a dog chews shoes whose shoes does he choose?",
            category: "Dumbbells",
            model: "sadf4152",
            condition: "new"
        },
        {
            _id: "product08",
            title: "Ball",
            image: "https://cdn.shopify.com/s/files/1/0737/6657/products/8-blue_1400x1400.jpg?v=1609704058",
            price: 200,
            body: "If a dog chews shoes whose shoes does he choose?",
            category: "Team Sports",
            model: "sadf4152",
            condition: "new"
        },
    ]
    return (
        <div className='py-12 mx-12'>
            <div className='mb-12'>
                <div className='text-center'>
                    <h3 className='text-2xl md:text-4xl font-bold'><em>Our Products</em></h3>
                    <p className='text-xl text-gray-600 font-semibold'>-----X-----</p>
                </div>
            </div>
            <div>
                <Slider {...settings}>
                    {
                        products.map(product => {
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