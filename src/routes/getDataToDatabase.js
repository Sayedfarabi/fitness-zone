
export const dataLoadToDatabase = async () => {
    try {
        const categoriesData = await fetch("http://localhost:5000/")
        const categories = await categoriesData.json();

        const usersData = await fetch("http://localhost:5000/users")
        const users = await usersData.json()

        const productsData = await fetch("http://localhost:5000/products")
        const products = await productsData.json()

        // const bookingsData = await fetch("http://localhost:5000/bookings")
        // const bookings = await bookingsData.json()

        // const wishListData = await fetch("http://localhost:5000/wishList")
        // const wishList = await wishListData.json()

        // const databaseData = {
        //     categories,
        //     users,
        //     // products,
        //     // bookings,
        //     // wishList
        // }

        const data = {
            success: true,
            data: {
                categories,
                users,
                products
            }
        }
        return data

    } catch (error) {
        const data = {
            success: false,
            data: {
                categories: [],
                users: [],
                products: []
            }
        }
        return data
    }
}