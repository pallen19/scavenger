import { Flex } from "@aws-amplify/ui-react"
import React from "react"
import { AccountCard } from "./ui-components"
import { useState } from "react";
import { db, storage } from './firebase'
import * as firebase from 'firebase/app'
import { collection, getDocs, getDoc, updateDoc, query, where, arrayUnion, documentId, doc, arrayRemove, addDoc } from 'firebase/firestore'
import "firebase/firestore"
import { ref, uploadBytes } from 'firebase/storage'

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