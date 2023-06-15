import React, { useContext } from 'react';
import CategoryCard from './category-card/CategoryCard';
import { DatabaseContext } from '../../../layout/Root';

const CategoriesSlider = () => {
    const { categories } = useContext(DatabaseContext)



    return (

        <div className='py-12 mx-auto'>
            <div className='text-center'>
                <h3 className='text-2xl md:text-4xl font-bold'><em>Our Categories</em></h3>
                <p className='text-xl text-gray-600 font-semibold'>-----X-----</p>
            </div>
            <div className='py-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

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

                </div>
            </div>
        </div>
    );
};

export default CategoriesSlider;