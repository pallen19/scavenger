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
  //const createuseronclick = useNavigateAction({ type: "url", url: "NewUser" });
  const [isToggled, setisToggled] = useState(false);
  //const [goToNewAccount, setGoToNewAccount] = React.useState(false);
const handleClick =()=>{
  
  
}

  return (
    <div>
      
       {/* <AdminViewHome
        overrides={{'Button352216526':{ color: 'white' , isDisabled:false },
        'Button352216544':{onClick: handleClick} , 
        'Button352216553':{onClick: handleClick}
                  
                  }} />
                {/*  {isToggled ? <AdminViewNewUser/> : <p>the valdue is valse</p>} */}
                {/*,onClick:setisToggled(!isToggled)*/}
                 
          

    </div>
  );
}
export default Manager;
