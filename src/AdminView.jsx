import { Button, Flex,View} from "@aws-amplify/ui-react";
import React from "react";
import { AccountCard,PageHeader ,} from "./ui-components";
import { useState } from "react";
import { db, storage } from './database/firebase';
import * as firebase from 'firebase/app';
import { collection, getDocs, getDoc, updateDoc, query, where, arrayUnion, documentId, doc, arrayRemove, addDoc } from 'firebase/firestore';
import "firebase/firestore";
import { ref, uploadBytes } from 'firebase/storage';
import { useLocation,useNavigate,useHistory ,Link, redirect} from "react-router-dom";
import { Outlet,useOutletContext } from "react-router-dom";
import { MissingRenderingAttributeException } from "@aws-sdk/client-ses";
import {getUserGroup,ElevateAccount,GetUser} from "./AdminFunctions"
import ReactDropdown from "react-dropdown";
import "./Dev.css"

// Test Data
export function getTestData(){
    let accountTestData = [];
    accountTestData.push(new Account("12345",19,"edibles","Objects capable of being consumed",14265,true));
    accountTestData.push(new Account("Bananas",19,"edibles","Objects capable of being comsumed",14265,true));
    accountTestData.push(new Account("Weggs",765,"diffrent edibles","diffrent Objects capable of being consumed",14885,false));
    accountTestData.push(new Account("Anime",1337,"UwU","I hate myself for making this",12345,false));
    accountTestData.push(new Account("Rocks",4,"not edibles","Objects you should not comsume",11,false));
    accountTestData.push(new Account("Unlisted",420,"NOT DRUGS","I said its not drugs",69420,false));
    accountTestData.push(new Account("12345",19,"edibles","Objects capable of being consumed",14265,true));
    accountTestData.push(new Account("Bananas",19,"edibles","Objects capable of being comsumed",14265,true));
    accountTestData.push(new Account("Weggs",765,"diffrent edibles","diffrent Objects capable of being consumed",14885,false));
    accountTestData.push(new Account("Anime",1337,"UwU","I hate myself for making this",12345,false));
    accountTestData.push(new Account("Rocks",4,"not edibles","Objects you should not comsume",11,false));
    accountTestData.push(new Account("Unlisted",420,"NOT DRUGS","I said its not drugs",69420,false));
    accountTestData.push(new Account("12345",19,"edibles","Objects capable of being consumed",14265,true));
    accountTestData.push(new Account("Bananas",19,"edibles","Objects capable of being comsumed",14265,true));
    accountTestData.push(new Account("Weggs",765,"diffrent edibles","diffrent Objects capable of being consumed",14885,false));
    accountTestData.push(new Account("Anime",1337,"UwU","I hate myself for making this",12345,false));
    accountTestData.push(new Account("Rocks",4,"not edibles","Objects you should not comsume",11,false));
    accountTestData.push(new Account("Unlisted",420,"NOT DRUGS","I said its not drugs",69420,false));
    return accountTestData;
    }

//End of Test Data

   

    //Classes
class Account{
constructor(name,number,subCategory,description,balance,isActive){
    this.name = name;
    this.number = number;
    this.subCategory = subCategory;
    this.description = description;
    this.balance = balance;
    this.isActive = isActive;
}}
    //End of Classes

    //Functions
    export function GetAccountData(){
        const accountsColRef = collection(db, "accounts");
        const [docID, setDocID] = useState([])
        const [myArr, setMyArr] = useState([])
    
        let accountData = [];
        getDoc(accountsColRef)
        .then(snapshot => {
            snapshot.forEach(account => {
                setDocID = account;
            });
        }); 
        accountData.push(setDocID)
        // arrayUnion(setDocID, accountsColRef)   
        return accountData;
    }
    
    
    
    function getAccountCards(account){
        return ( 
            <>
            <div className="whiteSpace">
            <AccountCard 
                  overrides={                
                      {
                      AccountName: {children: account.name},
                      AccountNumber : {children: account.number},
                      Subcategory : {children: account.subCategory},
                      AccountDescription : {children: account.description},
                      Balance : {children: account.balance},
                      SwitchField: {defaultChecked: account.isActive},
                    }
                  }
            />
            </div>
        </>
        
           )
      }
    //End of Functions

    //Pages
export function Home(){
     //Constants
     const location = useLocation();
     const navigation = useNavigate();
     //End of Constants

     switch(localStorage.getItem('role')){
        case 'Administrators':
            return (
                <>
                <h1>Admins</h1>
                <PageHeader
       overrides={{
         PageHeader: {width:"100%"},
         Background:{width: "100%"},
         PageTitle: {children: "Expired Passwords"},
         SubNavigation:{children: <Link to="/Reports">Reports{" > "} </Link> }
         
     }}/>
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

export function NewAcct(){
  //Constants
  const location = useLocation();
  const navigation = useNavigate();
  //End of Constants

  switch(localStorage.getItem('role')){
    case 'Administrators':
        return (
            <>
            <h1>Admins</h1>
            <PageHeader  
       overrides={{
         PageHeader: {width:"100%"},
         Background:{width: "100%"},
         PageTitle: {children: "Expired Passwords"},
         SubNavigation:{children: <Link to="/Reports">Reports{" > "} </Link> }
         
     }}/>
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

export function Users(){
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
  //End of Constants

  switch(localStorage.getItem('role')){
    case 'Administrators':
        return (
            <>
            <h1>Admins</h1>
            <PageHeader  
       overrides={{
         PageHeader: {width:"100%"},
         Background:{width: "100%"},
         PageTitle: {children: "Expired Passwords"},
         SubNavigation:{children: <Link to="/Reports">Reports{" > "} </Link> }
   
     }}/>
     <button onClick={()=> GetUser("toast","Single")}>GetUser</button>
     <button onClick={()=> getUserGroup("toast")}>GetUserGroup</button>
     <ReactDropdown 
    controlClassName="dropDownControlFrame" 
    menuClassName="dropDownMenuFrame" 
    className="dropDownFrame" options={menuOptions}  value={""} placeholder="choose one"/>
     
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

export function Reports(){
  //Constants
  const [currentPage,setCurrentPage] = useState("Passwords")
    const location = useLocation();
  const navigation = useNavigate();
  //End of Constants

  switch(localStorage.getItem('role')){
    case 'Administrators':
        return (
            <>
            <h1>Admins</h1>
            <PageHeader  
       overrides={{
         PageHeader: {width:"100%"},
         Background:{width: "100%"},
         PageTitle: {children: "Expired Passwords"},
         SubNavigation:{children: <Link to="/Reports">Reports{" > "} </Link> }
         
     }}/>
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

export function ExpiredPasswords(){
    //Constants
    const location = useLocation();
    const navigation = useNavigate();
    //End of Constants

    switch(localStorage.getItem('role')){
        case 'Administrators':
            return (
                <>
                <h1>Admins</h1>
                <PageHeader  
       overrides={{
         PageHeader: {width:"100%"},
         Background:{width: "100%"},
         PageTitle: {children: "Expired Passwords"},
         SubNavigation:{children: <Link to="/Reports">Reports{" > "} </Link> }
         
     }}/>
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

export function NewUser(){
  //Constants
  const location = useLocation();
  const navigation = useNavigate();
  //End of Constants

  switch(localStorage.getItem('role')){
    case 'Administrators':
        return (
            <>
            
            <PageHeader width="100%" overrides={{
                PageHeader: {width:"100%"},
                Background:{width: "100%"},
                PageTitle: {children: "New User"}
            }}/>
            
            </>  
        )
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

export function ViewAcct(){
    //Constants
    const location = useLocation();
    const navigation = useNavigate();
    const testAccounts = [...getTestData()];
    //End of Constants
 
switch(localStorage.getItem('role')){
case 'Administrators':
    return (
        <>
        <h1>Admins</h1>
        <PageHeader overrides={{
         PageHeader: {width:"100%"},
         Background:{width: "100%"},
         PageTitle: {children: "Accounts"}
     }}/>
        <div className="arrangeAccounts">
       {testAccounts.map(account => getAccountCards(account))}
       {/*{accounts.map(account => getAccountCards(account))} */}
        </div>
        </>
     );
case 'Managers':
    return(
    <h1>Admins</h1>
    )
case 'Accountant':
    return(
        <h1>Accountant</h1>
        )
default:
    return(<h1>Access Denied</h1>)
}


   
}

//End of Pages




