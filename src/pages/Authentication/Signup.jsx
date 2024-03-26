import axios from "axios";
import Auth from "../../components/Auth/Auth";
import './Auth.css';
import { Link, useNavigate } from "react-router-dom";
 import { signup } from "../../fakeApI/FakeStoreApi";
import { useState } from "react";

function Signup() {


    const navigate = useNavigate();

    const [resetSignUpForm,setResetSignUpForm] = useState(false);  

    return (
        <div className="container">
            <div className="row">
                <h2 className="home-title text-center">
                    Welcome to Shop Cart
                </h2>
            </div>
            <div className="login-wrapper" id="loginForm">
                <h4 className="text-center">Signup</h4>

                <Auth   onSubmit={ async (formDetails) => 
                      { 
                        try{
                            const response = await axios.post(   signup() ,
                        {
                            username : formDetails.username ,
                            email : formDetails.email ,
                            password : formDetails.password
                        }  );

                        navigate('/signin');
 
                         console.log("response in signup" ,response);

                        }
                        catch(error){
                            console.log(error); 
                            setResetSignUpForm(true);
                        }
                        //  prop
                        {resetForm = {resetSignUpForm}}
                        
                      } }/>


                <div className="signup-btn text-center" id="showSignupBtn">
                    <Link to="/signin">    Already have an Account? Sign in Here   </Link>
                   
                    </div>

            </div>
        </div>
    )

}
export default Signup;