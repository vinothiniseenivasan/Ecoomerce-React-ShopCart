function CategoryItem({ itemName }) 
{
    return (
        <div class="category-item d-flex align-items-center justify-content-center">
            <a href="productList.html"> {itemName} </a>
        </div>

    )

}

export default CategoryItem;