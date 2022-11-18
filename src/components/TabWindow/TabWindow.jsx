import { useState } from "react";
import "./TabWindow.css"

export default function TabWindow({innerStyle,children},props){
    const [activeTab,setActiveTab] = useState(props.currentTab);

    return(
        <div className="OuterWindow">
        <div className="ButtonBar">
            <button>Tab 1</button>
            <button>Tab 2</button>
            <button>Tab 3</button>
        <div className={innerStyle}>
        {children}
        </div>
        </div>
        </div>
       
        
    )
}