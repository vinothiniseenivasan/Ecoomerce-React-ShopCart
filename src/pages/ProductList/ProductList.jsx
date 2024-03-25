import './ProductList.css';
// image 
import  ProductImage from '../../assets/product.jpg';
import ProductBox from '../../components/ProductBox/ProductBox';
import FilterProduct from '../../components/FilterProduct/FilterProduct';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

function ProductList() {


    const [productList ,setProductList]  = useState(null);

    const [query] =useSearchParams();

    async function getAllProducts(category)
    {

        const downloadUrl = category ? `${import.meta.env.VITE_FAKE_STORE_URL}/products/category/${category}` :  `${import.meta.env.VITE_FAKE_STORE_URL}/products`;
        const response = await axios.get(downloadUrl);
        console.log("inside product list " , response.data);
        setProductList(response.data);
        

    }

    useEffect(  () =>
         {  
        getAllProducts(query.get("category"));
        console.log("query",query.get("category"));
     //  if query param changes its re-render
          } ,[query.get("category")] );





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
                               price={eachProduct.price}
                               id = {eachProduct.id}
                               />)    }
                          
                        
                    </div>
                </div>  
            </div>
           
        </div>
    );
}

export default ProductList;
