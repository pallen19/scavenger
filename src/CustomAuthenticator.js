import awsExports from './aws-exports'
import './App.css';
import {Amplify,Auth} from 'aws-amplify'
import { Authenticator, Heading} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {Routes,Route, Navigate, Outlet, redirect,useNavigate, Link } from "react-router-dom";  
import { useEffect, useState } from 'react';
import {NewAcct,NewUser} from './AdminView';
import {ViewAcct} from './pages/Accounts/Accounts';
import { Journals } from './pages/Accounts/Subpages/Journals';
import { GeneralLedger } from './pages/Accounts/Subpages/GeneralLedger';
import {Home} from './pages/Homepage/Homepage';
import {Users} from './pages/Users/Users';
import {Reports} from './pages/Reports/Reports'
import { ExpiredPasswords } from './pages/Reports/Subpages/ExpiredPasswords';
import { EventLog } from './pages/Reports/Subpages/EventLog';
import Layout  from './Layout';
import TestNav from './testnav';
import {Navigation,Logo, UserProfileButton} from './ui-components'
import {ChartOfAccounts} from './pages/Accounts/Subpages/ChartOfAccounts';
import {AccountSummary} from './pages/Accounts/Subpages/AccountSummary'
import Modal from './components/Modal/Modal';
import Table from './components/Table/Table'
import CreateAccount from './pages/Accounts/Subpages/CreateAccount'
import EmailForm from './components/EmailForm/EmailForm' 






Amplify.configure(awsExports);

export default function CustomAuthenticator(){
const [level,setLevel] = useState("");
const [userData,setUserData] = useState([]);
const [currentUser,setCurrentUser] = useState(localStorage.getItem("CognitoIdentityServiceProvider.3dlpcfa5febo59u7ht43jg8jgv.LastAuthUser"))
const [accountType,setAccountType] = useState([]);
const [modal,setModal] = useState(false);
const [fullName,setFullname] = useState("")


useEffect(()=>{
  console.log("current user is : "  + currentUser);
   getUserGroup(currentUser);
},[]);

useEffect(()=>{
 localStorage.setItem('role',level);
},[])


const onClose=()=>{
  setModal(false);
}


  function generatedUserName(firstname,lastname){
    let initial = firstname.charAt(0);
    let lName = lastname;
    let date = new Date();
    let day = date.getDate().toString();
    let month = date.getMonth() + 1;
    let generatedName = initial + lName + month+ day;
    console.log(day)
    console.log("name generated = " + generatedName);
return generatedName
}

async function getUserGroup(Username){
console.log("Fetching user groups")
await fetch("https://dsxdo0hm4c.execute-api.us-east-2.amazonaws.com/default/",{
method:'POST', 
headers:{'Content-Type':'application/json'},
body: JSON.stringify({
  "UserPoolId": 'us-east-2_yq4Klaavu',
  "Username": Username,
  
})
}).then((response)=> {
  //console.log(response)
  return response.json();
}).then((data) => {
  console.log(data.Groups[0].GroupName);
  setLevel(data.Groups[0].GroupName) 
})
}

function elevateAccount(Username,accountLevel,Method){
  //account method should be add,remove, or disabled/enable
  fetch("https://7eiwgt5u32.execute-api.us-east-2.amazonaws.com/default/",{
    method: 'POST',
    headers: {'Content-Type':"application/json"},
    body : JSON.stringify({
      "UserName": Username,
      "UserPoolId": 'us-east-2_yq4Klaavu',
      "newGroup": accountLevel,
      "method": Method

    })
  })
}

function TestApiCall(username,method){
  //put url of api in the fetch
  fetch(" https://qdkw8owsn3.execute-api.us-east-2.amazonaws.com/default",{
    method: 'POST',
    headers: {'Content-Type':"application/json"},
    body : JSON.stringify({
        "UserPoolId": "us-east-2_yq4Klaavu",
        "Username" : username,
        "method": method
    })
  }).then(function(response){

    console.log(response)

    return response.json();

  }).then(function(JsonData){
    console.log(JsonData);
    setUserData(JsonData)
  })
}


async function GetUser(username,method){
  //put url of api in the fetch
  fetch(" https://qdkw8owsn3.execute-api.us-east-2.amazonaws.com/default",{
    method: 'POST',
    headers: {'Content-Type':"application/json"},
    body : JSON.stringify({
        "UserPoolId": "us-east-2_yq4Klaavu",
        "Username" : username,
        "method": method
    })
  }).then(function(response){

    console.log(response)

    return response.json();

  }).then(function(JsonData){
    console.log(JsonData);
    setUserData(JsonData)
  })
}

const navigate = useNavigate();


const ProtectedRoute = ({allowed,redirectPath,children}) => {
  console.log(allowed);
  if(!allowed){
    return <Navigate to={redirectPath} replace/>
  }
  return children;
}



const services={
  async handleSignUp(formData){
    let {username,password,attributes} = formData;
    
    username = generatedUserName(attributes.given_name,attributes.family_name.toLowerCase());
    
    return Auth.signUp({
      username,
      password,
      attributes,
    });
  },
};




  return (

<Authenticator services={services} initialState="signUp">
 
{
  ({signOut, user}) => (
  
   
  <div>
  
  <Navigation  overrides={{
    Home:{onClick:() => {navigate('/Home')}},
    Accounts:{onClick:() => {navigate('/Accounts')}},
    Users:{onClick:() => {navigate('/Users')}},
    Reports:{onClick:() => {navigate('/Reports')}},
    FullName:{children: user.attributes.given_name + " " + user.attributes.family_name},
    UserProfileButton:{overflow:"visible",children:<><UserProfileButton overrides={{
      Username:{children:user.username},
    }}/><button onClick={signOut}>Sign Out</button></>},
    EmailButton:{onClick:() => {setModal(true)}},

  }}/>
  <Link to="/ChartOfAccounts">COA</Link>
 
  
  
  <Routes>
    <Route path="/" element={<Layout />}>
        <Route path='Accounts/*' element={<ProtectedRoute allowed={level === "Administrators" || level === "Managers"} redirectPath="*"><ViewAcct level={level} /></ProtectedRoute>}>
            <Route path='Account Summary' element={<AccountSummary/>}/>
            <Route path='Journals' element={<Table/>}/>
            <Route path='General Ledger' element={<GeneralLedger/>}/>
            <Route path='Create Account' element={<CreateAccount/>}/>
            <Route path='Chart Of Accounts' element={<ChartOfAccounts level={level} />}></Route>
        </Route>
        <Route path='Home' element={<Home level={level}></Home>}/>
        <Route path='Users' element={<ProtectedRoute allowed={level === "Administrators" || level === "Managers"} redirectPath="*"><Users level={level}/></ProtectedRoute>}/>
        <Route path='Reports/*' element={<Reports level={level}/>}>
            <Route path='Expired Passwords' element={<ExpiredPasswords/>}/>
            <Route path='Event Log' element={<EventLog/>}/>
          <Route path='*' element={<div>No Page hit</div>}/>
        </Route>
        <Route path='/ExpiredPasswords' element={<ProtectedRoute allowed={level === "Administrators" || level === "Managers"} redirectPath="*"><ExpiredPasswords level={level} /></ProtectedRoute>}></Route>
        <Route path='/EventLog' element={<ProtectedRoute allowed={level === "Administrators" || level === "Managers"} redirectPath="*"><EventLog level={level} /></ProtectedRoute>}></Route>
        <Route path='/Journals' element={<ProtectedRoute allowed={level === "Administrators" || level === "Managers"} redirectPath="*"><Journals level={level} /></ProtectedRoute>}></Route>
        <Route path='/NewAccount' element={<ProtectedRoute allowed={level === "Administrators" || level === "Managers"} redirectPath="*"><NewAcct level={level} /></ProtectedRoute>}></Route>
        <Route path='/NewUser' element={<ProtectedRoute allowed={level === "Administrators" || level === "Managers"} redirectPath="*"><NewUser level={level} /></ProtectedRoute>}></Route>
        
        <Route path='/404' element={<h1>This Link has not been assigned</h1>}></Route>

        <Route path='/CreateAccount' element={<CreateAccount/>}/>

        <Route path="*" element={<Navigate to="/Home"/>}/>
    </Route>
  </Routes>

  <Modal show={modal} onClose={()=>onClose()}>
  <EmailForm/>
  </Modal>
  </div>
  
  )
  
}



</Authenticator>


  );
}


