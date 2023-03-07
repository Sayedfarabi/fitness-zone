import React, { useState } from 'react';
import CategoryItem from './categoryItem/CategoryItem';

const CategorySidebar = () => {
    const categories = [
        {
            _id: "cat01",
            name: "Treadmills",
            counter: 12
        },
        {
            _id: "cat02",
            name: "Exercise Bikes",
            counter: 10
        },
        {
            _id: "cat03",
            name: "Dumbbells",
            counter: 8
        },
        {
            _id: "cat04",
            name: "Cycling",
            counter: 13
        },
        {
            _id: "cat05",
            name: "Boxing & martial Arts",
            counter: 6
        },
        {
            _id: "cat06",
            name: "Fitness Accessories",
            counter: 12
        },
        {
            _id: "cat07",
            name: "Elliptical",
            counter: 9
        },
        {
            _id: "cat08",
            name: "Team Sports",
            counter: 5
        }
    ]
    const [bgCategory, setBgCategory] = useState("");
    // console.log(bgCategory);

    return (
        <section>
            <div className='ml-2 font-semibold hidden md:block mt-4'>
                <h3>Categories</h3>
            </div>
            <div className='mt-2'>
                <ul className='text-sm md:text-lg font-semibold ml-2 md:ml-4 grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-1 text-center md:text-start'>

                    {categories &&
                        categories.map(category => {
                            return <CategoryItem
                                key={category?._id}
                                category={category}
                                bgCategory={bgCategory}
                                setBgCategory={setBgCategory}
                            >
                            </CategoryItem>
                        })}


                    {/* <li onClick={setBgCategory("")} className=' bg-black text-white w-full md:rounded-none md:pl-1'>
                        Treadmills (00)
                    </li> */}

                    {/* <li onClick={setBgCategory("")} className=' bg-black text-white w-full md:rounded-none md:pl-1'>
                        Exercises Bikes (00)
                    </li>
                    <li onClick={setBgCategory("")} className=' bg-black text-white w-full md:rounded-none md:pl-1'>
                        Dumbbells (00)
                    </li>
                    <li onClick={setBgCategory("")} className=' bg-black text-white w-full md:rounded-none md:pl-1'>
                        Cycling (00)
                    </li>
                    <li onClick={setBgCategory("")} className=' bg-black text-white w-full md:rounded-none md:pl-1'>
                        Boxing & Martial Arts (00)
                    </li>
                    <li onClick={setBgCategory("")} className=' bg-black text-white w-full md:rounded-none md:pl-1'>
                        Fitness Accessories (00)
                    </li>
                    <li onClick={setBgCategory("")} className=' bg-black text-white w-full md:rounded-none md:pl-1'>
                        Elliptical Trainers (00)
                    </li>
                    <li onClick={setBgCategory("")} className=' bg-black text-white w-full md:rounded-none md:pl-1'>
                        Team Sports (00)
                    </li> */}

                </ul>
            </div>
        </section>
    );
};

export default CategorySidebar;