import React from 'react'
import { db } from './firebase'
import {useState} from 'react';
import { collection, addDoc} from 'firebase/firestore'
import AdminViewNewAcct from '../ui-components/AdminViewNewAcct';

function Register(props) {
    const [accountName, setAccountName]= useState("")
    const [accountNumber, setAccountNumber]= useState("")
    const [accountDescription, setAccountDescription]= useState("")
    const [accountCategory, setAccountCategory]= useState("")
    const [accountSubcategory,setAccountSubCategory]= useState("")
    const [userID,setUserID]= useState("")
    const [order,setOrder]= useState("")
    const [debit,setDebit]= useState("")
    const [credit ,setCredit]= useState("")
    const [initBalance,setInitBalance]= useState("")
    const [endingBalance,setEndingBalance]= useState("")
    const [accountCreation,setAccountCreation]= useState("")
    const [comment,setComment]= useState("")
    const accountsColRef = collection(db, "accounts");

    const handleSubmit = event =>{
      console.log('handleSubmit ran');
      event.preventDefault();

      console.log('Credit', credit);
      console.log('Debit', debit);

      setDebit('');
      setCredit('');
    };
    const createNewAccount = async (accountCategory, accountDescription, accountName, accountNo, accountSubcategory, balance, comment, creationDate, credit,
         debit, initialBalance, orderNo, statement, userID) => {
        try {
            await addDoc(accountsColRef, { accountCategory : accountCategory, accountDescription : accountDescription, accountName : accountName, accountNo :
                 accountNo, accountSubcategory : accountSubcategory, balance : balance,
            comment : comment, creationDate : creationDate, credit : credit, debit : debit, initialBalance : initialBalance, orderNo : orderNo, statement :
             statement, userID : userID})

        } catch (error) {
            console.log(error.message)
        }
    }

    
    
     const getValues = (props) => {
      return (
       <>

       </>
      )
    }
    
  return (
    <div className='registerAccount'>

    </div>
    
    
  )
}

{/*event.target.value*/}