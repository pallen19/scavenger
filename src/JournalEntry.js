import React, {useState} from 'react'
import { JournalEntryForm } from './ui-components';
import {db} from './firestore-config'
import { Firestore, collection, addDoc} from 'firebase/firestore'

export const AdminJournalEntry = () => {
     const [account, setaccount] = useState("");
     const [referenceNumber, setreferenceNumber] = useState("");
     const [entryDate, setEntryDate] = useState("")
     const [debit, setdebit] = useState("")
     const [credit, setCredit] = useState("")
     const [onSubmit, setOnSubmit] = useState("")
     const [defaultView,setDefaultView]= useState(true)
     const accountsColRef = collection(db, "journalEntry")

     const addAccount = async (account, referenceNumber, entryDate, debit, credit) => {
        
        await addDoc(accountsColRef, { AccountName : account, ReferenceNumber : referenceNumber, EntryDate : entryDate,
            Debit : debit, Credit : credit
      })
    
    }

    const addToDB=() =>{
        {addDoc(account, referenceNumber, entryDate, debit, credit)}
          console.log("add accounts worked");
      }
      const addAccountToDB = async () => {
        await addDoc(accountsColRef, {AccountName : account, ReferenceNumber : referenceNumber, EntryDate : entryDate,
            Debit : debit, Credit : credit})
      }
      

    const DefaultView=(props)=>{
        if(defaultView){
          <JournalEntryForm style={{position:'relative' , left:'30em'}}
          overrides={{'SelectAccount' : {onChange : (event) => {setaccount(event.target.value)}},
          'Reference#' : {onChange : (event) => {setreferenceNumber(event.target.value) }},
          'Entry Date': {onChange  : (event) => {setEntryDate(event.target.value)}},
          'Debit' : {onChange : (event) => {setdebit(event.target.value)}},
          'Credit':{onChange   : (event) => {setCredit(event.target.value)}},
          'ButtonOnSubmit':{onClick : addAccountToDB}
          
          // 'Button34533256':{onClick:onNextButton},
         }}/> 
    
        }
      }
  
  return (
    <>
     <JournalEntryForm style={{position:'relative' , left:'30em'}}
          overrides={{'SelectAccount' : {onChange : (event) => {setaccount(event.target.value)}},
          'Reference#' : {onChange : (event) => {setreferenceNumber(event.target.value) }},
          'Entry Date': {onChange  : (event) => {setEntryDate(event.target.value)}},
          'Debit' : {onChange : (event) => {setdebit(event.target.value)}},
          'Credit':{onChange   : (event) => {setCredit(event.target.value)}},
          'ButtonOnSubmit':{onClick : ()=> {addToDB()} } //{/*addAccountToDB*/}
          
          // 'Button34533256':{onClick:onNextButton},
         }}/> 
         <button onClick = {addAccountToDB}>A Button</button>

         
    <div>AdminJournalEntry</div>
    </>
  )
}


export default AdminJournalEntry