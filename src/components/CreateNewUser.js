
import React from 'react'
import { ButtonCreateNewUser } from '../ui-components'

export const CreateNewUser = () => {
  return (
    <>
    <div className='Container' style={{position:'absolute',
     left:'5%',
      top:'43%',
       justifyContent:'center'}}>
    <div className='AdminCreateNewUser'>
        {/** Create New User */}
        {/*<h2 className='CreateNewUser' >View Users</h2>
        <p>Register new Administrator, Manager, or Accountant</p>*/}
          <ButtonCreateNewUser className='CreateNewUser'  />

          
        </div>
        </div>
        </>
  )
}
