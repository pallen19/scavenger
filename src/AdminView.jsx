import { Button, Flex,View} from "@aws-amplify/ui-react";
import React from "react";
import { AccountCard,PageHeader,UserCardSmall,JournalEntryForm,AdminViewNewAcct,AdminViewNewAcct2} from "./ui-components";
import { useState,useEffect } from "react";
import { db, storage } from './firestore-config';
import { deleteDoc,collection, getDocs, getDoc, updateDoc, query, where, arrayUnion, documentId, doc, arrayRemove, addDoc } from 'firebase/firestore';
import "firebase/firestore";
import { useLocation,useNavigate,useHistory ,Link, redirect} from "react-router-dom";
import {getUserGroup,ElevateAccount,GetUser} from "./AdminFunctions"
import ReactDropdown from "react-dropdown";
import "./Dev.css"
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import Modal from "./components/Modal/Modal.jsx"
import CustomTabs from "./components/AccountsTab/CustomTabs.jsx"





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

    //Functions
    export function GetAccountData(){
        const accountsColRef = collection(db, "accounts");
        const [docID, setDocID] = useState([])
        const [myArr, setMyArr] = useState([])
    
        let accountData = [];
        getDoc(accountsColRef)
        .then(snapshot => {
            snapshot.forEach(account => {
                setDocID = account;
            });
        }); 
        accountData.push(setDocID)
        // arrayUnion(setDocID, accountsColRef)   
        return accountData;
    }

    function ReportsCard(account1) {
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

)}
    
    
    
    function getAccountCards(account,props){
        return ( 
            <>
            <div className="whiteSpace">
            <AccountCard
                overrides={
                    {
                        'trash-alt': { onClick: () => deleteAccount(account.id),style:{cursor:"pointer"}}, // trash can delete function on all account cards
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
                        SwitchField: { defaultChecked: account.isActive },
                        edit:{onClick: ()=> props.setModal(!props.modal),style:{cursor:"pointer"}},
                        
                    }
                }></AccountCard>
            </div>
        </>
        
           )
      }

      async function deleteAccount(id) {
        const testAccountsDoc = doc(db, "accounts", id) //references to that document
        await deleteDoc(testAccountsDoc);
    }
    //End of Functions

    //Pages
export function Home(props){
     //Constants
     const location = useLocation();
     const navigation = useNavigate();
     //End of Constants

     switch(props.level){
        case 'Administrators':
            return (
                <>

                <h1>Admins</h1>
                <PageHeader
       overrides={{
         PageHeader: {width:"100%"},
         Background:{width: "100%"},
         PageTitle: {children: "Home"},
         SubNavigation:{children:""}
         
     }}/>
     </>
             );
        case 'Managers':
            return(
            <h1>Managers</h1>
            )
        case 'Accountant':
            return(
                <h1>Accountant</h1>
                )
        default:
            return(<h1>Access Denied</h1>)
        }}

export function Journals(props){
     //Constants
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
  //End of Constants

  switch(props.level){
    case 'Administrators':
        return (
            <>
            <h1>Admins</h1>
            <PageHeader  
       overrides={{
         PageHeader: {width:"100%"},
         Background:{width: "100%"},
         PageTitle: {children: "Journals"},
         SubNavigation:{children:""}
         
     }}/>

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

        </> );
    case 'Managers':
        return(
        <h1>Managers</h1>
        )
    case 'Accountant':
        return(
            <h1>Accountant</h1>
            )
    default:
        return(<h1>Access Denied</h1>)
    }
}


export function NewAcct(props){
    const [accountName, setAccountName]= useState("")
    const [accountNumber, setAccountNumber]= useState("")
    const [accountDescription, setAccountDescription]= useState("")
    const [accountCategory, setAccountCategory]= useState("")
    const [accountSubcategory,setAccountSubCategory]= useState("")
    const [userID,setUserID]= useState("")
    const [order,setOrder]= useState("")
    const [debit,setDebit]= useState("")
    const [credit ,setCredit]= useState("")
    const [initialBalance,setInitialBalance]= useState("")
    const [endingBalance,setEndingBalance]= useState("")
    const [accountCreation,setAccountCreation]= useState("")
    const [comments,setComment]= useState("")
    const [onSubmitchange,setSubmitchange]= useState(false)
    const [defaultView,setDefaultView]= useState(true)
    const accountsColRef = collection(db, "accounts")
    
    const addAccount = async (accountName,accountNumber,accountDescription,accountCategory,
      accountSubcategory,userID,order,debit,credit,initialBalance,endingBalance,accountCreation) => {
      
      await addDoc(accountsColRef, { AccountName : accountName, AccountNumber : accountNumber,
      AccountDescription : accountDescription, AccountCategory: accountCategory, AccountSubcategory 
      : accountSubcategory, UserID : userID, Order: order, Debit: debit, Credit: credit, InitialBalance
      : initialBalance, EndingBalance : endingBalance, AccountCreation : accountCreation, Comments:comments
    })
  
  }
  const DefaultView=(props)=>{
    if(defaultView){
      <AdminViewNewAcct style={{position:'relative' , left:'30em'}}
      overrides={{'TextField34533251' : {onChange : (event) => {setAccountName(event.target.value)}},
      'TextField34533250' : {onChange : (event) => {setAccountNumber(event.target.value) }},
      'TextField34533245': {onChange  : (event) => {setAccountDescription(event.target.value)}},
      'TextField34533247' : {onChange : (event) => {setAccountCategory(event.target.value)}},
      'TextField34533248':{onChange   : (event) => {setAccountSubCategory(event.target.value)}},
      'TextField34692999':{onChange   : (event) => {setUserID(event.target.value)}},
      'Button34533256':{onClick : addAccountToDB},
      // 'Button34533256':{onClick:onNextButton},
     }}/> 
    }
  }
  
  // 'Button351912604'   :{onClick : () => {addToDB()}}
  
    /**
     * 
     * submit button action statement
     */
    const onSubmitAccountName = (event) =>{
    setAccountName(event.target.value);
      console.log(accountName);
    };
    /** 
     * submit accountNumber
    */
    const onSubmitAccountNumber = (event) =>{
    setAccountNumber(event.target.value);
      console.log(accountNumber);
  
    };
    const onSubmitAccountDescription = (event) =>{
    setAccountDescription(event.target.value);
      console.log(accountDescription);
  
    };
    const onSubmitAccountCategory = (event) =>{
    setAccountCategory(event.target.value);
      console.log(accountCategory);
    };
    const onSubmitAccountSubCategory = (event) =>{
    
      setAccountSubCategory(event.target.value);
      console.log(accountSubcategory)
    };
    const onSubmitUserID = (event)=> {
      setUserID(event.target.value);
      console.log(userID);
    }
    const onNextButton = (event) => {
      { /* setSubmitchange(true);
      if(onSubmitchange){
        
          alert('button was clicked bitch!');
        <div>
        
        <AdminViewNewAcct2 
        overrides={{
          
          'TextField34533248':{onChange:onSubmitAccountSubCategory},
          'TextField351912593':{onChange:Order},
          'TextField351912596':{onChange:Debit},
          'TextField351912597':{onChange:Credit},
          'TextField351912599':{onChange:InitialBalance},
          'TextField351912599':{onChange:finalBalance},
          'TextField351912595':{onChange: AccountCreation},
          'TextField351912594':{onChange: Comments}
        }}/>
        
      }
        </div>*/}
     
    }
    
    const Order = (event) =>{
    setOrder(event.target.value);
      console.log(order)
    };
    const Debit = (event) =>{
    setDebit(event.target.value);
      console.log(debit)
    };
    const Credit = (event) =>{
    setCredit(event.target.value);
      console.log(credit);
    };
    const InitialBalance = (event) =>{
    setInitialBalance(event.target.value);
      console.log(initialBalance)
    };
    const finalBalance = (event) =>{
    setEndingBalance(event.target.value);
      console.log(endingBalance)
    };
    const AccountCreation = (event) =>{
    setAccountCreation(event.target.value);
      console.log(accountCreation)
    };
    const Comments = (event) =>{
      setComment(event.target.value);
        console.log(comments)
      };
  
    const addToDB=() =>{
      {addDoc(accountName,accountNumber,accountDescription,
        accountCategory,accountSubcategory,userID,order,debit,credit,initialBalance,endingBalance,
        accountCreation)}
        console.log("add accounts worked");
    }
  
    const addAccountToDB = async () => {
      await addDoc(accountsColRef, {acountName : accountName, accountNumber : accountNumber, accountDescription : accountDescription,
        accountCategory : accountCategory, accountSubcategory : accountSubcategory, userID : userID})
    }
    
    return (
      <>
      <div style={{position:'absolute', alignContent:'right' }}>
      
      <AdminViewNewAcct style={{position:'relative' , left:'30em'}}
      overrides={{'TextField34533251':{onChange:onSubmitAccountName},
      'TextField34533250':{onChange:onSubmitAccountNumber},
      'TextField34533245':{onChange:onSubmitAccountDescription},
      'TextField34533247':{onChange:onSubmitAccountCategory},
      'TextField34533248':{onChange:onSubmitAccountSubCategory},
      'TextField34692999':{onChange:onSubmitUserID},
     
     }}/> 
      <AdminViewNewAcct2 style={{position:'relative' , left:'30em'}}
        overrides={{
          
          'TextField34533248':{onChange:onSubmitAccountSubCategory},
          'TextField351912593':{onChange:Order},
          'TextField351912596':{onChange:Debit},
          'TextField351912597':{onChange:Credit},
          'TextField351912599':{onChange:InitialBalance},
          'TextField351912598':{onChange:finalBalance},
          'TextField351912595':{onChange: AccountCreation},
          'TextField351912594':{onChange: Comments},
          'Button351912604'   :{onClick : () => {addToDB()}}
  
        }}/>
  
        <button onClick = {addAccountToDB}>A Button</button>
       {/*'Button351912604':{onClick:addDoc*/}
        </div>
      </>
      )


    //   //Constants
//   const location = useLocation();
//   const navigation = useNavigate();
//   //End of Constants

//   switch(props.level){
//     case 'Administrators':
//         return (
//             <>
//             <h1>Admins</h1>
//             <PageHeader  
//        overrides={{
//          PageHeader: {width:"100%"},
//          Background:{width: "100%"},
//          PageTitle: {children: "Create A New Account"},
//          SubNavigation:{children:""}
         
//      }}/>
//         </> );
//     case 'Managers':
//         return(
//         <h1>Managers</h1>
//         )
//     case 'Accountant':
//         return(
//             <h1>Accountant</h1>
//             )
//     default:
//         return(<h1>Access Denied</h1>)
//     }
}

export function Users(props){
  //Constants
  const location = useLocation();
  const navigation = useNavigate();
  const menuOptions = [
  {value:'Administrator',label:"Administrator",className:'dropDownOption'},
  {value:'Manager',label:"Manager",className:'dropDownOption'},
  {value:'Accountant',label:"Accountant",className:'dropDownOption'},
  {value:'Disabled',label:"Disabled",className:'dropDownOption'},
  {value:'Unverified',label:"Unverified",className:'dropDownOption'}
  ]

  const menuOptions2 =["banana","avacado","tomato","beans"]

  //End of Constants

  switch(props.level){
    case 'Administrators':
        return (
            <>
            <h1>Admins</h1>
            <PageHeader  
       overrides={{
         PageHeader: {width:"100%"},
         Background:{width: "100%"},
         PageTitle: {children: "Users"},
         SubNavigation:{children:""}
   
     }}/>
     <button onClick={()=> GetUser("toast","Single")}>GetUser</button>
     <button onClick={()=> getUserGroup("toast")}>GetUserGroup</button>
     <ReactDropdown 
    controlClassName="dropDownControlFrame" 
    menuClassName="dropDownMenuFrame" 
    className="dropDownFrame" options={menuOptions}  value={""} placeholder="choose one"/>

    <DropdownMenu options={menuOptions2}/>
     
        </> );
    case 'Managers':
        return(
        <h1>Managers</h1>
        )
    case 'Accountant':
        return(
            <h1>Accountant</h1>
            )
    default:
        return(<h1>Access Denied</h1>)
    }


     
 
}

export function Reports(props){
  //Constants
  const [modal,setModal] = useState(false);
  const [currentPage,setCurrentPage] = useState("Passwords")
    const location = useLocation();
  const navigation = useNavigate();
  //End of Constants

  switch(props.level){
    case 'Administrators':
        return (
            <>
            <h1>Admins</h1>
            <CustomTabs/>
            <PageHeader  
       overrides={{
         PageHeader: {width:"100%"},
         Background:{width: "100%"},
         PageTitle: {children: "Reports"},
         SubNavigation:{children:""}
         
     }}/>
 
     <Button onClick={()=> setModal(true)}>Modal</Button>
    <Modal show={modal} onClose={()=>setModal(false)} />
        </> 
        );
    case 'Managers':
        return(
        <h1>Managers</h1>
        )
    case 'Accountant':
        return(
            <h1>Accountant</h1>
            )
    default:
        return(<h1>Access Denied</h1>)
    }
 
}

export function ExpiredPasswords(props){
    //Constants
   
    const [userInfo, setUserInfo] = useState([]);

    const usersColRef = collection(db, "testUsers");



    useEffect(() => {

        const getUsers = async () => {

            const data = await getDocs(usersColRef);
            setUserInfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getUsers()

    }, [])
    //End of Constants

    switch(props.level){
        case 'Administrators':
            return (
                <>
                <h1>Admins</h1>
                
                <CustomTabs/>
                <PageHeader  
       overrides={{
         PageHeader: {width:"100%"},
         Background:{width: "100%"},
         PageTitle: {children: "Expired Passwords"},
         SubNavigation:{children:""}
         
     }}/>
     <div className="d-inline-flex p-2">
                {/*{testExpiredPasswords.map(account1=>getPasswordReport(account1))} */}
                {userInfo.map(account1 => ReportsCard(account1))}
    </div>
            </> );
        case 'Managers':
            return(
            <h1>Managers</h1>
            )
        case 'Accountant':
            return(
                <h1>Accountant</h1>
                )
        default:
            return(<h1>Access Denied</h1>)
        }
   
  }

export function NewUser(props){
  //Constants
  const location = useLocation();
  const navigation = useNavigate();
  //End of Constants

  switch(props.level){
    case 'Administrators':
        return (
            <>
            
            <PageHeader width="100%" overrides={{
                PageHeader: {width:"100%"},
                Background:{width: "100%"},
                PageTitle: {children: "New User"}
            }}/>
            
            </>  
        )
    case 'Managers':
        return(
        <h1>Managers</h1>
        )
    case 'Accountant':
        return(
            <h1>Accountant</h1>
            )
    default:
        return(<h1>Access Denied</h1>)
    }

}

export function ViewAcct(props){
    //Constants
    const location = useLocation();
    const navigation = useNavigate();
    const testAccounts = [...getTestData()];
   
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
        <CustomTabs/>
        <PageHeader overrides={{
         PageHeader: {width:"100%"},
         Background:{width: "100%"},
         PageTitle: {children: <Link to="/Journals">New Journal Entry</Link>}
         
     }}/>
     
        <div className="arrangeAccounts">
       {/* {testAccounts.map(account => getAccountCards(account))} */}
       {accounts.map(account => getAccountCards(account))}
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

//End of Pages




