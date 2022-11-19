import { useNavigate,useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import { MenuCard, PageHeader } from "../../ui-components";
import "./Homepage.css"
import CustomTabs from "../../components/AccountsTab/CustomTabs";

export function Home(props){
    //Constants
    const location = useLocation();
    const navigate = useNavigate();
    //End of Constants

    switch(props.level){
       case 'Administrators':
           return (
               <>
               <PageHeader
      overrides={{
        PageHeader: {width:"100%"},
        Background:{width: "100%"},
        PageTitle: {children: "Home"},
        SubNavigation:{children:""}
        
    }}/>
    
    <div className="ShortcutFrame">
    <div className="ShortcutItem">
    <MenuCard overrides={{
        MenuLabel:{children:"Ledger"},
        MenuDescription:{children:"Shortcut to General Ledger"},
        Button:{onClick:()=>navigate("/Accounts/General Ledger"),children:"Get Started"}
    }}></MenuCard>
    </div>
    <div className="ShortcutItem">
    <MenuCard overrides={{
        MenuLabel:{children:"New Account"},
        MenuDescription:{children:"Shortcut to Make a new Account"},
        Button:{onClick:()=>navigate("/Accounts/Create Account"),children:"Get Started"}
    }}></MenuCard>
    </div>
    <div className="ShortcutItem">
    <MenuCard overrides={{
        MenuLabel:{children:"Event Log"},
        MenuDescription:{children:"Shortcut to event log"},
        Button:{onClick:()=>navigate("/404"),children:"Get Started"}
    }}></MenuCard>
    </div>
    </div>
    
    </>
            );
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
       }}