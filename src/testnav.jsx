
import React from 'react'
import{Link} from "react-router-dom"


export default function TestNav(){
 return(
    <div>
    <Link to="Accounts">   accounts  </Link>
    <Link to="Home">   adminHome  </Link>
    <Link to="NewUser">   adminNewUser  </Link>
    <Link to="NewAccount">   AdminNewAccount  </Link>
    <Link to="ChartOfAccounts">   ChartofAccounts  </Link>
    </div>
 
 )
}