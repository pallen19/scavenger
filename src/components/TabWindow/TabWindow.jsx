import { useEffect } from "react";
import { useState ,setState} from "react";
import { useNavigate } from "react-router-dom";
import "./TabWindow.css"

export default function TabWindow({innerStyle,buttonStyle,children}){
    const navigate = useNavigate();
    const [options,setList] = useState(["1"]);
    const [activeTab,setActiveTab] = useState("");
    

    

    return(
        
        <div className="OuterWindow">
        <div className="buttonBar">
            {options.map(tab => <button className={buttonStyle} onClick={() => navigate({tab})}>{tab}</button>)}
        <div className={innerStyle}>
        {children}
        </div>
        </div>
        </div>
       
        
    )
}