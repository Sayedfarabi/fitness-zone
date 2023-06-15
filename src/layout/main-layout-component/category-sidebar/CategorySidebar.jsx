import React, { useContext } from 'react';
import { DatabaseContext } from '../../Root';
import CategoryItem from './categoryItem/CategoryItem';

const CategorySidebar = () => {
    const { categories } = useContext(DatabaseContext);
    // console.log(categories);


    return (
        <section>
            <div className='ml-2 font-semibold text-center md:text-start mt-4'>
                <h3 className='border-b-2 md:border-b-3 border-red-600 inline-block'>CATEGORIES</h3>
            </div>
            <div className='mt-2'>
                <ul className='text-sm md:text-lg font-semibold ml-2 md:ml-4 grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-1 text-center md:text-start'>

                    {categories &&
                        categories.map(category => {
                            return <CategoryItem
                                key={category?._id}
                                category={category}
                            >
                            </CategoryItem>
                        })}

                </ul>
            </div>
        </section>
    );
};

export default CategorySidebar;