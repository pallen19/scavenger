import { useEffect } from "react";
import { useState ,setState} from "react";
import { useNavigate } from "react-router-dom";
import "./TabWindow.css"

export function TabWindow({innerStyle,buttonStyle,children,options}){
    const navigate = useNavigate();
    const [list,setList] = useState(options);
    const [activeTab,setActiveTab] = useState("");
    

    
    

    return(
        
        <div className="OuterWindow">
        <div className="buttonBar">
            {list.map((tab) => <button className={buttonStyle} onClick={() => navigate(tab)}>{tab}</button>)}
        <div className={innerStyle}>
        {children}
        </div>
        </div>
        </div>
       
        
    )
}