import ReactDropdown from "react-dropdown";
import './DropdownMenu.css'

export default function DropdownMenu(props) {
const ListItems = []

props.options.forEach(option => {
    ListItems.push({ value: option, label: option, className: 'dropDownOption' })
});

return(
    <>
    <ReactDropdown options={ListItems}
    controlClassName="dropDownControlFrame" 
    placeholder={props.placeholder}
    menuClassName="dropDownMenuFrame" 
    className="dropDownFrame"/>
    </>
)

}
