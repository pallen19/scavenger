import { Button, Flex } from "@aws-amplify/ui-react";
import React from "react";
import { AccountCard } from "./ui-components";
import { useState } from "react";
import { db, storage } from './database/firebase';
import * as firebase from 'firebase/app';
import { collection, getDocs, getDoc, updateDoc, query, where, arrayUnion, documentId, doc, arrayRemove, addDoc, setDoc } from 'firebase/firestore';
import "firebase/firestore";
import { ref, uploadBytes } from 'firebase/storage';
// import 'package:cloud_firestore/cloud_firestore';

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


// accountData.push(
//     new Account(account.name, account.number, account.subCategory, account.description, account.balance,  account.isActive))

export function getAccountData(){
    const accountsColRef = collection(db, "accounts");
    let accounts = []
    getDoc(accountsColRef)
    .then(snapshot => {
        snapshot.forEach(account => {
            setDoc(account)
        })
        return setDoc;
    });
    
}

export function getTestData(){
let accountTestData = [];
accountTestData.push(new Account("Bananas",19,"edibles","Objects capable of being comsumed",14265,false));
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
    const accounts = [...getAccountData()];

    // const accountsColRef = collection(db, "accounts");
    // let count = accountsColRef.size;

    return (
        <>
        <h1>ADMIN view accounts</h1>
        <div className="d-inline-flex p-2">
       {/* {testAccounts.map(account => getAccountCards(account))} */}
       {accounts.map(account => getAccountCards(account))}
        
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
                  SwitchField: {isDisabled: account.isActive},
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