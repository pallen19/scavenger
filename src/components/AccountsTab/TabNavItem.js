import React from "react";
import ReactTooltip from "react-tooltip";
const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
 
 const handleClick = () => {
   setActiveTab(id);
 };
 
return (
  <>
   <p  data-tip="Click here to view tab" title>

   <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
     { title }
   </li>
   </p>
   <ReactTooltip/>
   </>
 );
};
export default TabNavItem;