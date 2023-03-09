import { useQuery } from '@tanstack/react-query';
import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';

export const DatabaseContext = createContext();

const Root = () => {
    const data = useLoaderData()

    const { data: products = [], isLoading: isLoadingProducts, refetch: refetchProducts } = useQuery({
        queryKey: ["/products"],
        queryFn: async () => {
            try {
                const res = await fetch("https://fitness-zone-server.vercel.app/products")
                const data = await res.json()
                return data;
            } catch (error) {
                console.log(error);
            }
        }

    })

    const { data: bookings = [], isLoading: isLoadingBookings, refetch: refetchBookings } = useQuery({
        queryKey: ["/bookingProducts"],
        queryFn: async () => {
            try {
                const res = await fetch("https://fitness-zone-server.vercel.app/bookingProducts")
                const data = await res.json()
                return data;
            } catch (error) {
                console.log(error);
            }
        }

    })

    const { data: wishList = [], isLoading: isLoadingWishList, refetch: refetchWishList } = useQuery({
        queryKey: ["/wishProducts"],
        queryFn: async () => {
            try {
                const res = await fetch("https://fitness-zone-server.vercel.app/wishProducts")
                const data = await res.json()
                return data;
            } catch (error) {
                console.log(error);
            }
        }

    })
    const { data: usersData = [], isLoading: isLoadingUsers, refetch: refetchUsers } = useQuery({
        queryKey: ["/users"],
        queryFn: async () => {
            try {
                const res = await fetch("https://fitness-zone-server.vercel.app/users")
                const data = await res.json()
                return data;
            } catch (error) {
                console.log(error);
            }
        }

    })

    console.log(data);
    const users = usersData?.data;

    const databaseData = {
        categories: data,
        users: users,
        products: products,
        bookings: bookings,
        wishList: wishList,
        refetchProducts,
        isLoadingProducts,
        refetchBookings,
        isLoadingBookings,
        refetchWishList,
        isLoadingWishList,
        refetchUsers,
        isLoadingUsers
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