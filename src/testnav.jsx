
import React from 'react'
import{Link} from "react-router-dom"

export default function TestNav(){
 return(
    <>
    <Link to="adminAccounts">   accounts  </Link>
    <Link to="adminHome">   adminHome  </Link>
    <Link to="adminNewUser">   adminNewUser  </Link>
    <Link to="AdminNewAccount">   AdminNewAccount  </Link>
    </>
 
 )
}