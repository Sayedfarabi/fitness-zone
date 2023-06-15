import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import AdminSidebar from './main-layout-component/admin-sidebar/AdminSidebar';
import BuyerSidebar from './main-layout-component/buyer-sidebar/BuyerSidebar';
import CategorySidebar from './main-layout-component/category-sidebar/CategorySidebar';
import SellerSidebar from './main-layout-component/seller-sidebar/SellerSidebar';
import { DatabaseContext } from './Root';

const Main = () => {
    const { user } = useContext(AuthContext)
    const { users } = useContext(DatabaseContext)
    const databaseUser = users?.find(DbUser => DbUser?.email === user?.email)
    // console.log(databaseUser);

    return (
        <section>
            <div className='text-2xl flex-none md:flex'>
                <div className=' w-full md:w-1/4 min-h-fit md:min-h-screen bg-slate-200'>
                    <div className='py-4 w-full h-full md:py-0 static md:fixed'>
                        <div>
                            <CategorySidebar></CategorySidebar>
                        </div>
                        {
                            databaseUser?.userRole === "buyer" &&
                            <div>
                                <BuyerSidebar></BuyerSidebar>
                            </div>
                        }
                        {
                            databaseUser?.userRole === "seller" &&
                            <div>
                                <SellerSidebar></SellerSidebar>
                            </div>
                        }
                        {
                            databaseUser?.userRole === "admin" &&
                            <div>
                                <AdminSidebar></AdminSidebar>
                            </div>
                        }
                    </div>
                </div>
                <div className='border-2 bg-white w-full min-h-screen '>
                    <Outlet></Outlet>
                </div>
            </div>
        </section>
    );
};

export default Main;