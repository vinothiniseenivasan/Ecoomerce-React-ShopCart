import { useEffect, useState } from "react";

function Auth(  {  onSubmit  ,resetForm }) {

    const [formDetails ,setFormDetails ]  =  useState({email:''  , password: ''  , username: '' ,isLoading: false});


    function setEmail(updatedEmail)
    {
        setFormDetails({...formDetails , email:updatedEmail});
    }
    function setPassword(updatedPassword)
    {
        setFormDetails({...formDetails , password:updatedPassword});
    }
    function setUserName(updatedUserName)
    {
        setFormDetails({...formDetails , username:updatedUserName});
    }
   function onFormSubmit()
   {
      onSubmit(formDetails);

      setFormDetails(   {  ...formDetails , isLoading: true  }  );
   }


   useEffect(() => {

     setFormDetails({email:''  , password: ''  , username: '' ,isLoading: false});

   }  , [resetForm])

    return (
        <>
            <div className="input-group">
                <input   onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" placeholder="Username" id="loginUsername" />
            </div>
            <div className="input-group">
                <input onChange={(e) => setPassword(e.target.value)}   type="email" className="form-control" placeholder="Email" id="loginUserEmail" />
            </div>
            <div className="input-group">
                <input onChange={(e) => setUserName(e.target.value)} type="password" className="form-control" placeholder="Password" id="loginPassword" />
            </div> 
            {/* <div onClick={ onFormSubmit  } className="input-group">
                <button className="form-control btn btn-primary">
                    Submit
                </button> */}
                <div className="input-group">
                   <button onClick={ onFormSubmit  } className=" form-control btn btn-primary" type="button" disabled={formDetails.isLoading}>
                           {formDetails.isLoading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>} 
                             {(formDetails.isLoading)   ?  ' Loading... '   :    'Submit'}  
                    </button>
                 </div>
            {/* </div> */}
        </>
    )

}
export default Auth;
 