import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({ category, setBgCategory, bgCategory }) => {
    // console.log(bgCategory);
    return (
        <li className={`${bgCategory === category?.name ? 'bg-red-500' : 'bg-black'} text-white w-full md:rounded-none md:pl-1`}>
            <Link to={`/pages/category/${category?._id}`}>
                <button onClick={() => setBgCategory(category?.name)}>
                    {category?.name} ({category?.counter})
                </button>
            </Link>

        </li>
    );
};

export default CategoryItem;