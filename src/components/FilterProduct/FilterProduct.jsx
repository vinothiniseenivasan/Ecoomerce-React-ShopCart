import './FilterProduct.css';


function FilterProduct()
{


    const minPriceOptions = [0 ,10 ,20,50,100, 200];
    const maxPriceOptions =  [0 ,10 ,20,50,100, 200,1000];

    return(
    <div className="product-list-sidebar d-flex flex-column">

    <div className="sidebar-title">Search Products</div>
    <div className="sidebar-search form-group">
        <input type="text" placeholder="Search by name" className="form-control" id="searchInput"/>
    </div>

    <div className="sidebar-title fw-bold">Categories</div>
    <div id="categoryList d-flex flex-column">
        {/* <!-- will be populated by JS --> */} 

        <a  className='d-flex text-decoration-none'>
            Electronics
        </a>
        <a  className='d-flex text-decoration-none'>
           KitchenWare
        </a>
        <a  className='d-flex text-decoration-none'>
          Medicine
        </a>
        <a  className='d-flex text-decoration-none'>
            Electronics
        </a>
    </div>


    <div className="sidebar-title">Filter by price</div>
    <div className="price-filter">
        <div className="price-filter-select d-flex flex-row justify-content-between">
            <div className="form-group">
                <select name="minPrice" className="form-select" id="minPrice">
                    {
                        minPriceOptions.map((optionValue)  => <option key={optionValue} value={optionValue}> {optionValue} </option>)
                    }



                    {/* <option value="0">0</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="200">200</option> */}
                </select>
            </div>
            <div className="form-group">
                <select name="maxPrice" className="form-select" id="maxPrice">

                {
                        maxPriceOptions.map((optionValue)  => <option key={optionValue} value={optionValue}> {optionValue} </option>)
                    }

                    {/* <option value="0">0</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="200">200</option>
                    <option value="1000">1000</option> */}
                </select>
            </div>
        </div>
        <div className="price-filter-title d-flex flex-row justify-content-between">
            <div id="price-filter-label-min">Min Price</div>
            <div id="price-filter-label-max">Max Price</div>
        </div>
    </div>
    <button className="btn btn-warning clear-filter" id="search">Search</button>
    <button className="btn btn-danger clear-filter" id="clear">Clear Filters</button>
</div>
);


}


export default FilterProduct;