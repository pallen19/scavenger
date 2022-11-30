import { useState } from "react";
import ReactDropdown from "react-dropdown";
import { UserProfileButton } from "../../ui-components";
import './DropdownMenu.css'

export default function DropdownMenu({options,placeholder,onClick,onChange}) {

const ListItems = []




options.forEach(option => {
   
    ListItems.push({ value: option, label: option, className: 'dropDownOption' })
});

return(
    <>
   
    <ReactDropdown options={ListItems}
    controlClassName="dropDownControlFrame" 
    placeholder={placeholder}
    menuClassName="dropDownMenuFrame" 
    className="dropDownFrame"
    onChange={onChange}/>
    
    </>
)

}

export function CustomDropdown({show,close,children},props){
    const ListItems = []
    
props.options.forEach(option => {
    ListItems.push({ value: option, label: option, className: 'dropDownOption' })
});
if(!show){

    return (
        <>{children}</>
    )
}
else{
    return(
        <>
        <div>{children}</div>
        <div className={props.frameStyle}> 
        {ListItems.map(option=> <div className={props.optionStyle}>{option}</div>)}
        </div>
        </>
    )
}

}
