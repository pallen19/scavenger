import { useNavigate,useLocation } from "react-router-dom";
import { useState,useEffect,useRef,forwardRef } from "react";
import { PageHeader } from "../../ui-components";
import  ReactDropdown  from "react-dropdown";
import DropdownMenu from '../../components/DropdownMenu/DropdownMenu'
import {getUserGroup,elevateAccount } from "./UsersFunctions";
import Modal from "../../components/Modal/Modal";
import { GetUser,SetAccountLevel } from "./UsersFunctions";

export function Users(props){
    //Constants
    const location = useLocation();
    const navigation = useNavigate();
    const [modal,setModal] = useState(false);
    const [userList,setUserList] = useState([]);
    const selectedUser = useRef("");
    const SelectedOption = useState("");

    const menuOptions2 =["Administrator","Manager","Accountant","Disabled","Unverified"]
    

  
    //End of Constants
   useEffect(() => {

    const getList = async () => {
        const data = await GetUser(" ","all")
        setUserList(data)
        console.log("Userlist = ")
        console.log(data)
        console.log(userList)
    }
    getList()
   },[]);

   const testFunc = (thing1,thing2) => {
    console.log(thing1);
    console.log(thing2);
   }

  
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
        {/* change user account level */}
        <form onSubmit={testFunc(SelectedOption.current,selectedUser.current.valueOf())}>
            <label id="Username">Username</label>
            <input ref={selectedUser} type="text"></input>
            <DropdownMenu id="accountLevel" options={["Administrators","Accountant","Managers","Regular_User"]}/>
        </form>
       
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