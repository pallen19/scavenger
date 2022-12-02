import React from 'react'

export default function DropdownList(props) {
  return (

    <li className='dropdownItem'>
      <img src={props.img}></img>
      <a> {props.text}</a>
    </li>
  )
}
