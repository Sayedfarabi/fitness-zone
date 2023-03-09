

export const dataLoadToDatabase = async () => {
    try {



        const categoriesData = await fetch("https://fitness-zone-server.vercel.app/")
        const categories = await categoriesData.json();



        const data = {
            success: true,
            data: {
                categories,

            }
        }
        return data

    } catch (error) {
        const data = {
            success: false,
            data: {
                categories: [],
                users: [],
            }
        }
        return data
    }
}