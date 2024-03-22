import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import ProductList from "../pages/ProductList/ProductList";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
function MainRoutes()
{

    return(
        <Routes>
             <Route   path= "/"   element ={ <Home />}/>
             <Route    path= "*"   element ={ <Error />} />
             <Route    path= "/products"   element ={ <ProductList />} /> 
             <Route    path= "/products/:id"   element ={ <ProductDetails />} /> 


        </Routes>
    )

}

export default MainRoutes;