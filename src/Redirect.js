import React from "react";
import { useEffect } from "react";
import {useNavigate,Navigate ,Link} from "react-router-dom";


function Redirection(type){
    let nav = useNavigate();
    switch(type){
      case "Admin":
          console.log("redirecting to admin");
          nav("/admin")
          break;
      case "Manager":
          nav("/manager")
          console.log("redirecting to manager");
          break;  
      default:
          break;
       
      }
}



 const RedirectUser = (props) => {
    console.log("redirecting " + props.accountType)
    if(props.accountType === 'Administrators'){
        return(
            <>
            <Navigate to="/adminHome"></Navigate>
            </>
        )
    }
    if(props.accountType === 'Managers'){
        return(
            <>
            <Navigate to="/manager"></Navigate>
            </>
        )
    }
    if(props.accountType === 'Accountant'){
        return(
            <>
            <Navigate to="/accountant"></Navigate>
            </>
        )
    }
    if(props.accountType === 'Regular_User'){
        return(
            <>
            <Navigate to="/registered"></Navigate>
            </>
        )
    }
    return(<p>Access Denied</p>);
   
          
 }

 export default RedirectUser;
