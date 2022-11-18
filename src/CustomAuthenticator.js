import awsExports from './aws-exports'
import './App.css';
import {Amplify,Auth} from 'aws-amplify'
import { Authenticator, Heading} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {Routes,Route, Navigate, Outlet, redirect,useNavigate, Link } from "react-router-dom";  
import { useEffect, useState } from 'react';
import {NewAcct,NewUser,ExpiredPasswords, Journals} from './AdminView';
import {ViewAcct} from './pages/Accounts/Accounts';
import {Home} from './pages/Homepage/Homepage';
import {Users} from './pages/Users/Users';
import {Reports} from './pages/Reports/Reports'
import Layout  from './Layout';
import TestNav from './testnav';
import {Navigation,Logo} from './ui-components'
import {TestA} from './pages/Reports/Subpages/testa'
import {TestB} from './pages/Reports/Subpages/testb'
import {TestC} from './pages/Reports/Subpages/testc'
import ChartOfAccounts from './pages/Accounts/ChartOfAccounts';





Amplify.configure(awsExports);

export default function CustomAuthenticator(){
const [level,setLevel] = useState("");
const [userData,setUserData] = useState([]);
const [currentUser,setCurrentUser] = useState(localStorage.getItem("CognitoIdentityServiceProvider.3dlpcfa5febo59u7ht43jg8jgv.LastAuthUser"))
const [accountType,setAccountType] = useState([]);
const [tabID,setTab] = useState(":TestA");

useEffect(()=>{
  console.log("current user is : "  + currentUser);
   getUserGroup(currentUser);
},[]);

useEffect(()=>{
 localStorage.setItem('role',level);
},[])



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
  
  

  <Heading level={1}>Hello {user.username}</Heading>
  
  <TestNav></TestNav>
  <Navigation  overrides={{
    Home:{onClick:() => {navigate('/Home')}},
    Accounts:{onClick:() => {navigate('/Accounts')}},
    Users:{onClick:() => {navigate('/Users')}},
    Reports:{onClick:() => {navigate('/Reports')}}
  }}/>
 

  
  <p>account level is {level}</p>
  {console.log("is currently " + level )}
  <button onClick={signOut}>Sign Out</button>
  <a  href='/Reports/testA'><button>TabA</button></a>
  <a  href='/Reports/testB'><button>TabB</button></a>
  <a  href='/Reports/testC'><button>TabC</button></a>
  <Link to="Reports/testC">Test-C</Link>


  
  <Routes>
    <Route path="/" element={<Layout />}>
        <Route path='Accounts' element={<ProtectedRoute allowed={level === "Administrators" || level === "Managers"} redirectPath="*"><ViewAcct level={level} /></ProtectedRoute>}/>
        <Route path='Home' element={<Home level={level}></Home>}/>
        <Route path='Users' element={<ProtectedRoute allowed={level === "Administrators" || level === "Managers"} redirectPath="*"><Users level={level}/></ProtectedRoute>}/>
        <Route path='Reports/*' element={<Reports level={level}/>}>
          <Route path="testA" element={<TestA/>}/>
          <Route path='testB' element={<TestB/>}/>
          <Route path='testC' element={<TestC/>}/>
          <Route path='*' element={<div>No Page hit</div>}/>
        </Route>
        <Route path='/ExpiredPasswords' element={<ProtectedRoute allowed={level === "Administrators" || level === "Managers"} redirectPath="*"><ExpiredPasswords level={level} /></ProtectedRoute>}></Route>
        <Route path='/Journals' element={<ProtectedRoute allowed={level === "Administrators" || level === "Managers"} redirectPath="*"><Journals level={level} /></ProtectedRoute>}></Route>
        <Route path='/NewAccount' element={<ProtectedRoute allowed={level === "Administrators" || level === "Managers"} redirectPath="*"><NewAcct level={level} /></ProtectedRoute>}></Route>
        <Route path='/NewUser' element={<ProtectedRoute allowed={level === "Administrators" || level === "Managers"} redirectPath="*"><NewUser level={level} /></ProtectedRoute>}></Route>
        <Route path='/ChartOfAccounts' element={<ProtectedRoute allowed={level === "Administrators" || level === "Managers"} redirectPath="*"><ChartOfAccounts level={level} /></ProtectedRoute>}></Route>
        <Route path='/404' element={<h1>This Link has not been assigned</h1>}></Route>
        <Route path="*" element={<Navigate to="/Home"/>}/>
    </Route>
  </Routes>
  
  </div>
  
  )
  
}

</Authenticator>


  );
}


