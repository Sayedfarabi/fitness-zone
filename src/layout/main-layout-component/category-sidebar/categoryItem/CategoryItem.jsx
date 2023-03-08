import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DatabaseContext } from '../../../Root';

const CategoryItem = ({ category }) => {
    const { products } = useContext(DatabaseContext);
    const count = products?.filter(product => product?.categoryId === category?._id)
    const location = useLocation()
    const isSelected = `/pages/category/${category?._id}` === location?.pathname;
    // console.log(location);
    return (

        <li className={`${isSelected && "bg-black text-white w-full rounded-sm"} md:pl-2`} >
            <Link to={`/pages/category/${category?._id}`}>
                <button>
                    {category?.title} ({count.length})
                </button>
            </Link>
        </li>
    );
};


export default CategoryItem;