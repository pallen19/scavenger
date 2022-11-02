import logo from './logo.svg';
import awsExports from './aws-exports'
import './App.css';
import {Amplify,Auth, toast} from 'aws-amplify'
import { Authenticator, Heading} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";  
import { useEffect, useState } from 'react';
Amplify.configure(awsExports);

export default function CustomAuthenticator(){
const [level,setLevel] = useState();
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
fetch("https://dsxdo0hm4c.execute-api.us-east-2.amazonaws.com/default",{
method:'POST', 
headers:{'Content-Type':'application/json'},
body: JSON.stringify({
  "UserPoolId": 'us-east-2_yq4Klaavu',
  "Username": Username,
  
})})}

function elevateAccount(Username,accountLevel){
  fetch("")
}

const services={
  async handleSignUp(formData){
    let {username,password,attributes} = formData;
    username = generatedUserName(attributes.given_name,attributes.family_name.toLowerCase())
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
  <>

  
  <Heading level={1}>Hello {user.username}</Heading>

  <button onClick={signOut}>Sign Out</button>
  <button onClick={() => getUserGroup(user.username)}>Get groups</button>
  <button onClick={() => elevateAccount(user.username,level)}>Elevate Account</button>
  </>
  
  )
}
</Authenticator>

  );
}


