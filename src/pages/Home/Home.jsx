// css imports

import CategoryItem from '../../components/CategoryItem/CategoryItem';
import './Home.css';



function Home() {
    return (
        <div class="container">
            <div class="row">
                <h2 class="home-title text-center">Welcome to Shop Cart</h2>
                <div class="category-list d-flex flex-row justify-content-between align-items-center" id="categoryList">
                    {/* <!-- List of categories --> */}

                    <CategoryItem  itemName="All Products"  />



                </div>
                <div class="category-title text-center">
                    Select a category to start Shopping  
                </div>
            </div>
        </div>

    );



}

export default Home;