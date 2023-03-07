import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';

const Root = () => {
    return (
        <section>
            <section>
                <Navbar></Navbar>
            </section>
            <section className='min-h-[80vh] bg-slate-200'>
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </section>
    );
};

export default Root;