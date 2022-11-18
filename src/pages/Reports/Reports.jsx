import {Outlet,useNavigate,useLocation, Routes, Route} from "react-router-dom";
import {useState} from "react";
import { PageHeader } from "../../ui-components";
import { TestA } from "./Subpages/testa";

export function Reports(props){
    //Constants
    const [currentPage,setCurrentPage] = useState("Passwords")
      const location = useLocation();
    const navigation = useNavigate();
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
           PageTitle: {children: "Reports"},
           SubNavigation:{children:""}}}/>
           
           <Outlet/>
          </> );
      case 'Managers':
          return(
          <>
          <h1>Managers</h1>
          <Outlet/>
          </>
          )
      case 'Accountant':
          return(
            <>
              <h1>Accountant</h1>
              <Outlet/>
            </>
              )
      default:
          return(
          <>
          <h1>Access Denied</h1>
          <Outlet/>
          </>)
      }
   
  }