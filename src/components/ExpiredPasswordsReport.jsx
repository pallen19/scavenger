import React from 'react'
import { ButtonViewExpiredPassword } from '../ui-components'

export const ExpiredPasswordsReport = () => {
  return (
    <div className='ExpiredPasswordsReport' style={{position:'absolute',
    left:'69.5%',
     top:'43%',
      justifyContent:'center'}}>
         {/* <h2>My Account</h2>
         <p>View auto-generated report on users’ expired passwords</p>*/}
          <ButtonViewExpiredPassword  />
    </div>
  )
}
