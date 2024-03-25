// css imports

import { useEffect, useState } from 'react';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import './Home.css';
import axios from 'axios';
import getAllCategories from '../../fakeApI/FakeStoreApi';





function Home() {

    const [categories ,setCategories] =useState(null);

    
async function downloadCategories()
{
    const response = await axios.get(getAllCategories());
    console.log(response.data);
    setCategories(response.data);

}



useEffect(() =>
{
    downloadCategories();

} , []);   



    return (
        <div className="container welcome-wrapper">
            <div className="row">
                <h2 className="home-title text-center">Welcome to Shop Cart</h2>
                <div className="category-list d-flex flex-row justify-content-between align-items-center" id="categoryList">
                    {/* <!-- List of categories --> */}

                    <CategoryItem  itemName="All Products"  />

                   { categories &&  categories.map((eachCategory) =>  <CategoryItem  
                   itemName={eachCategory} 
                    key={eachCategory }
                    filter={eachCategory}   />)}



                </div>
                <div className="category-title text-center">
                    Select a category to start Shopping  
                </div>
            </div>
        </div>

    );



}

export default Home;