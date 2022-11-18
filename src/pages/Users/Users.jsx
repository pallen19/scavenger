import { useNavigate,useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import { PageHeader } from "../../ui-components";
import  ReactDropdown  from "react-dropdown";
import DropdownMenu from '../../components/DropdownMenu/DropdownMenu'
import { GetUser,getUserGroup,elevateAccount } from "./UsersFunctions";

export function Users(props){
    //Constants
    const location = useLocation();
    const navigation = useNavigate();
    const menuOptions = [
    {value:'Administrator',label:"Administrator",className:'dropDownOption'},
    {value:'Manager',label:"Manager",className:'dropDownOption'},
    {value:'Accountant',label:"Accountant",className:'dropDownOption'},
    {value:'Disabled',label:"Disabled",className:'dropDownOption'},
    {value:'Unverified',label:"Unverified",className:'dropDownOption'}
    ]
  
    const menuOptions2 =["banana","avacado","tomato","beans"]
  
    //End of Constants
  
    switch(props.level){
      case 'Administrators':
          return (
              <>
              <h1>Admins</h1>
              <PageHeader  
         overrides={{
           PageHeader: {width:"100%"},
           Background:{width: "100%"},
           PageTitle: {children: "Users"},
           SubNavigation:{children:""}
     
       }}/>
       <button onClick={()=> GetUser("toast","Single")}>GetUser</button>
       <button onClick={()=> getUserGroup("toast")}>GetUserGroup</button>
       <ReactDropdown 
      controlClassName="dropDownControlFrame" 
      menuClassName="dropDownMenuFrame" 
      className="dropDownFrame" options={menuOptions}  value={""} placeholder="choose one"/>
  
      <DropdownMenu options={menuOptions2}/>
       
          </> );
      case 'Managers':
          return(
          <h1>Managers</h1>
          )
      case 'Accountant':
          return(
              <h1>Accountant</h1>
              )
      default:
          return(<h1>Access Denied</h1>)
      }
  
  
       
   
  }