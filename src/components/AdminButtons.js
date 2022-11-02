import React from 'react';
import {AdminViewHome,NewUser, NewAcctForm, AdminViewPwReport, NavBar2, ButtonCreateNewAccount} from '../ui-components';
import {ButtonGeneric,ButtonGenericProps, ButtonCreateNewUser, ButtonViewExpiredPassword} from '../ui-components';

export const AdminButtons = () => {
    const [goToNewUser, setGoToNewUser] = React.useState(false);
    const [createNewAccount, setNewAccount] = React.useState(false);
    const [goToExpiredPasswords, setExpiredPasswords] = React.useState(false);
    
    {/**if statement is true call NewUser form */}
      if(goToNewUser){
      return <NewUser />
      }
      else
      {/**if statement is true call CreateNewAccount form */}
      if(createNewAccount){
        {/*return <NewAcctForm />*/}
      }
  else
      if(goToExpiredPasswords){
        return <AdminViewPwReport />
      }
  return (<

    div name="Create-Button">
   

   
    
    
      
  
   {/* <img src={placeHolder} alt="ui-logo" style={{float: 'right'}} height={'40px'} width={'40px'} onClick={changeProfileImage}/>*/}

  {/*<ButtonCreateNewAccount onClick = {() =>{ setGoToNewUser(true);}} children="Create New User"> {" "}  </ButtonCreateNewAccount>*/}
  <ButtonCreateNewUser onClick = {() =>{ setNewAccount(true);}} style={{float:'right'}} >  {" "}</ButtonCreateNewUser>
  {/*<ButtonViewExpiredPassword onClick = {() =>{ setExpiredPasswords(true);}}  children="View Expired Passwords" style={{justifyContent:'center'}}> {" "} View Expired Password Accounts </ButtonViewExpiredPassword>*/}


</div>
  )
}
