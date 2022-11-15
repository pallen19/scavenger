
import {collection,getDocs,} from 'firebase/firestore';
import {db} from '../../firestore-config'
import {PageHeader} from '../../ui-components';
import {getAccountCards,GetAccountData} from './AccountFunctions'
import {useState,useEffect} from 'react';
import {useNavigate,useLocation,Link} from 'react-router-dom'



 //Classes
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
//End of Classes

// Test Data
export function getTestData(){
    let accountTestData = [];
    accountTestData.push(new Account("12345",19,"edibles","Objects capable of being consumed",14265,true));
    accountTestData.push(new Account("Bananas",19,"edibles","Objects capable of being comsumed",14265,true));
    accountTestData.push(new Account("Weggs",765,"diffrent edibles","diffrent Objects capable of being consumed",14885,false));
    accountTestData.push(new Account("Anime",1337,"UwU","I hate myself for making this",12345,false));
    accountTestData.push(new Account("Rocks",4,"not edibles","Objects you should not comsume",11,false));
    accountTestData.push(new Account("Unlisted",420,"NOT DRUGS","I said its not drugs",69420,false));
    accountTestData.push(new Account("12345",19,"edibles","Objects capable of being consumed",14265,true));
    accountTestData.push(new Account("Bananas",19,"edibles","Objects capable of being comsumed",14265,true));
    accountTestData.push(new Account("Weggs",765,"diffrent edibles","diffrent Objects capable of being consumed",14885,false));
    accountTestData.push(new Account("Anime",1337,"UwU","I hate myself for making this",12345,false));
    accountTestData.push(new Account("Rocks",4,"not edibles","Objects you should not comsume",11,false));
    accountTestData.push(new Account("Unlisted",420,"NOT DRUGS","I said its not drugs",69420,false));
    accountTestData.push(new Account("12345",19,"edibles","Objects capable of being consumed",14265,true));
    accountTestData.push(new Account("Bananas",19,"edibles","Objects capable of being comsumed",14265,true));
    accountTestData.push(new Account("Weggs",765,"diffrent edibles","diffrent Objects capable of being consumed",14885,false));
    accountTestData.push(new Account("Anime",1337,"UwU","I hate myself for making this",12345,false));
    accountTestData.push(new Account("Rocks",4,"not edibles","Objects you should not comsume",11,false));
    accountTestData.push(new Account("Unlisted",420,"NOT DRUGS","I said its not drugs",69420,false));
    return accountTestData;
    }

//End of Test Data

//Page
export function ViewAcct(props){
    //Constants
    const location = useLocation();
    const navigation = useNavigate();
    const testAccounts = [...getTestData()];
    const [modal,setModal] = useState(false);
    const [accounts, setAccounts] = useState([]);

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
         PageTitle: {children: <Link to="/Journals">New Journal Entry</Link>}
     }}/>
        <div className="arrangeAccounts">
       {testAccounts.map(account => getAccountCards(account))}
       {/* {accounts.map(account => getAccountCards(account))} */}
        </div>
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
