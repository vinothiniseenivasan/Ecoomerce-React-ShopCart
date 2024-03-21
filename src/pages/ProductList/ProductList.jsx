import './ProductList.css';
// image 
import  ProductImage from '../../assets/product.jpg';
import ProductBox from '../../components/ProductBox/ProductBox';
import FilterProduct from '../../components/FilterProduct/FilterProduct';

function ProductList() {
    return (
        <div className='container'>
            <div className='row'>
                <h2 className="product-list-title text-center">All Products</h2>
                <div className="product-list-wrapper d-flex flex-row">
                    <FilterProduct />



                        {/* individual products */}
                    <div className="product-list-box" id="productList">

                          <ProductBox   ProductImage={ProductImage} name={"items"}  price={"1000"}/>
                        
                    </div>
                </div>
            </div>
            ProductList
        </div>
    );
}

export default ProductList;
