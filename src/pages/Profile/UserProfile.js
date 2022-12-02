import { Flex } from "@aws-amplify/ui-react";
import { render } from "@testing-library/react";
import ReactTooltip from 'react-tooltip';
import placeHolder from '../../components/placeHolder.png'

export default function UserProfile(props){

    return(

        <>
        <Flex>
      <div>

        <h1>My Profile</h1>
        
        <ul>
            <li>
            <img src={placeHolder} style={{width:'400px'}}/>
            <br/>
               <button>Edit Profile</button>
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
        </>
    )
}