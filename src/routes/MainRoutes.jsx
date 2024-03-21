import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
function MainRoutes()
{

    return(
        <Routes>
             <Route   path= "/"   element ={ <Home />}/>
             <Route    path= "*"   element ={ <Error />} />
             <Route /> 


        </Routes>
    )

}

export default MainRoutes;