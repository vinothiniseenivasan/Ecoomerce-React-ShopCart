import { useEffect, useState } from 'react';
import './ProductDetails.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';


function ProductDetails()
{ 
    const {id} =  useParams();


    useEffect(() =>
    {
        getParticularProduct();
    } ,[])
    const   [  product ,setProduct  ] = useState(null);

    async function getParticularProduct()
    {

    const response  =await axios.get(`${import.meta.env.VITE_FAKE_STORE_URL}/products/${id}`);
    console.log("ProductDetails api"  , response.data);
    setProduct(response.data)
    }
 
    





    return(
        product && 
        <div className="container">
        <div className="row">
            <div className="product-details-wrapper d-flex justify-content-between align-items-start flex-row">
                <div className="product-img d-flex">
                    <img 
                      src= {product.image}
                      alt="product image" 
                      id="product-img"
                    />
                </div>

                <div className="product-details-box d-flex flex-column"> 
                    <div id="productDetails">
                        {/* <!-- product details --> */}
                        <div className="product-name" id="product-name">{product.title}</div>
                        <div className="product-price fw-bold" id="product-price">${product.price}</div>
                        <div className="product-description">
                            <div className="product-description-title fw-bold">{product.description}</div>
                            <div className="product-description-data" id="product-description-data">
                               
                            </div>
                        </div>
                    </div>

                    <div className="product-details-action btn btn-primary text-decoration-non">Add to cart</div>
                    <a href="cart.html" id="goToCartBtn" className="product-details-action btn btn-warning text-decoration-none">
                        Go to cart
                    </a>
                </div>
            </div>
        </div>
    </div>
    )

}

export default ProductDetails;