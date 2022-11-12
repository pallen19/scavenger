import { Button, Flex,View} from "@aws-amplify/ui-react";
import React from "react";
import { AccountCard,PageHeader,UserCardSmall} from "./ui-components";
import { useState,useEffect } from "react";
import { db, storage } from './firestore-config';
import { deleteDoc,collection, getDocs, getDoc, updateDoc, query, where, arrayUnion, documentId, doc, arrayRemove, addDoc } from 'firebase/firestore';
import "firebase/firestore";
import { useLocation,useNavigate,useHistory ,Link, redirect} from "react-router-dom";
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

    function ReportsCard(account1) {
        return (
        
        <><UserCardSmall
            overrides={
                {
                    AccountName: { children: account1.name },
                    UserID: { children: account1.userID },
                    DateofGeneratedReport : { children: account1.dateGenerated },
                    PasswordExpiration: { children: account1.passwordExpiration },
                }
            }></UserCardSmall>
</>

)}
    
    
    
    function getAccountCards(account){
        return ( 
            <>
            <div className="whiteSpace">
            <AccountCard
                overrides={
                    {
                        'trash-alt': { onClick: () => { deleteAccount(account.id) } }, // trash can delete function on all account cards
                        AccountName: { children: account.accountName },
                        AccountNumber: { children: account.accountNumber },
                        Subcategory: { children: account.accountSubcategory },
                        AccountDescription: { children: account.accountDescription },
                        AccountCreation: {children: account.accountCreation},
                        Order: {children: account.order},
                        Statement: {children: account.statement},
                        Comments: {children: account.comments},
                        UserID: {children: account.userID},
                        NormalSide: {children: account.normalSide},
                        InitialBalance: {children: account.initialBalance},
                        Debit: {children: account.debit},
                        Credit: {children: account.credit},
                        Balance: { children: account.balance },
                        SwitchField: { defaultChecked: account.isActive }
                    }
                }></AccountCard>
            </div>
        </>
        
           )
      }

      async function deleteAccount(id) {
        const testAccountsDoc = doc(db, "accounts", id) //references to that document
        await deleteDoc(testAccountsDoc);
    }
    //End of Functions

    //Pages
export function Home(props){
     //Constants
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
         PageTitle: {children: "Home"},
         SubNavigation:{children:""}
         
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

export function Journals(props){
     //Constants
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
         PageTitle: {children: "Journals"},
         SubNavigation:{children:""}
         
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


export function NewAcct(props){
  //Constants
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
         PageTitle: {children: "Create A New Account"},
         SubNavigation:{children:""}
         
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
         SubNavigation:{children:""}
         
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

export function ExpiredPasswords(props){
    //Constants
    const location = useLocation();
    const navigation = useNavigate();
   

    const [userInfo, setUserInfo] = useState([]);

    const usersColRef = collection(db, "testUsers");



    useEffect(() => {

        const getUsers = async () => {

            const data = await getDocs(usersColRef);
            setUserInfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getUsers()

    }, [])
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
         PageTitle: {children: "Expired Passwords"},
         SubNavigation:{children:""}
         
     }}/>
     <div className="d-inline-flex p-2">
                {/*{testExpiredPasswords.map(account1=>getPasswordReport(account1))} */}
                {userInfo.map(account1 => ReportsCard(account1))}
    </div>
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

export function NewUser(props){
  //Constants
  const location = useLocation();
  const navigation = useNavigate();
  //End of Constants

  switch(props.level){
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

export function ViewAcct(props){
    //Constants
    const location = useLocation();
    const navigation = useNavigate();
    const testAccounts = [...getTestData()];
    const [modal,setModal] = useState(false);
    const [accounts, setAccounts] = useState([]);

    const testAccountsColRef = collection(db, "accounts")

    useEffect(() => {

        const getUsers = async () => {
            const data = await getDocs(testAccountsColRef);
            setAccounts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getUsers()

    }, [])
    //End of Constants
 
switch(props.level){
case 'Administrators':
    return (
        <>
        <h1>Admins</h1>
        <PageHeader overrides={{
         PageHeader: {width:"100%"},
         Background:{width: "100%"},
         PageTitle: {children: <Link to="/Journals">New Journal Entry</Link>}
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




