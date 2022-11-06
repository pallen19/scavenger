import awsExports from './aws-exports'
import './App.css';
import {Amplify,Auth} from 'aws-amplify'
import { Authenticator, Heading} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {Routes,Route, Navigate, Outlet, redirect,useNavigate } from "react-router-dom";  
import { useEffect, useState } from 'react';
import ManagerView from "./ManagerView"
import AdminView from "./AdminView"
import Redirect from "./Redirect"




Amplify.configure(awsExports);

export default function CustomAuthenticator(){
const [level,setLevel] = useState("");
const [userData,setUserData] = useState([]);
const [accountType,setAccountType] = useState([]);

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
  return children ? children : <Outlet/>;
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
  {getUserGroup(user.username)}
  
  <Heading level={1}>Hello {user.username}</Heading>
  <p>account level is {level}</p>
  
  <button onClick={signOut}>Sign Out</button>
  <Routes>
    <Route path="admin" element={<ProtectedRoute redirectPath="*" allowed={level === "Administrators"}>
      <AdminView/>
    </ProtectedRoute>}></Route>
    <Route path="manager" element={<ProtectedRoute redirectPath="*" allowed={level ==="Managers"}>
      <ManagerView/>
    </ProtectedRoute>}></Route>
    <Route path="*" element={
     <Redirect accountType={level}></Redirect>
    }/>
  </Routes>
  
  </div>
  
  )
  
}

</Authenticator>


  );
}


