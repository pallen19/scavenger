

import { getDocs,collection } from "firebase/firestore";

import { db } from '../../firestore-config'

 

export function getAccountNames(){

    const accountsColRef = collection(db, "accounts")

    const array = [];

 

getDocs(accountsColRef)

            .then(snapshot => {

                snapshot.forEach(account => {

                    array.push( {"id": account.id ,"accountName": account.data().accountName })

                })

            })

            return array;

}

 

export function getAccounts(){

    const accountsColRef = collection(db, "accounts")

    const array = [];

 

getDocs(accountsColRef)

            .then(snapshot => {

                snapshot.forEach(account => {

                    array.push(account)

                })

            })

            return array;

}

 

//get pending journals

export function getJournals(){

    const pendingJournalsColRef = collection(db, "pendingJournalEntries")

    const array = [];

 

getDocs(pendingJournalsColRef)

            .then(snapshot => {

                snapshot.forEach(account => {

                    array.push( {"id": account.id ,"accountName": account.data().accountName,

                    'debit': account.data().debit,

                    'credit': account.data().credit,

                    'entryDate': account.data().entryDate,

                    'actions': <><button className="actionButtons">View Journal</button>

                    <button className="actionButtons">Approve</button>

                    <button className="actionButtons">Deny</button></>})

                })

            })

            return array;

}

 

//get approved journals

export function getApprovedJournals(){

    const approvedJournalsColRef = collection(db, "approvedJournalEntries")

    const array = [];

 

getDocs(approvedJournalsColRef)

            .then(snapshot => {

                snapshot.forEach(account => {

                    array.push( {"id": account.id ,"accountName": account.data().accountName,

                    'debit': account.data().debit,

                    'credit': account.data().credit,

                    'entryDate': account.data().entryDate,

                    'actions': <><button className="actionButtons">View Journal</button></>})

                })

            })

            return array;

}

 

//get denied journals

export function getDeniedJournals(){

    const deniedJournalsColRef = collection(db, "deniedJournalEntries")

    const array = [];

 

getDocs(deniedJournalsColRef)

            .then(snapshot => {

                snapshot.forEach(account => {

                    array.push( {"id": account.id ,"accountName": account.data().accountName,

                    'debit': account.data().debit,

                    'credit': account.data().credit,

                    'entryDate': account.data().entryDate,

                    'actions': <><button className="actionButtons">View Journal</button></>})

                })

            })

            return array;

}