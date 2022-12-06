import { useEffect } from "react";
import { useState ,setState} from "react";
import { useNavigate } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import "./TabWindow.css"

export function TabWindow({innerStyle,buttonStyle,children,options}){
    const navigate = useNavigate();
    const [list,setList] = useState(options);
    const [activeTab,setActiveTab] = useState("");
    

    
    

    return(
        
        <div className="OuterWindow">
        <div className="buttonBar">
        
            {list.map((tab) =><><p data-delay-show='250' data-tip="Click here to view tab" > <button className={buttonStyle} onClick={() => navigate(tab)}>{tab}</button></p><ReactTooltip/></>)}

        
        
        <div className={innerStyle}>
        {children}
        </div>
        </div>
        </div>
       
        
    )
}