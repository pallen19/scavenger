

import { getDocs, collection, deleteDoc, setDoc, addDoc } from "firebase/firestore";

import { db } from '../../firestore-config'

const pendingJournalsColRef = collection(db, "pendingJournalEntries")
const approvedJournalsColRef = collection(db, "approvedJournalEntries")


export function getAccountNames() {

    const accountsColRef = collection(db, "accounts")

    const array = [];



    getDocs(accountsColRef)

        .then(snapshot => {

            snapshot.forEach(account => {

                array.push({ "id": account.id, "accountName": account.data().accountName })

            })

        })

    return array;

}



export function getAccounts() {

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

export function getJournals(journal, callback) {


    const array = [];



    getDocs(pendingJournalsColRef)

        .then(snapshot => {

            snapshot.forEach(account => {

                array.push({
                    "id": account.id, "accountName": account.data().accountName,

                    'debit': account.data().debit,

                    'credit': account.data().credit,

                    'entryDate': account.data().entryDate,

                    'actions': <><button className="actionButtons">View Journal</button>

                        <button className="actionButtons" onClick={() => setJournalStatus(account)}>Approve</button>

                        <button className="actionButtons" onClick={() => setJournalStatus(account)}>Deny</button></>
                })

            })

        })

    return array;

}



//get approved journals

export function getApprovedJournals(journal, callback) {

    const approvedJournalsColRef = collection(db, "approvedJournalEntries")

    const array = [];



    getDocs(approvedJournalsColRef)

        .then(snapshot => {

            snapshot.forEach(account => {

                array.push({
                    "id": account.id, "accountName": account.data().accountName,

                    'debit': account.data().debit,

                    'credit': account.data().credit,

                    'entryDate': account.data().entryDate,

                    'actions': <><button className="actionButtons" onClick={() => callback(account)}>View Journal</button></>
                })

            })

        })

    return array;

}



//get denied journals

export function getDeniedJournals(journal, callback) {

    const deniedJournalsColRef = collection(db, "deniedJournalEntries")

    const array = [];



    getDocs(deniedJournalsColRef)

        .then(snapshot => {

            snapshot.forEach(account => {

                array.push({
                    "id": account.id, "accountName": account.data().accountName,

                    'debit': account.data().debit,

                    'credit': account.data().credit,

                    'entryDate': account.data().entryDate,

                    'actions': <><button className="actionButtons" onClick={() => callback(journal)}>View Journal</button></>
                })

            })

        })

    return array;

}

export async function setJournalStatus(journal) {
    // copy pending
    await addDoc(approvedJournalsColRef, { id: journal.id, accountName: journal.accountName, debit: journal.debit, credit: journal.credit,
        entryDate: journal.entryDate
    }).then(console.log("I'm working"))
    console.log(journal.accountName)

    // await deleteDoc('pendingJournalEntries', journal)

}