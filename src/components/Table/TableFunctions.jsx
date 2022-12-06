

import { getDocs, collection, deleteDoc, setDoc, addDoc, doc} from "firebase/firestore";

import { db } from '../../firestore-config'

const pendingJournalsColRef = collection(db, "pendingJournalEntries")
const approvedJournalsColRef = collection(db, "approvedJournalEntries")
const deniedJournalsColRef = collection(db, "deniedJournalEntries")

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
                    "id": account.id, 
                    "accountName": account.data().accountName, 
                    "accountNameCredit": account.data().accountNameCredit,
                    'debit': account.data().debit,
                    'credit': account.data().credit,
                    'entryDate': account.data().entryDate,
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
                    "id": account.id, 
                    "accountName": account.data().accountName,
                    "accountNameCredit": account.data().accountNameCredit,
                    'debit': account.data().debit,
                    'credit': account.data().credit,
                    'entryDate': account.data().entryDate,
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
                    "id": account.id, 
                    "accountName": account.data().accountName,
                    "accountNameCredit": account.data().accountNameCredit,
                    'debit': account.data().debit,
                    'credit': account.data().credit,
                    'entryDate': account.data().entryDate,
                })
            })
        })
    return array;
}

export async function approveJournal(journal) {
    //create doc to be deleted
    const deleteThis = doc(db, "pendingJournalEntries" ,journal.id)
    // copy pending
    await addDoc(approvedJournalsColRef, { id: journal.id, accountName: journal.accountName, 
        debit: journal.debit, credit: journal.credit,
        entryDate: journal.entryDate, accountNameCredit: journal.accountNameCredit,
    }).then(console.log("I'm working"))
    console.log(journal.accountName)
    await deleteDoc(deleteThis)

}
export async function denyJournal(journal) {
    //create doc to be deleted
    const deleteThis = doc(db, "pendingJournalEntries" ,journal.id)
    // copy pending
    await addDoc(deniedJournalsColRef, { id: journal.id, accountName: journal.accountName, debit: journal.debit, credit: journal.credit,
        entryDate: journal.entryDate,accountNameCredit: journal.accountNameCredit,
    })
    console.log(journal.accountName)
    await deleteDoc(deleteThis)
}