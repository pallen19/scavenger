import React, {useState} from 'react';
import { Flex } from "@aws-amplify/ui-react";
import { render } from "@testing-library/react";
import ReactTooltip from 'react-tooltip';
import Modal from "../../components/Modal/Modal";
import placeHolder from '../../components/placeHolder.png'


export default function UserProfile(props){
    const [modal,setModal] = useState(false);
    const onClose=()=>{
        setModal(false);
      }
    const editProfile = () => {
      return (
        <>
        <div>
            <h1>Edit Profile</h1>
            <p>To Change Email, Enter a new email address below:</p>
            <input placeholder='Email Address'/>
            <p>To Change Password, Enter a new password below:</p>
            <input placeholder='Password'/>
            <br/>
            <button>Submit</button>
        </div>

        <label>

        </label>
        </>
      )
    }
    

    return(

        <>
        <Flex>
      <div>

        <h1>My Profile</h1>
        
        <ul>
            <li>
            <img src={placeHolder} style={{width:'400px'}}/>
            <br/>
               <button onClick= {() => {setModal(true)}}>Edit Profile</button>
            </li>
        </ul>
            {/* <p data-tip="Click here">
                <button> Button</button>
        
            <ReactTooltip />
        <p>{props.name}</p>
        <p data-tip="Click here to Change Password"></p>
            <button>Change Password</button>
        
        </p> */}
        </div>
        
        </Flex>
        <Modal show={modal} onClose={()=>onClose()}>
            
            {editProfile()}
        </Modal>
        </>
    )
}