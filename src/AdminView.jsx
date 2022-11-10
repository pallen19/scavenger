import { Button, Flex } from "@aws-amplify/ui-react";
import React from "react";
import { AccountCard } from "./ui-components";
import { useState } from "react";
import { db, storage } from './database/firebase';
import * as firebase from 'firebase/app';
import { collection, getDocs, getDoc, updateDoc, query, where, arrayUnion, documentId, doc, arrayRemove, addDoc } from 'firebase/firestore';
import "firebase/firestore";
import { ref, uploadBytes } from 'firebase/storage';

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
    const accounts = [...GetAccountData()];

    // const accountsColRef = collection(db, "accounts");
    // let count = accountsColRef.size;

    return (
        <>
        <h1>ADMIN view accounts</h1>
        <div className="d-inline-flex p-2">
       {testAccounts.map(account => getAccountCards(account))}
       {/* {accounts.map(account => getAccountCards(account))} */}
        
        </div>

        </>

     )
}

function getAccountCards(account){
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
                }
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