import React from 'react';
import Banner from './banner/Banner';
import BlogSection from './blog-section/BlogSection';
import ContactUs from './contact-us/ContactUs';
import CounterSection from './counter-section/CounterSection';
import DiscountSection from './discount-products/DiscountSection';
import InfoSection from './info-section/InfoSection';
import CategoriesSlider from './our-categories/CategoriesSlider';
import ProductsSection from './product-slides/ProductsSection';
import SecondBanner from './second-banner/SecondBanner';
import Testimonials from './testimonial/Testimonials';


const Home = () => {

    return (
        <section>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <SecondBanner></SecondBanner>
            </section>
            <section>
                <CategoriesSlider></CategoriesSlider>
            </section>
            <section>
                <DiscountSection></DiscountSection>
            </section>
            <section>
                <ProductsSection></ProductsSection>
            </section>
            <section>
                <BlogSection></BlogSection>
            </section>
            <section>
                <InfoSection></InfoSection>
            </section>
            <section>
                <Testimonials></Testimonials>
            </section>
            <section>
                <CounterSection></CounterSection>
            </section>
            <section>
                <ContactUs></ContactUs>
            </section>
        </section>
    );
};

export default Home;