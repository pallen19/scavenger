import { Flex } from "@aws-amplify/ui-react"
import React from "react"
import { AccountCard } from "./ui-components"
import { useState } from "react";
import { db, storage } from './firebase'
import * as firebase from 'firebase/app'
import { collection, getDocs, getDoc, updateDoc, query, where, arrayUnion, documentId, doc, arrayRemove, addDoc } from 'firebase/firestore'
import "firebase/firestore"
import { ref, uploadBytes } from 'firebase/storage'
class Account{
constructor(name,number,subCategory,description,balance,label,isActive){
this.name = name;
this.number = number;
this.subCategory = subCategory;
this.description = description;
this.balance = balance;
this.isActive = isActive;
}

}



export function getTestData(){
let accountTestData = [];
accountTestData.push(new Account("Bananas",19,"edibles","Objects capable of being comsumed",14265,false))
accountTestData.push(new Account("Weggs",765,"diffrent edibles","diffrent Objects capable of being comsumed",14885,false))
accountTestData.push(new Account("Anime",1337,"UwU","I hate myself for making this",12345,false))
accountTestData.push(new Account("Rocks",4,"not edibles","Objects you should not comsume",11,false))
accountTestData.push(new Account("Unlisted",420,"NOT DRUGS","I said its not drugs",69420,false))
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
    <div class="flex-container"></div>
    const accountsColRef = collection(db, "accounts");
    let count = accountsColRef.size;

    return (
        <>
        <h1>ADMIN view accounts</h1>
        
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