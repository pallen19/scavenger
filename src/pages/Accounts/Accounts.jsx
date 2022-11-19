import Modal from '../../components/Modal/Modal'
import { collection, getDocs, updateDoc, doc} from 'firebase/firestore';
import { db } from '../../firestore-config'
import { PageHeader } from '../../ui-components';
import { getAccountCards, GetAccountData } from './AccountFunctions'
import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { TextField } from '@aws-amplify/ui-react';
import TabWindow from '../../components/TabWindow/TabWindow';



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

//Page
export function ViewAcct(props) {
    //Constants
    const location = useLocation();
    const navigate = useNavigate();
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
    
    const editAccount = (entireAccount) => {

        setActiveAccount(entireAccount);
        setModal(true);
        //console.log('calling this function')

    }

    const addAccount = async () => {
        
        const docToBeEdited = doc(db, "accounts", activeAccount.id)
        
        if(accountNumber != "")
        {
            const newAccountNumber = { accountNumber : accountNumber }
            await updateDoc(docToBeEdited, newAccountNumber)
        }

        if(accountSubcategory != "")
        {
            const newAccountSubcategory = { accountSubcategory : accountSubcategory }
            await updateDoc(docToBeEdited, newAccountSubcategory)
        }

        if(accountDescription != "")
        {
            const newAccountDescription  = { accountDescription : accountDescription }
            await updateDoc(docToBeEdited, newAccountDescription)
        }

        if(accountOrder != "")
        {
            const newAccountOrder = { accountOrder : accountOrder }
            await updateDoc(docToBeEdited, newAccountOrder)
        }

        if(statement != "")
        {
            const newStatement = { statement : statement }
            await updateDoc(docToBeEdited, newStatement)
        }

        if(comments != "")
        {
            const newComments = { comments : comments }
            await updateDoc(docToBeEdited, newComments)
        }

        if(normalSide != "")
        {
            const newNormalSide = { normalSide : normalSide }
            await updateDoc(docToBeEdited, newNormalSide)
        }

        if(initialBalance != "")
        {
            const newInitialBalance = { initialBalance : initialBalance }
            await updateDoc(docToBeEdited, newInitialBalance)
        }

        if(debit != "")
        {
            const newDebit = { debit : debit }
            await updateDoc(docToBeEdited, newDebit)
        }

        if(credit != "")
        {
            const newCredit = { credit : credit }
            await updateDoc(docToBeEdited, newCredit)
        }

        if(balance != "")
        {
            const newBalance = { balance : balance }
            await updateDoc(docToBeEdited, newBalance)
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

    }, [])
    //End of Constants
 
switch(props.level){
case 'Administrators':
    return (
        <>
        <h1>Admins</h1>
        <PageHeader overrides={{
         PageHeader: {width:"100%"},
         Background:{width: "100%"},
         PageTitle: {children:"Accounts"}
     }}/>
     <TabWindow innerStyle="arrangeAccounts">{testAccounts.map(account => getAccountCards(account, editAccount))}</TabWindow>
       {/* {accounts.map(account => getAccountCards(account))} */}
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
     );
case 'Managers':
    return(
    <h1>Admins</h1>
    )
case 'Accountant':
    return(
        <h1>Accountant</h1>
        )
default:
    return(<h1>Access Denied</h1>)
}   
}
//End of Page
