import { useNavigate,useLocation } from "react-router-dom";
import { useState,useEffect,useRef } from "react";
import { PageHeader } from "../../ui-components";
import  ReactDropdown  from "react-dropdown";
import DropdownMenu from '../../components/DropdownMenu/DropdownMenu'
import {getUserGroup,elevateAccount } from "./UsersFunctions";
import Modal from "../../components/Modal/Modal";

export function Users(props){
    //Constants
    const location = useLocation();
    const navigation = useNavigate();
    const [modal,setModal] = useState(false);
    const [userList,setUserList] = useState([])

    const menuOptions2 =["Administrator","Manager","Accountant","Disabled","Unverified"]

function GetUser(username,method){
        //put url of api in the fetch
        fetch(" https://qdkw8owsn3.execute-api.us-east-2.amazonaws.com/default",{
          method: 'POST',
          headers: {'Content-Type':"application/json"},
          body : JSON.stringify({
              "UserPoolId": "us-east-2_yq4Klaavu",
              "Username" : username,
              "method": method
          })
        })
         
      }
  
    //End of Constants
   useEffect(() => {

    const getList = async () => {
        const data = await GetUser("","all").then((result) => result.json()).then((data) => {setUserList(data);});  
        
        console.log(userList)
    }
    getList()
   },[]);

  
    switch(props.level){
      case 'Administrators':
          return (
              <>
      
        <PageHeader  
         overrides={{
           PageHeader: {width:"100%"},
           Background:{width: "100%"},
           PageTitle: {children: "Users"},
           SubNavigation:{children:""}
        }}/>
       
          </> );
      case 'Managers':
          return(
          <>
          </>
          )
      case 'Accountant':
          return(
            <>
            </> 
             )
      default:
          return(<h1>Access Denied</h1>)
      }
  
  
       
   
  }