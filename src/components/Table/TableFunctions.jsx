import { useState } from "react";

import { getDocs, collection, deleteDoc, setDoc, addDoc, doc, updateDoc } from "firebase/firestore";

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

    const debitAccountID = "";
    const debitBalance = "";

    const creditAccountID = "";
    const creditBalance = "";

    const debitAccount = journal.accountName
    const creditAccount = journal.accountNameCredit

    const accountsColRef = collection(db, "accounts")

    //getting debit account ID
    getDocs(accountsColRef)
        .then(snapshot => {
            snapshot.forEach(account => {

                if (account.data().accountName === debitAccount) {
                    debitAccountID = account.id; // setting this variable to the document's ID - 'XsZ0SW2vOIfnosVyvGs3'
                    debitBalance = account.data().endBalance.split(".")
                }

                if (account.data().accountName === creditAccount) {
                    creditAccountID = account.id;
                    creditBalance = account.data().endBalance.split(".")
                }
            })
        })


    const debitAccountToBeEdited = doc(db, "accounts", debitAccountID)
    const creditAccountToBeEdited = doc(db, "accounts", creditAccountID)

    const newDebitBalance = 0;

    if (debitBalance.length === 2) {
        //["12", "34"] - debitBalance

        //["100", "45"] - account Balance

        if (journal.debit.split(".").length === 2) {
            const dollars = parseInt(journal.debit.split(".")[0]) + parseInt(debitBalance.split(".")[0])
            const cents = parseInt(journal.debit.split(".")[1]) + parseInt(debitBalance.split(".")[1])

            if (cents >= 100) {
                dollars = dollars + ((cents / 100));
                cents = cents % 100;
            }

            newDebitBalance = dollars + "." + cents;
        }
        else {
            const dollars = parseInt(journal.debit) + parseInt(debitBalance.split(".")[0])
            const cents = parseInt(debitBalance.split(".")[1])

            newDebitBalance = dollars + "." + cents;
        }

    }
    //debitBalance.length === 1 ... ["1234"]
    else {
        if (journal.debit.split(".").length === 2) {
            const dollars = parseInt(journal.debit.split(".")[0]) + parseInt(debitBalance)
            const cents = parseInt(journal.debit.split(".")[1])

            newDebitBalance = dollars + "." + cents;

        }
        else {
            const dollars = parseInt(journal.debit) + parseInt(debitBalance)

            newDebitBalance = dollars + "";
        }

    }






    const newCreditBalance = 0;

    // CREDIT CHANGE HERE

    if (creditBalance.length === 2) {
        //["12", "34"] - debitBalance

        //["100", "45"] - account Balance

        if (journal.credit.split(".").length === 2) {
            const dollars = parseInt(journal.credit.split(".")[0]) + parseInt(creditBalance.split(".")[0])
            const cents = parseInt(journal.credit.split(".")[1]) + parseInt(creditBalance.split(".")[1])

            if (cents >= 100) {
                dollars = dollars + ((cents / 100));
                cents = cents % 100;
            }

            newCreditBalance = dollars + "." + cents;
        }
        else {
            const dollars = parseInt(journal.credit) + parseInt(creditBalance.split(".")[0])
            const cents = parseInt(creditBalance.split(".")[1])

            newCreditBalance = dollars + "." + cents;
        }

    }
    //debitBalance.length === 1 ... ["1234"]
    else {
        if (journal.credit.split(".").length === 2) {
            const dollars = parseInt(journal.credit.split(".")[0]) + parseInt(creditBalance)
            const cents = parseInt(journal.credit.split(".")[1])

            newCreditBalance = dollars + "." + cents;
        }
        else {
            const dollars = parseInt(journal.credit) + parseInt(creditBalance)
            newCreditBalance = dollars + "";
        }

    }

    const newCreditField = { endBalance: newCreditBalance }
    const newDebitField = { endBalance: newDebitBalance }


    await updateDoc(creditAccountToBeEdited, newCreditField);
    await updateDoc(debitAccountToBeEdited, newDebitField);

    //create doc to be deleted
    const deleteThis = doc(db, "pendingJournalEntries", journal.id)

    // copy pending
    await addDoc(approvedJournalsColRef, {
        id: journal.id, accountName: journal.accountName,
        debit: journal.debit, credit: journal.credit,
        entryDate: journal.entryDate, accountNameCredit: journal.accountNameCredit,
    }).then(console.log("I'm working"))

    console.log(journal.accountName)
    await deleteDoc(deleteThis)

}
export async function denyJournal(journal) {
    //create doc to be deleted
    const deleteThis = doc(db, "pendingJournalEntries", journal.id)
    // copy pending
    await addDoc(deniedJournalsColRef, {
        id: journal.id, accountName: journal.accountName, debit: journal.debit, credit: journal.credit,
        entryDate: journal.entryDate, accountNameCredit: journal.accountNameCredit,
    })
    console.log(journal.accountName)
    await deleteDoc(deleteThis)
}