import { createBrowserRouter } from "react-router-dom";
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
import Products from "../pages/category-pages/Products";
import ContactUsPage from "../pages/contact-us/ContactUsPage";
import ErrorPage from "../pages/error-page/ErrorPage";
import Home from "../pages/home/Home";
import AddProduct from "../pages/seller-pages/add-product/AddProduct";
import ProductList from "../pages/seller-pages/product-list/ProductList";
import WelcomePage from "../pages/welcome-page/WelcomePage";

export const routes = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Root></Root>,
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
                        element: <AddCategory></AddCategory>
                    },
                    {
                        path: "/pages/buyer-users",
                        element: <BuyerUsers></BuyerUsers>
                    },
                    {
                        path: "/pages/seller-users",
                        element: <SellerUsers></SellerUsers>
                    },
                    {
                        path: "/pages/add-admin",
                        element: <AddAdmin></AddAdmin>
                    },
                    {
                        path: "/pages/category/:id",
                        element: <Products></Products>
                    },
                    {
                        path: "/pages/order-list",
                        element: <OrderList></OrderList>
                    },
                    {
                        path: "/pages/wish-list",
                        element: <WishList></WishList>
                    },
                    {
                        path: "/pages/add-product",
                        element: <AddProduct></AddProduct>
                    },
                    {
                        path: "/pages/product-list",
                        element: <ProductList></ProductList>
                    }

                ]
            },
        ]
    }
])