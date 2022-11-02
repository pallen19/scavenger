import { BrowserRouter as Router, Link , Navigate, Routes, Route } from 'react-router-dom';
import './App.css';
import { withAuthenticator, Button, Heading, Placeholder } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Admin from './pages/Admin';
import Manager from './pages/Manager';
import placeHolder from './components/placeHolder.png';
import { AdminViewAccts, AdminViewUsers, AdminViewPwReport, AdminViewNewUser, AdminViewNewAcct, AdminViewNewUser2, AdminViewNewAcct2 } from './ui-components';
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
    <Route path="/Users" element={<AdminViewUsers/>}/>
    <Route path="/Accounts" element={<AdminViewAccts/>}/>
    <Route path="/Reports" element={<AdminViewPwReport/>}/>
    <Route path="/createNewUser" element={<AdminViewNewUser/>}/>
    <Route path="/createNewUser2" element={<AdminViewNewUser2/>}/>
    <Route path="/createAccount" element={<AdminViewNewAcct/>}/>
    <Route path="/createAccount2" element={<AdminViewNewAcct2/>}/>
   
   </Routes>

   <Manager/> 
  </div>  
    </>
  );
  
  }

export default withAuthenticator(App);
