import './ProductList.css';
// image 
import  ProductImage from '../../assets/product.jpg';
import ProductBox from '../../components/ProductBox/ProductBox';
import FilterProduct from '../../components/FilterProduct/FilterProduct';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {


    const [productList ,setProductList]  = useState(null);

    async function getAllProducts()
    {
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log(response.data);
        setProductList(response.data)

    }

    useEffect(() =>{
        getAllProducts();

    } );
    return (
        <div className='container'>
            <div className='row'>
                <h2 className="product-list-title text-center">All Products</h2>
                <div className="product-list-wrapper d-flex flex-row">

                     
                    <FilterProduct />



                        {/* individual products */}
                    <div className="product-list-box" id="productList">

                         
                         {    productList && productList.map((eachProduct) =>  <ProductBox
                               key={eachProduct.title}   
                               ProductImage={eachProduct.image} 
                               name={eachProduct.title} 
                               price={eachProduct.price}/>)    }
                          
                        
                    </div>
                </div>  
            </div>
           
        </div>
    );
}

export default ProductList;
