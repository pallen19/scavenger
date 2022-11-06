import React from 'react'
import { ButtonCreateNewAccount } from '../ui-components'
export const CreateNewAccount = () => {
  return (
    <div className='CreateNewAccount'style={{position:'absolute',
     left:'36.7%',
      top:'43%',
       justifyContent:'center'}}>
       {/* <h2 className='CreateNewAccount' >View Accounts</h2>
         <p >Create new asset, liability, equity, revenue, or expense account</p>*/}
          <ButtonCreateNewAccount className='CreateNewUser' style={{float:'left',
           justifyContent:'center'}} />
    </div>
  )
}
