function getAllCategories()
{
    return `${import.meta.env.VITE_FAKE_STORE_URL}/products/categories`;

}

export default getAllCategories;   