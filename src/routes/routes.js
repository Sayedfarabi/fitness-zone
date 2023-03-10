import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import AdminRoute from "../admin-route/AdminRoute";
import Main from "../layout/Main";
import Root from "../layout/Root";
import AboutUs from "../pages/about-us/AboutUs";
import SignIn from "../pages/account-pages/sign-in/SignIn";
import SignUp from "../pages/account-pages/sign-up/SignUp";
import AddAdmin from "../pages/admin-pages/add-admin/AddAdmin";
import AddCategory from "../pages/admin-pages/add-category/AddCategory";
import BuyerUsers from "../pages/admin-pages/buyer-users/BuyerUsers";
import SellerUsers from "../pages/admin-pages/seller-users/SellerUsers";
import Blog from "../pages/blog/Blog";
import OrderList from "../pages/buyer-pages/order-list/OrderList";
import WishList from "../pages/buyer-pages/wish-list/WishList";
import ProductDetails from "../pages/category-pages/ProductDetails";
import Products from "../pages/category-pages/Products";
import ContactUsPage from "../pages/contact-us/ContactUsPage";
import ErrorPage from "../pages/error-page/ErrorPage";
import Home from "../pages/home/Home";
import PaymentPage from "../pages/payment-page/PaymentPage";
import AddProduct from "../pages/seller-pages/add-product/AddProduct";
import ProductList from "../pages/seller-pages/product-list/ProductList";
import WelcomePage from "../pages/welcome-page/WelcomePage";
import PrivateRoute from "../private-routes/PrivateRoute";
import { dataLoadToDatabase } from "./getDataToDatabase";


export const routes = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Root></Root>,
        loader: async () => await fetch("https://fitness-zone-server.vercel.app/"),
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/contact-us",
                element: <ContactUsPage></ContactUsPage>
            },
            {
                path: "/about-us",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/sign-up",
                element: <SignUp></SignUp>
            },
            {
                path: "/sign-in",
                element: <SignIn></SignIn>
            },
            {
                path: "/pages",
                errorElement: <ErrorPage></ErrorPage>,
                element: <Main></Main>,
                children: [
                    {
                        path: "/pages",
                        element: <WelcomePage></WelcomePage>
                    },
                    {
                        path: "/pages/add-category",
                        element: <PrivateRoute>
                            <AdminRoute><AddCategory></AddCategory></AdminRoute>
                        </PrivateRoute>
                    },
                    {
                        path: "/pages/buyer-users",
                        element: <PrivateRoute>
                            <AdminRoute><BuyerUsers></BuyerUsers></AdminRoute>
                        </PrivateRoute>
                    },
                    {
                        path: "/pages/seller-users",
                        element: <PrivateRoute>
                            <AdminRoute><SellerUsers></SellerUsers></AdminRoute>
                        </PrivateRoute>
                    },
                    {
                        path: "/pages/add-admin",
                        element: <PrivateRoute>
                            <AdminRoute><AddAdmin></AddAdmin></AdminRoute>
                        </PrivateRoute>
                    },
                    {
                        path: "/pages/category/:id",
                        element: <Products></Products>,
                        loader: async ({ params }) => await fetch(`https://fitness-zone-server.vercel.app/category/${params.id}`)
                    },
                    {
                        path: "/pages/product/:id",
                        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                        loader: async ({ params }) => await fetch(`https://fitness-zone-server.vercel.app/product/${params.id}`, {
                            headers: {
                                "content-type": "application/json",
                                authorization: `bearer ${localStorage.getItem('fitnessZone')}`
                            }
                        })
                    },
                    {
                        path: "/pages/order-list",
                        element: <PrivateRoute><OrderList></OrderList></PrivateRoute>
                    },
                    {
                        path: "/pages/wish-list",
                        element: <PrivateRoute><WishList></WishList></PrivateRoute>
                    },
                    {
                        path: "/pages/add-product",
                        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
                    },
                    {
                        path: "/pages/product-list",
                        element: <PrivateRoute><ProductList></ProductList></PrivateRoute>
                    },
                    {
                        path: "/pages/payment/:id",
                        element: <PrivateRoute><PaymentPage></PaymentPage></PrivateRoute>,
                        loader: async ({ params }) => await fetch(`https://fitness-zone-server.vercel.app/payment/${params.id}`, {
                            headers: {
                                "content-type": "application/json",
                                authorization: `bearer ${localStorage.getItem('fitnessZone')}`
                            }
                        })
                    },

                ]
            },
        ]
    }
])