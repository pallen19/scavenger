import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import CustomAuthenticator from "./CustomAuthenticator";
import Layout from "./Layout";
import { AmplifyProvider } from "@aws-amplify/ui-react";


export default function Entrypoint() {
    return (
        <AmplifyProvider>
        <BrowserRouter>
        <Routes>

          
            <Route path = "*" element={<CustomAuthenticator/>}></Route>
           
           
        </Routes>
        </BrowserRouter>
        </AmplifyProvider>
    )
}

const element = document.getElementById('root');
const root = ReactDOM.createRoot(element);
root.render(<Entrypoint />);