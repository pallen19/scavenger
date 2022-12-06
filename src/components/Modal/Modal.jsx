import React from 'react'
//import { JournalEntryForm } from '../ui-components';
import "./Modal.css"


const Modal = ({ show, onClose, children }, props) => {
    if (!show)
        return null;
    return (
        <>
            <div className="overlay">

                <div className="modalContainer">
                    <img src="" />
                    <div className="modalRight">
                        <p onClick={onClose} className="closebtn" >X</p>
                        <div className="content">
                            {children}
                        </div>
                        <div className="btnContatiner">
                            <button className='btnPrimary'>
                                <span className='bold'>Done</span>
                            </button>
                            <button className='btnOutline'>
                                <span className='bold'>Cancel</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
        /*{
       (1) Account Name
       (2) Account Number
       (3) Account Description
       (4) Normal Side (whatever the hell this means lol)
       (5) Account Category
       (6) Account Sub-Category
       (7) Initial Balance
       (8) Debit
       (9) Credit
       (10) Balance
       (11) Date/Time Account Created
       (12) User ID
       (13) Order - [e.g cash can be 01]
       (14) Statement
       (15) Comments}*/
    )
}


export default Modal;

