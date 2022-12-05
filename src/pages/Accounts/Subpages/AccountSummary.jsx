import { getAccountCards, GetAccountData } from '../AccountFunctions'
import Modal from '../../../components/Modal/Modal'
import { collection, getDocs, updateDoc, doc, addDoc, arrayUnion} from 'firebase/firestore';
import { db } from '../../../firestore-config'
import { useState, useEffect } from 'react';

//Classes
class Account {
    constructor(accountName, accountNumber, accountSubcategory, accountDescription, accountCreation, order, statement, comments, userID, normalSide, initialBalance,
        debit, credit, balance, isActive,) {

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
//End of Classes

// Test Data
export function getTestData() {
    let accountTestData = [];
    accountTestData.push(new Account("12345", 19, "edibles", "Objects capable of being consumed", 14265, true));
    accountTestData.push(new Account("Bananas", 19, "edibles", "Objects capable of being comsumed", 14265, true));
    accountTestData.push(new Account("Weggs", 765, "diffrent edibles", "diffrent Objects capable of being consumed", 14885, false));
    accountTestData.push(new Account("Anime", 1337, "UwU", "I hate myself for making this", 12345, false));
    accountTestData.push(new Account("Rocks", 4, "not edibles", "Objects you should not comsume", 11, false));
    accountTestData.push(new Account("Unlisted", 420, "NOT DRUGS", "I said its not drugs", 69420, false));
    accountTestData.push(new Account("12345", 19, "edibles", "Objects capable of being consumed", 14265, true));
    accountTestData.push(new Account("Bananas", 19, "edibles", "Objects capable of being comsumed", 14265, true));
    accountTestData.push(new Account("Weggs", 765, "diffrent edibles", "diffrent Objects capable of being consumed", 14885, false));
    accountTestData.push(new Account("Anime", 1337, "UwU", "I hate myself for making this", 12345, false));
    accountTestData.push(new Account("Rocks", 4, "not edibles", "Objects you should not comsume", 11, false));
    accountTestData.push(new Account("Unlisted", 420, "NOT DRUGS", "I said its not drugs", 69420, false));
    accountTestData.push(new Account("12345", 19, "edibles", "Objects capable of being consumed", 14265, true));
    accountTestData.push(new Account("Bananas", 19, "edibles", "Objects capable of being comsumed", 14265, true));
    accountTestData.push(new Account("Weggs", 765, "diffrent edibles", "diffrent Objects capable of being consumed", 14885, false));
    accountTestData.push(new Account("Anime", 1337, "UwU", "I hate myself for making this", 12345, false));
    accountTestData.push(new Account("Rocks", 4, "not edibles", "Objects you should not comsume", 11, false));
    accountTestData.push(new Account("Unlisted", 420, "NOT DRUGS", "I said its not drugs", 69420, false));
    return accountTestData;
}

//End of Test Data


export function AccountSummary(props){
    const testAccounts = [...getTestData()];
    const [modal, setModal] = useState(false);
    const [accounts, setAccounts] = useState([]);

    const [activeAccount, setActiveAccount] = useState("")

    const [id, setID] = useState("")
    const [accountName, setAccountName] = useState("")
    const [accountNumber, setAccountNumber] = useState("")
    const [accountSubcategory, setAccountSubcategory] = useState("")
    const [accountDescription, setAccountDescription] = useState("")
    const [accountCreation, setAccountCreation] = useState("")
    const [accountOrder, setAccountOrder] = useState("")
    const [statement, setStatement] = useState("")
    const [comments, setComments] = useState("")
    const [normalSide, setNormalSide] = useState("")
    const [initialBalance, setInitialBalance] = useState("")
    const [debit, setDebit] = useState("")
    const [credit, setCredit] = useState("")
    const [balance, setBalance] = useState("")

    const eventLogColRef = collection(db, "eventLog")
    
    const editAccount = (entireAccount) => {

        setActiveAccount(entireAccount);
        setModal(true);
        //console.log('calling this function')

    }

    const getAccountID = async (randomNumber) => {

        await getDocs(eventLogColRef)
            .then(snapshot => {
                snapshot.forEach(user => {
                    //billybobID = user.id
                    if (user.data().number === randomNumber) // searching for the document whose first name is "BILLY"
                    {
                        setID(user.id) // setting this variable to the document's ID you want to find - 'XsZ0SW2vOIfnosVyvGs3'
                    }
                })
            })

        return id;
    }

    const addAccount = async () => {
        
        const docToBeEdited = doc(db, "accounts", activeAccount.id)

        const currDate = new Date()
        const enteredDate = currDate.toString().substring(0, 15)
        const ranNum = Math.floor(Math.random() * 100000) + 1;

        await addDoc(eventLogColRef, {altered : activeAccount.accountName, changes : "Edited", dateAltered : enteredDate, number : ranNum,
            before : "", after : ""})

        const eventLogID = await getAccountID(ranNum);

        const eventLogToBeEdited = doc(db, "eventLog", eventLogID)


        if(accountNumber != "")
        {
            const newAccountNumber = { accountNumber : accountNumber }
            await updateDoc(docToBeEdited, newAccountNumber)
            await updateDoc(eventLogToBeEdited, {before : "accountNumber : " + activeAccount.accountNumber})
            await updateDoc(eventLogToBeEdited, {after : "accountNumber : " + accountNumber})
        }

        if(accountSubcategory != "")
        {
            const newAccountSubcategory = { accountSubcategory : accountSubcategory }
            await updateDoc(docToBeEdited, newAccountSubcategory).then(console.log("updated1"))

            const beforeInfo = "accountSubcategory : " + activeAccount.accountSubcategory + ", "
            const afterInfo = "accountSubcategory : " + accountSubcategory + ", "

            console.log("before: " + beforeInfo)
            console.log("after: " + afterInfo)

            await updateDoc(eventLogToBeEdited, {before: arrayUnion(beforeInfo)})
            await updateDoc(eventLogToBeEdited, {after : arrayUnion(afterInfo)})
        }

        if(accountDescription != "")
        {
            const newAccountDescription  = { accountDescription : accountDescription }
            await updateDoc(docToBeEdited, newAccountDescription)

            const beforeInfo = "accountDescription : " + activeAccount.accountDescription + ", "
            const afterInfo = "accountDescription : " + accountDescription + ", "

            await updateDoc(eventLogToBeEdited, {before: arrayUnion(beforeInfo)})
            await updateDoc(eventLogToBeEdited, {after: arrayUnion(afterInfo)})
        }

        if(accountOrder != "")
        {
            const newAccountOrder = { accountOrder : accountOrder }
            await updateDoc(docToBeEdited, newAccountOrder)

            const beforeInfo = "accountOrder : " + activeAccount.accountOrder + ", "
            const afterInfo = "accountOrder : " + accountOrder + ", "

            await updateDoc(eventLogToBeEdited, {before: arrayUnion(beforeInfo)})
            await updateDoc(eventLogToBeEdited, {after: arrayUnion(afterInfo)})
        }

        if(statement != "")
        {
            const newStatement = { statement : statement }
            await updateDoc(docToBeEdited, newStatement)

            const beforeInfo = "statement : " + activeAccount.statement + ", "
            const afterInfo = "statement : " + statement + ", "

            await updateDoc(eventLogToBeEdited, {before: arrayUnion(beforeInfo)})
            await updateDoc(eventLogToBeEdited, {after: arrayUnion(afterInfo)})
        }

        if(comments != "")
        {
            const newComments = { comments : comments }
            await updateDoc(docToBeEdited, newComments)

            const beforeInfo = "comments : " + activeAccount.comments + ", "
            const afterInfo = "comments : " + comments + ", "

            await updateDoc(eventLogToBeEdited, {before: arrayUnion(beforeInfo)})
            await updateDoc(eventLogToBeEdited, {after: arrayUnion(afterInfo)})
        }

        if(normalSide != "")
        {
            const newNormalSide = { normalSide : normalSide }
            await updateDoc(docToBeEdited, newNormalSide)

            const beforeInfo = "normalSide : " + activeAccount.normalSide + ", "
            const afterInfo = "normalSide : " + normalSide + ", "

            await updateDoc(eventLogToBeEdited, {before: arrayUnion(beforeInfo)})
            await updateDoc(eventLogToBeEdited, {after: arrayUnion(afterInfo)})
        }

        if(initialBalance != "")
        {
            const newInitialBalance = { initialBalance : initialBalance }
            await updateDoc(docToBeEdited, newInitialBalance)

            const beforeInfo = "initialBalance : " + activeAccount.initialBalance + ", "
            const afterInfo = "initialBalance : " + initialBalance + ", "

            await updateDoc(eventLogToBeEdited, {before: arrayUnion(beforeInfo)})
            await updateDoc(eventLogToBeEdited, {after: arrayUnion(afterInfo)})
        }

        if(debit != "")
        {
            const newDebit = { debit : debit }
            await updateDoc(docToBeEdited, newDebit)

            const beforeInfo = "debit : " + activeAccount.debit + ", "
            const afterInfo = "debit : " + debit + ", "

            await updateDoc(eventLogToBeEdited, {before: arrayUnion(beforeInfo)})
            await updateDoc(eventLogToBeEdited, {after: arrayUnion(afterInfo)})
        }

        if(credit != "")
        {
            const newCredit = { credit : credit }
            await updateDoc(docToBeEdited, newCredit)

            const beforeInfo = "credit : " + activeAccount.credit + ", "
            const afterInfo = "credit : " + credit + ", "

            await updateDoc(eventLogToBeEdited, {before: arrayUnion(beforeInfo)})
            await updateDoc(eventLogToBeEdited, {after: arrayUnion(afterInfo)})
        }

        if(balance != "")
        {
            const newBalance = { balance : balance }
            await updateDoc(docToBeEdited, newBalance)

            const beforeInfo = "balance : " + activeAccount.balance + ", "
            const afterInfo = "balance : " + balance + ", "

            await updateDoc(eventLogToBeEdited, {before: arrayUnion(beforeInfo)})
            await updateDoc(eventLogToBeEdited, {after: arrayUnion(afterInfo)})
        }
    }

    const onClose = () => {
        setModal(false);
    }

    const testAccountsColRef = collection(db, "accounts")

    useEffect(() => {

        const getUsers = async () => {
            const data = await getDocs(testAccountsColRef);
            setAccounts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getUsers()

    }, []);
    //End of Constants
    return(
        <>
        {accounts.map(account => getAccountCards(account,editAccount))}
        <Modal show={modal} onClose={() => onClose()}>
                        <input placeholder={"Account ID: " + activeAccount.id} 
                            onChange={(event) => setID(event.target.value)}></input>

                        <input placeholder={"Account Name: " + activeAccount.accountName}  
                            onChange={(event) => setAccountName(event.target.value)}></input>

                        <input placeholder={"Account Number: " + activeAccount.accountNumber} 
                            onChange={(event) => setAccountNumber(event.target.value)}></input>

                        <input placeholder={"Account Subcategory: " + activeAccount.accountSubcategory} 
                            onChange={(event) => setAccountSubcategory(event.target.value)}></input>

                        <input placeholder={"Account Description: " + activeAccount.accountDescription} 
                            onChange={(event) => setAccountDescription(event.target.value)}></input>

                        <input placeholder={"Account Creation: " + activeAccount.accountCreation} 
                            onChange={(event) => setAccountCreation(event.target.value)}></input>

                        <input placeholder={"Account Order: " + activeAccount.accountOrder} 
                            onChange={(event) => setAccountOrder(event.target.value)}></input>

                        <input placeholder={"Account Statement: " + activeAccount.statement} 
                            onChange={(event) => setStatement(event.target.value)}></input>

                        <input placeholder={"Account Comments: " + activeAccount.comments} 
                            onChange={(event) => setComments(event.target.value)}></input>

                        <input placeholder={"Account Normal Side: " + activeAccount.normalSide} 
                            onChange={(event) => setNormalSide(event.target.value)}></input>

                        <input placeholder={"Account Initial Balance: " + activeAccount.initialBalance} 
                            onChange={(event) => setInitialBalance(event.target.value)}></input>

                        <input placeholder={"Account Debit: " + activeAccount.debit} 
                            onChange={(event) => setDebit(event.target.value)}></input>

                        <input placeholder={"Account Credit: " + activeAccount.credit} 
                            onChange={(event) => setCredit(event.target.value)}></input>

                        <input placeholder={"Account Balance: " + activeAccount.balance} 
                            onChange={(event) => setBalance(event.target.value)}></input>

                        <button onClick={addAccount}>Update Account</button>

                    </Modal>
                    </>
    
    )
}