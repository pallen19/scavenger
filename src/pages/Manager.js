import React, {useState} from 'react'
import '@aws-amplify/ui-react/styles.css';
import { AdminViewHome,AdminViewNewUser,Navbar } from '../ui-components';
import {
  getOverrideProps,
  useNavigateAction}
   from "@aws-amplify/ui-react/internal";
import buttonCreateNewUser from '../components/buttonCreateNewUser';
import buttonThreeFiveTwoTwoOneSixFiveTwoSixOnClick from '../ui-components/AdminViewHome';

export const Manager = () => {
  return(
  <>
  <ManagerViewHome/>
    </>
    )
  }
export default Manager;
