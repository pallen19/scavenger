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
          
          <Outlet/>
          </>
          )
      case 'Accountant':
          return(
            <>
             
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