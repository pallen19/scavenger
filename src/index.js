import React from "react";
import ReactDOM from "react-dom/client";

import CustomAuthenticator from "./CustomAuthenticator";


export default function Entrypoint() {
    return (
    <CustomAuthenticator>
    </CustomAuthenticator>
    )
}

const element = document.getElementById('root');
const root = ReactDOM.createRoot(element);
root.render(<Entrypoint />);