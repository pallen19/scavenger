import { Button } from '@aws-amplify/ui-react';
import React from 'react'
import { BrowserRouter as Router, Link , Navigate, Routes,Route, useNavigate } from 'react-router-dom';
import { AdminButtons } from '../components/AdminButtons';
import  AdminNavBar  from '../components/AdminNavBar';
import { CreateNewAccount } from '../components/CreateNewAccount';
import { CreateNewUser } from '../components/CreateNewUser';
import { ExpiredPasswordsReport } from '../components/ExpiredPasswordsReport';
import {AdminViewHome,NewUser, NewAcctForm, AdminViewPwReport, NavBar2, ButtonCreateNewAccount, AdminViewHomeUpdate} from '../ui-components';








export const Admin = () => {
 

  return (
    <>
   {/*} <div 
      id='backgroundContainer' 
      >
    <AdminNavBar/>
       <div style={{position:'absolute', left:'10%', marginRight:'auto'}}>

   <AdminViewHomeUpdate/>
    <CreateNewAccount/>
    <CreateNewUser/>
    <ExpiredPasswordsReport/>
    
    
        </div>
  </div>*/}

  <AdminViewHome/>
    </>
  )
      }

export default Admin;
