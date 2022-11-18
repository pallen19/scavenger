import {Outlet} from "react-router-dom";
import { useState } from "react"; 
import Modal from '../../../components/Modal/Modal'
//Example of how to implement a modal window.
export function TestA(props){
    const [showModal,setShowModal] = useState(false);

    const onClose=()=>{
        setShowModal(false);
    }
    const ModalContent=()=>{
        
    }
    return(
        <div>
            <button onClick={()=>{setShowModal(!showModal)}}></button>
            <Modal show={showModal} onClose={()=>onClose()}>
                <p>THIS IS THE PAGE CONTENT</p>
            </Modal>
            <p>Test A</p>
            <Outlet/>
        </div>
    )
}
