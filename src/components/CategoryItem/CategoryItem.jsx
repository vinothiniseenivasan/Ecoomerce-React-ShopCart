import { Link } from "react-router-dom";

function CategoryItem({ itemName ,filter = ''}) 
{

  console.log("itemName" ,itemName);
    const redirectLink = `products/?category=${filter}`
    return (
        <div className="category-item d-flex align-items-center justify-content-center">

            {/* link is used to navigate product page */}
            <Link to=  {redirectLink }> {itemName} </Link>
        </div>

    )

}


export default CategoryItem;