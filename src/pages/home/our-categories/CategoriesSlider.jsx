import React from 'react';
import CategoryCard from './category-card/CategoryCard';

const CategoriesSlider = () => {
    return (
        <div>
            <div className='text-center'>
                <h3 className='text-2xl md:text-4xl font-bold'><em>Our Categories</em></h3>
                <p className='text-xl text-gray-600 font-semibold'>-----X-----</p>
            </div>
            <div className='py-12'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6'>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                </div>
            </div>
        </div>
    );
};

export default CategoriesSlider;