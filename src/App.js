import { BrowserRouter as Router, Link , Navigate, Routes, Route } from 'react-router-dom';
import './App.css';
import { withAuthenticator, Button, Heading, Placeholder } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import CustomAuthenticator from './CustomAuthenticator';
import Admin from './pages/Admin';
import { AdminViewUserF} from './pages/AdminViewUserF';
import { AdminViewNewAccount} from './pages/AdminViewNewAccount';
import placeHolder from './components/placeHolder.png';
import { AdminViewAcct, EmailForm, AdminViewUsers, AdminViewPwReport, AdminViewNewUser, AdminViewNewAcct, AdminViewNewUser2, AdminViewNewAcct2 } from './ui-components';

import CustomAuthentiator from './CustomAuthenticator';
import Database from './Database'
import { useState } from 'react';

/* src/App.js */
function App({ signOut, user }) {
  // Todo logic here

   const changeProfileImage = () => {
    {/** Do something pro */}
    return (
      <div>
        <h1>hip</h1>
      </div>
    )
  }
  

  return (
    <>  
      {/* Add Todo JSX here  */}  
      
    { /* <img src={placeHolder} alt="ui-logo" style={{float: 'right'}} height={'40px'}
     width={'40px'} onClick={changeProfileImage}/>
      */}
     {/**   Comment
      * <Heading level={2}>Hello {user.username}</Heading>
      *     Comment
     */} 
      <Button onClick={signOut} style={{float: 'right'}} height={'40px'} >Sign out</Button>
     
   <div>
    
   {/*<Admin/>*/} 
   <Routes>
    <Route path="/" element={<Admin/>}/>
    <Route path="/Users" element={<AdminViewUserF/>}/>
    <Route path="/Accounts" element={<AdminViewAcct/>}/>
    <Route path="/Reports" element={<AdminViewPwReport/>}/>
    <Route path="/createNewUser" element={<AdminViewNewUser/>}/>
    <Route path="/createNewUser2" element={<AdminViewNewUser2/>}/>
    <Route path="/createAccount" element={<AdminViewNewAccount/>}/>
    <Route path="/createAccount2" element={<AdminViewNewAcct2/>}/>
    <Route path="/" element={<EmailForm/>}/>
   
   </Routes>


   {/*<Manager/> */}
  </div> 
      {/* Add Todo JSX here  */}
     <CustomAuthentiator>

     </CustomAuthentiator>

      <Database />
    </>
  );
  
  }

export default App;