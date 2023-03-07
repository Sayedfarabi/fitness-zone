import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './main-layout-component/admin-sidebar/AdminSidebar';
import BuyerSidebar from './main-layout-component/buyer-sidebar/BuyerSidebar';
import CategorySidebar from './main-layout-component/category-sidebar/CategorySidebar';
import SellerSidebar from './main-layout-component/seller-sidebar/SellerSidebar';

const Main = () => {
    return (
        <section>
            <div className='text-2xl flex-none md:flex'>
                <div className='border-2 w-full md:w-1/4 h-fit md:min-h-[80vh]'>
                    <div>
                        <CategorySidebar></CategorySidebar>
                    </div>
                    <div>
                        <BuyerSidebar></BuyerSidebar>
                    </div>
                    <div>
                        <SellerSidebar></SellerSidebar>
                    </div>
                    <div>
                        <AdminSidebar></AdminSidebar>
                    </div>
                </div>
                <div className='border-2 border-green-500 w-full '>
                    <Outlet></Outlet>
                </div>
            </div>
        </section>
    );
};

export default Main;