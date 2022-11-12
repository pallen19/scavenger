import { Button, Flex } from "@aws-amplify/ui-react";
import React from "react";
import { AccountCard, UserCardSmall } from "./ui-components";
import { useState } from "react";
//import { db, storage } from './database/firebase';
import * as firebase from 'firebase/app';
import { collection, getDocs, deleteDoc, getDoc, updateDoc, query, where, arrayUnion, documentId, doc, arrayRemove, addDoc } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';
import { db } from './firestore-config'
import { useEffect } from "react";


class Account {
    constructor(accountName, accountNumber, accountSubcategory, accountDescription, accountCreation, order, statement, comments, userID, normalSide, initialBalance,
        debit, credit, balance, isActive, ) {

        this.accountName = accountName;
        this.accountNumber = accountNumber;
        this.accountSubcategory = accountSubcategory;
        this.accountDescription = accountDescription;
        this.accountCreation = accountCreation;
        this.order = order;
        this.statement = statement;
        this.comments = comments;
        this.userID = userID;
        this.normalSide = normalSide;
        this.initialBalance = initialBalance;
        this.debit = debit;
        this.credit = credit;
        this.balance = balance;
        this.isActive = isActive;
    }
}

class ExpiredPassword {
    constructor(name, userID, dateGenerated, passwordExpiration) {

        this.name = name;
        this.userID = userID;
        this.dateGenerated = dateGenerated;
        this.passwordExpiration = passwordExpiration;
    }
}

export function AdminNewAcct() {

    return (
        <>
            <h1>ADMIN newAccount Page</h1>

        </>

    )
}
export function AdminHome() {

    return (
        <>
            <h1>ADMIN home</h1>

        </>

    )
}


export function AdminViewAcct() {

    const [accounts, setAccounts] = useState([]);

    const testAccountsColRef = collection(db, "accounts")

    useEffect(() => {

        const getUsers = async () => {
            const data = await getDocs(testAccountsColRef);
            setAccounts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getUsers()

    }, [])

    return (
        <>
            <h1>ADMIN view accounts</h1>
            <div className="d-inline-flex p-2">
                {accounts.map(account => getAccountCards(account))}
                {/* {accounts.map(account => getAccountCards(account))} */}

            </div>
        </>
    )
}

async function deleteAccount(id) {
    const testAccountsDoc = doc(db, "accounts", id) //references to that document
    await deleteDoc(testAccountsDoc);
}

function EditAccount() {


    return (
        <div>

        </div>
    )

}

function getAccountCards(account) {

    return (
        <>
            <AccountCard
                overrides={
                    {
                        'edit': { onClick: () => { EditAccount() } },
                        'trash-alt': { onClick: () => { deleteAccount(account.id) } }, // trash can delete function on all account cards
                        AccountName: { children: account.accountName },
                        AccountNumber: { children: account.accountNumber },
                        Subcategory: { children: account.accountSubcategory },
                        AccountDescription: { children: account.accountDescription },
                        AccountCreation: {children: account.accountCreation},
                        Order: {children: account.order},
                        Statement: {children: account.statement},
                        Comments: {children: account.comments},
                        UserID: {children: account.userID},
                        NormalSide: {children: account.normalSide},
                        InitialBalance: {children: account.initialBalance},
                        Debit: {children: account.debit},
                        Credit: {children: account.credit},
                        Balance: { children: account.balance },
                        SwitchField: { defaultChecked: account.isActive }
                    }
                }></AccountCard>

            {/* <AccountCard overrides={{'trash-alt' : {onClick : () => deleteAccount(account.id)}  }}></AccountCard> */}
        </>
    )
}


export function AdminNewUser() {

    return (
        <>
            <h1>ADMIN  newUser</h1>
        </>
    )
}

export function AdminReport() {
    const testExpiredPasswords = [...getPasswordReport()];

    const [userInfo, setUserInfo] = useState([]);

    const usersColRef = collection(db, "testUsers");



    useEffect(() => {

        const getUsers = async () => {

            const data = await getDocs(usersColRef);
            setUserInfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getUsers()

    }, [])


    return (
        <>
            <h1>Admin Reports</h1>
            <div className="d-inline-flex p-2">
                {/*{testExpiredPasswords.map(account1=>getPasswordReport(account1))} */}
                {userInfo.map(account1 => Reports(account1))}
            </div>
        </>
    )
}

function Reports(account1) {

    // let creationDateEdit = account1.dateGenerated //.toString().substring(0, 10) // 2022-10-30

    // let currentDate = this.state.dateGenerated.substring(0, 3) + ((parseInt(this.state.dateGenerated.substring(3, 4))) + 1) + "-"
    //     + this.state.dateGenerated.substring(5, 7) + "-" + this.state.dateGenerated.substring(8, 10);  // 2023-10-30

    // let concatCreationDate = new Date(creationDateEdit)
    // let expirationDate = new Date(currentDate)

    // const isExpired = () => {

    //     if (concatCreationDate < expirationDate) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }

    // }

    return (
        <>
    
        

                <UserCardSmall
                    overrides={
                        {
                            AccountName: { children: account1.name },
                            UserID: { children: account1.userID },
                            DateofGeneratedReport : { children: account1.dateGenerated },
                            PasswordExpiration: { children: account1.passwordExpiration },
                        }
                    }></UserCardSmall>

         
            

        </>
    )
}

export function getPasswordReport() {
    let passwordReport = [];
    passwordReport.push(new ExpiredPassword("name", 5001, "10/21/21", "3 days"));
    passwordReport.push(new ExpiredPassword("juke", 1000, "9/1/22", "1 day"));
    passwordReport.push(new ExpiredPassword("dave", 9, "2/2/20", "30 days"));
    passwordReport.push(new ExpiredPassword("steve", 1, "8/2/20", "123 days"));
    passwordReport.push(new ExpiredPassword("spencer", 11, "7/3/23", "305 days"));
    passwordReport.push(new ExpiredPassword("dave", 1011, "8/3/23", "180 days"));
    passwordReport.push(new ExpiredPassword("sean", 1092, "12/21/23", "300 days"));

    return passwordReport;


}

