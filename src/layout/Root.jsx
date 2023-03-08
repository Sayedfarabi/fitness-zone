import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';

export const DatabaseContext = createContext();

const Root = () => {
    const data = useLoaderData()

    const categories = data?.data?.categories;
    const users = data?.data?.users?.data;
    const products = data?.data?.products;
    const bookings = data?.data?.bookings;
    const wishList = data?.data?.wishList;
    // console.log(bookings);
    const databaseData = {
        categories: categories,
        users: users,
        products: products,
        bookings: bookings,
        wishList: wishList
    }
    return (
        <section>
            <DatabaseContext.Provider value={databaseData}>
                <section>
                    <Navbar></Navbar>
                </section>
                <section className='min-h-[80vh] bg-slate-200'>
                    <Outlet></Outlet>
                </section>
                <Footer></Footer>
            </DatabaseContext.Provider>
        </section>
    );
};

export default Root;