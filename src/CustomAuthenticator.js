import awsExports from './aws-exports'
import './App.css';
import {Amplify,Auth} from 'aws-amplify'
import { Authenticator, Heading} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {Routes,Route, Navigate, Outlet, redirect,useNavigate, Link } from "react-router-dom";  
import { useEffect, useState } from 'react';
import ManagerView from "./ManagerView"
import AdminView from "./AdminView"
import Redirect from "./Redirect"
import Admin from './pages/Admin';
import { AdminViewUserF} from './pages/AdminViewUserF';
import { AdminViewNewAccount} from './pages/AdminViewNewAccount';
import placeHolder from './components/placeHolder.png';
import {AdminViewAcct,AdminHome,AdminNewAcct,AdminNewUser} from './AdminView';
import Layout  from './Layout';
import TestNav from './testnav';
import { AdminViewHome, AdminViewAccts, AdminViewUsers, AdminViewPwReport, AdminViewNewUser, AdminViewNewAcct, AdminViewNewUser2, AdminViewNewAcct2 } from './ui-components';




Amplify.configure(awsExports);

export default function CustomAuthenticator(){
const [level,setLevel] = useState("");
const [userData,setUserData] = useState([]);
const [currentUser,setCurrentUser] = useState("")
const [accountType,setAccountType] = useState([]);

useEffect(()=>{
  localStorage.setItem('role',"Administrators");
},[currentUser]);

useEffect(()=>{
  const role = localStorage.getItem('role');
  if(role){
    setLevel(role);
  }
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

function getUserGroup(Username){
console.log("Fetcing user groups")
fetch("https://dsxdo0hm4c.execute-api.us-east-2.amazonaws.com/default/",{
method:'POST', 
headers:{'Content-Type':'application/json'},
body: JSON.stringify({
  "UserPoolId": 'us-east-2_yq4Klaavu',
  "Username": Username,
  
})
}).then(function(response){
  //console.log(response)
  return response.json();
}).then(function(Data){
  //console.log(Data.Groups[0].GroupName);
  setLevel(Data.Groups[0].GroupName);
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


function GetUser(username,method){
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
  <p>account level is {level}</p>
  {console.log("is currently " + level )}
  <button onClick={signOut}>Sign Out</button>
  
  <Routes>
    <Route path="/" element={<Layout />}>
        <Route path='/adminHome' element={<ProtectedRoute allowed={level === "Administrators"} redirectPath="*"><AdminHome/></ProtectedRoute>}/>
        <Route path='/adminNewUser' element={<ProtectedRoute allowed={level === "Administrators"} redirectPath="*"><AdminViewNewUser/></ProtectedRoute>}/>
        <Route path='/adminNewAccount' element={<ProtectedRoute allowed={level === "Administrators"} redirectPath="*"><AdminNewAcct/></ProtectedRoute>}/>
        <Route path='/adminAccounts' element={<ProtectedRoute allowed={level === "Administrators"} redirectPath="*"><AdminViewAcct/></ProtectedRoute>}/>
      <Route path="*" element={<Redirect accountType={level}/>}/>
    </Route>
  </Routes>
  
  </div>
  
  )
  
}

</Authenticator>


  );
}


