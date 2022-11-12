import { Button, Flex } from "@aws-amplify/ui-react";
import React from "react";
import { AccountCard, Edit, UserCardSmall } from "./ui-components";
import { useState } from "react";
import { db, storage } from './database/firebase';
import * as firebase from 'firebase/app';
import { collection, getDocs, getDoc, updateDoc, query, where, arrayUnion, documentId, doc, arrayRemove, addDoc } from 'firebase/firestore';
import "firebase/firestore";
import { ref, uploadBytes } from 'firebase/storage';
import Modal from "./Modal";
//import './Modal.css';

class Account{
constructor(name,number,subCategory,description,balance,isActive){
    this.name = name;
    this.number = number;
    this.subCategory = subCategory;
    this.description = description;
    this.balance = balance;
    this.isActive = isActive;
}




}
class ExpiredPassword{
   constructor(name,userID,dateGenerated,passwordExpiration){
    this.name = name;
    this.userID = userID;
    this.dateGenerated =dateGenerated;
    this.passwordExpiration =passwordExpiration;
}


}



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

export function getTestData(){
let accountTestData = [];
accountTestData.push(new Account("12345",19,"edibles","Objects capable of being comsumed",14265,true));
accountTestData.push(new Account("Bananas",19,"edibles","Objects capable of being comsumed",14265,true));
accountTestData.push(new Account("Weggs",765,"diffrent edibles","diffrent Objects capable of being comsumed",14885,false));
accountTestData.push(new Account("Anime",1337,"UwU","I hate myself for making this",12345,false));
accountTestData.push(new Account("Rocks",4,"not edibles","Objects you should not comsume",11,false));
accountTestData.push(new Account("Unlisted",420,"NOT DRUGS","I said its not drugs",69420,false));
accountTestData.push(new Account("Unlisted",420,"NOT DRUGS","I said its not drugs",69420,false));

return accountTestData;
}

export function AdminNewAcct(){


    return (
        <>
        <h1>ADMIN newAccount Page</h1>
        
        </>
        
    )
    

}
export function AdminHome(){


    return (
        <>
        <h1>ADMIN home</h1>
        
        </>
        
    )
    

}

export function AdminViewAcct(){
    const testAccounts = [...getTestData()];
  //  const [openModal, setOpenModal]= useState(false)
     {/*const AdminEditAccount=(props)=>{
    
    
        {/*setOpenModal(props)*/
      
}
    {/*const accounts = [...GetAccountData()];*/}

    // const accountsColRef = collection(db, "accounts");
    // let count = accountsColRef.size;

    return (
        <>
        <h1>ADMIN view accounts</h1>
        <div className="d-inline-flex p-2">
         {testAccounts.map(account => getAccountCards(account))}

       {/*  {accounts.map(account => getAccountCards(account))} 

       
        
      <div>
      
       {/*<button className="modalBtn" onClick={() => setOpenModal(true)}>Modal</button>
                <Modal open={openModal} onClose={()=> setOpenModal(false)}/>
                </div>
  
            */} 
            </div>

    {/* <AccountCard overrides={
         
         
         
         {edit: {onClick:()=>setOpenModal(true)}}
         
         
         
        }></AccountCard>*/}
        
        </>
        )
}
const handleClick=()=>{
}
function getAccountCards(account,props){  
    
    return ( 
        <>
        
              <AccountCard
              overrides={                
                
                  {AccountName: {children: account.name},
                  AccountNumber : {children: account.number},
                  Subcategory : {children: account.subCategory},
                  AccountDescription : {children: account.description},
                  Balance : {children: account.balance},
                  SwitchField: {defaultChecked: account.isActive},  
                 'edit': {onClick: () => {handleClick()}
              }}
              }></AccountCard>

            

</>
    
       )
  }


export function AdminNewUser(){


    return (
        <>
        <h1>ADMIN  newUser</h1>
        
        </>
        
    )
    

}

export function AdminReport(){
    const testExpiredPasswords = [...getPasswordReport()];
    const [openModal, setOpenModal]= useState(false)
    return (
        <>
        <h1>Admin Reports</h1>
        <div className="d-inline-flex p-2">
            <h2>im here</h2>
             {/*{testExpiredPasswords.map(account1=>getPasswordReport(account1))} */}
             {testExpiredPasswords.map(account1=>Reports(account1))}
        </div>
        </>
    )
}
function Reports(account1){
return(
    <>
    <UserCardSmall 
         overrides={
        {               
                  AccountName : {children: account1.name},
                  UserID : {children: account1.userID},
                  PasswordExpiration : {children: account1.passwordExpiration},
                }
            }></UserCardSmall>
    </>
    )
}

export function AdminJournalEntry(){

}

export function getPasswordReport(){
let passwordReport = [];
passwordReport.push(new ExpiredPassword("name",5001,"10/21/21","3 days"));
passwordReport.push(new ExpiredPassword("juke",1000,"9/1/22","1 day"));
passwordReport.push(new ExpiredPassword("dave",9,"2/2/20","30 days"));
passwordReport.push(new ExpiredPassword("steve",1,"8/2/20","123 days"));
passwordReport.push(new ExpiredPassword("spencer",11,"7/3/23","305 days"));
passwordReport.push(new ExpiredPassword("dave",1011,"8/3/23","180 days"));
passwordReport.push(new ExpiredPassword("sean",1092,"12/21/23","300 days"));

return passwordReport;

    
}