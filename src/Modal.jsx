import React from 'react'
import { JournalEntryForm } from './ui-components';
//import "./Modal.css"


export const Modal = ({show,onClose}) => {
    if(!show)
    return null;
  return (


<div className="overlay">
  
    <div className="modalContainer">
        <img src=""/>
        <div className="modalRight">
            <p onClick={onClose} className="closebtn">X</p>
            <div className="content">
               
                <form>
                    <label>
                        Account Name:
                        <input textAlign="right" type="text" name="AccountName"/>
                    </label>
                    <br/>
                    <label>
                        Account Number:
                        <input className= "inputBox" type="text" name="AccountNumber"/>
                    </label>
                    <br/>
                    <label>
                        Account Description:
                        <input className= "inputBox" type="text" name="AccountDescription"/>
                    </label>
                    <br/>
                    <label>
                        Normal Side:
                        <input className= "inputBox" type="text" name="NormalSide"/>
                    </label>
                    <br/>
                    <label>
                        Account Category:
                        <input className= "inputBox" type="text" name="AccountCategory"/>
                    </label>
                    <br/>
                    <label>
                        Account SubCategory:
                        <input className= "inputBox" type="text" name="AccountSubCategory"/>
                    </label>
                    <br/>
                    <label>
                        Account SubCategory:
                        <input type="text" name="AccountSubCategory"/>
                    </label>
                    <br/>
                    <label>
                       Initial Balance :
                        <input type="text" name="AccountInitialBalance"/>
                    </label>
                    <br/>
                    <label>
                       Debit:
                        <input type="text" name="Debit"/>
                    </label>
                    <label>
                       Credit:
                        <input className= "inputBox" type="text" name="Credit"/>
                    </label>
                    <br/>
                    <label>
                       Balance:
                        <input className= "inputBox" type="text" name="AccountBalance"/>
                    </label>
                    <br/>
                    <label>
                       Debit:
                        <input className= "inputBox" type="text" name="Debit"/>
                    </label>
                    <br/>
                    <label>
                       User ID:
                        <input className= "inputBox" type="text" name="UserID"/>
                    </label>
                    <br/>
                    <label>
                       Order:
                        <input className= "inputBox" type="text" name="Order"/>
                    </label>
                    <br/>
                    <label>
                       Statement:
                        <input className= "inputBox" type="text" name="Statement"/>
                    </label>
                    <br/>
                    <label>
                       Comments:
                        <input className= "inputBox" type="text" name="Comments"/>
                    </label>

                    
                    <input type="submit" value="Submit" />
                </form>
             
            </div>
            <div className="btnContatiner">
                <button className='btnPrimary'>
                    <span className='bold'>YES</span>, Confirm Account Changes
                </button>
                <button className='btnOutline'>
                    <span className='bold'>NO</span>, Cancel.
                </button>
            </div>
        </div>
      
    </div>
</div>

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

