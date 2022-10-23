import logo from './logo.svg';
import awsExports from './aws-exports'
import './App.css';
import {Amplify,Auth} from 'aws-amplify'
import { Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
Amplify.configure(awsExports);

export default function CustomAuthentiator(){

  function generatedUserName(firstname,lastname){
    let initial = firstname.charAt(0);
    let lName = lastname;
    let date = new Date();
    let day = date.getDate().toString();
    let month = date.getMonth() + 1;
    let generatedName = initial + lName + month+ day;
    console.log(day)
    console.log("name generated = " +generatedName);
return generatedName
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
{({signOut}) => <button onClick={signOut}>Sign Out</button>}
  </Authenticator>
  );
}


