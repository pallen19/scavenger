import {Outlet} from "react-router-dom";
import { useState } from "react"; 
import Modal from '../../../components/Modal/Modal'
//Example of how to implement a modal window.
export function TestA(props){
    //The showModal state
    const [showModal,setShowModal] = useState(false);
    //Callback function to close the window.
    const onClose=()=>{
        setShowModal(false);
    }

   
    return(
        <div>
            {/* We need to have some way to open teh modal window. We can use a button
            that flips the state by calling setShowModal in a function on click */}
            <button onClick={()=>{setShowModal(!showModal)}}></button>
            <Modal show={showModal} onClose={()=>onClose()}>

                {/*The page content you want to render will be laced here*/}

            </Modal>
        </div>
    )
}
