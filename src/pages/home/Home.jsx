import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Banner from './banner/Banner';
import ContactUs from './contact-us/ContactUs';
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
                <InfoSection></InfoSection>
            </section>
            <section>
                <Testimonials></Testimonials>
            </section>
            <section>
                <ContactUs></ContactUs>
            </section>
        </section>
    );
};

export default Home;