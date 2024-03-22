 import './ProductBox.css';
 import { Link } from 'react-router-dom'; 
 
 
 function ProductBox({ProductImage , name , price})
 {
    return(

        <  Link to="/products/2"
        href="productDetails.html" 
        className="product-item text-decoration-none "   >
                                <div className="product-img">
                                    <img src={ProductImage } alt=""/>
                                </div>
                                <div className="product-name text-center">{name}</div>
                                <div className="product-price text-center">&#8377; {price}</div>
        </Link>
    )
   

 }

 export default ProductBox;