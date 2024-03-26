export function getAllCategories()
{
    return `${import.meta.env.VITE_FAKE_STORE_URL}/products/categories`;
   

}



export function signup()
{
    return `${import.meta.env.VITE_FAKE_STORE_URL}/users`;
}

// export default getAllCategories;