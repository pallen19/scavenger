import { useNavigate,useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import { MenuCard, PageHeader } from "../../ui-components";
import "./Homepage.css"
import CustomTabs from "../../components/AccountsTab/CustomTabs";
import ReactTooltip from 'react-tooltip';
import BarChart from "../../components/Charts/BarChart";
import PieChart from "../../components/Charts/PieChart";
import { Tooltip } from "chart.js";

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
    {/* <BarChart/> */}
    <div className="ShortcutFrame">
    <div className="ShortcutItem">
        <p data-delay-show='250' data-delay-update='250' data-tip="Click here to go to General Ledger" >
    <MenuCard overrides={{
        MenuLabel:{children:"Ledger"},
        MenuDescription:{children:"Shortcut to General Ledger"},
        Button:{onClick:()=>navigate("/Accounts/General Ledger"),children:"Get Started"}
    }}></MenuCard>
    </p>
    <ReactTooltip/>
    </div>
  
    <div className="ShortcutItem">
    <p data-delay-show='250' data-delay-update='250' data-tip="Click here to create account">  
    <MenuCard overrides={{
        MenuLabel:{children:"New Account"},
        MenuDescription:{children:"Shortcut to Make a new Account"},
        
        Button:{onClick:()=>navigate("/Accounts/Create Account"),children:"Get Started"}
    }}></MenuCard>
    </p>
</div>
    <ReactTooltip/>
    
    <div className="ShortcutItem">
    <p data-delay-show='250' data-delay-update='250' data-tip="Click here to view Event Log">  
    <MenuCard overrides={{
        MenuLabel:{children:"Event Log"},
        MenuDescription:{children:"Shortcut to event log"},
        Button:{onClick:()=>navigate("/Reports/Event Log"),children:"Get Started"}
    }}></MenuCard>
    </p>
    <ReactTooltip/>
    </div>

<div className="ShortcutItem">
     <p data-delay-show='250' data-delay-update='250' data-tip="Click here to go to Journals" >
    <MenuCard overrides={{
        MenuLabel:{children:"Journals"},
        MenuDescription:{children:"Shortcut to journals"},
        Button:{onClick:()=>navigate("/Accounts/Journals"),children:"Get Started"}
    }}></MenuCard> 
    </p>
    <ReactTooltip/>
    </div>

<div className="ShortcutItem">
     <p data-delay-show='250' data-delay-update='250' data-tip="Click here to go to Account Summary" >
     <MenuCard overrides={{
        MenuLabel:{children:"Account Summary"},
        MenuDescription:{children:"Shortcut to Account Summaries"},
        Button:{onClick:()=>navigate("/Accounts/Account Summary"),children:"Get Started"}
    }}></MenuCard> 
    </p>
    <ReactTooltip/>
    </div>

    <div className="ShortcutItem">
         <p data-delay-show='250' data-delay-update='250' data-tip="Click here to view Expired Passwords" >
    <MenuCard overrides={{
        MenuLabel:{children:"View Expired Passwords"},
        MenuDescription:{children:"Go to Expired Passwords"},
        Button:{onClick:()=>navigate("/Reports/Expired Passwords"),children:"Get Started"}
    }}></MenuCard> 
    </p>
    <ReactTooltip/>
    </div>
     
    </div>
    
    
   
        
            
       
   
    </>
            );
       case 'Managers':
           return(
           <>
           <div className="ShortcutFrame">
    <div className="ShortcutItem">
        <p data-delay-show='250' data-delay-update='250' data-tip="Click here to go to General Ledger" >
    <MenuCard overrides={{
        MenuLabel:{children:"Ledger"},
        MenuDescription:{children:"Shortcut to General Ledger"},
        Button:{onClick:()=>navigate("/Accounts/General Ledger"),children:"Get Started"}
    }}></MenuCard>
    </p>
    <ReactTooltip/>
    </div>
  
    <div className="ShortcutItem">
    <p data-delay-show='250' data-delay-update='250' data-tip="Click here to create account">  
    <MenuCard overrides={{
        MenuLabel:{children:"New Account"},
        MenuDescription:{children:"Shortcut to Make a new Account"},
        
        Button:{onClick:()=>navigate("/Accounts/Create Account"),children:"Get Started"}
    }}></MenuCard>
    </p>
</div>
    <ReactTooltip/>
    
    <div className="ShortcutItem">
    <p data-delay-show='250' data-delay-update='250' data-tip="Click here to view Event Log">  
    <MenuCard overrides={{
        MenuLabel:{children:"Event Log"},
        MenuDescription:{children:"Shortcut to event log"},
        Button:{onClick:()=>navigate("/Reports/Event Log"),children:"Get Started"}
    }}></MenuCard>
    </p>
    <ReactTooltip/>
    </div>

<div className="ShortcutItem">
     <p data-delay-show='250' data-delay-update='250' data-tip="Click here to go to Journals" >
    <MenuCard overrides={{
        MenuLabel:{children:"Journals"},
        MenuDescription:{children:"Shortcut to journals"},
        Button:{onClick:()=>navigate("/Accounts/Journals"),children:"Get Started"}
    }}></MenuCard> 
    </p>
    <ReactTooltip/>
    </div>

<div className="ShortcutItem">
     <p data-delay-show='250' data-delay-update='250' data-tip="Click here to go to Account Summary" >
     <MenuCard overrides={{
        MenuLabel:{children:"Account Summary"},
        MenuDescription:{children:"Shortcut to Account Summaries"},
        Button:{onClick:()=>navigate("/Accounts/Account Summary"),children:"Get Started"}
    }}></MenuCard> 
    </p>
    <ReactTooltip/>
    </div>

   
    </div>
    
           </>
           )
       case 'Accountant':
           return(
               <>
               <h1>Accountant</h1>
               {/* Shows the pages header (overriding figma components) */}
                            <PageHeader
                    overrides={{
                        PageHeader: {width:"100%"},
                        Background:{width: "100%"},
                        PageTitle: {children: "Home"},
                        SubNavigation:{children:""}
                        
    }}/>
                {/* Populate The General Ledger */}
                <div className="ShortcutFrame">
                    <div className="ShortcutItem">
                        <p data-delay-show='250' data-delay-update='250' data-tip="Click here to go to General Ledger" >
                    <MenuCard overrides={{
                        MenuLabel:{children:"Ledger"},
                        MenuDescription:{children:"Shortcut to General Ledger"},
                        Button:{onClick:()=>navigate("/Accounts/General Ledger"),children:"Get Started"}
                    }}></MenuCard>
                    </p>
                    <ReactTooltip/>
                    </div>

            {/* Create Account Card */}
                <div className="ShortcutItem">
                        <p data-delay-show='250' data-delay-update='250' data-tip="Click here to create account">  
                        <MenuCard overrides={{
                            MenuLabel:{children:"New Account"},
                            MenuDescription:{children:"Shortcut to Make a new Account"},
                            
                            Button:{onClick:()=>navigate("/Accounts/Create Account"),children:"Get Started"}
                        }}></MenuCard>
                        </p>
                    </div>
                        <ReactTooltip/>

                        {/* POPULATE THE EVENT LOG */}
                        <div className="ShortcutItem">
                            <p data-delay-show='250' data-delay-update='250' data-tip="Click here to view Event Log">  
                            <MenuCard overrides={{
                                MenuLabel:{children:"Event Log"},
                                MenuDescription:{children:"Shortcut to event log"},
                                Button:{onClick:()=>navigate("/Reports/Event Log"),children:"Get Started"}
                            }}></MenuCard>
                            </p>
                            <ReactTooltip/>
                        </div>

                            {/* CREATE JOURNALS */}
                    <div className="ShortcutItem">
                        <p data-delay-show='250' data-delay-update='250' data-tip="Click here to go to Journals" >
                        <MenuCard overrides={{
                            MenuLabel:{children:"Journals"},
                            MenuDescription:{children:"Shortcut to journals"},
                            Button:{onClick:()=>navigate("/Accounts/Journals"),children:"Get Started"}
                        }}></MenuCard> 
                        </p>
                        <ReactTooltip/>
                        </div>

                        {/* CREATE ACCOUNT CARDS */}
                        <div className="ShortcutItem">
                            <p data-delay-show='250' data-delay-update='250' data-tip="Click here to go to Account Summary" >
                            <MenuCard overrides={{
                                MenuLabel:{children:"Account Summary"},
                                MenuDescription:{children:"Shortcut to Account Summaries"},
                                Button:{onClick:()=>navigate("/Accounts/Account Summary"),children:"Get Started"}
                            }}></MenuCard> 
                            </p>
                            <ReactTooltip/>
                        </div>

                    </div>

    </>
               )
       default:
           return(<h1>Access Denied</h1>)
       }}