import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import CustomAuthenticator from "./CustomAuthenticator";
import Layout from "./Layout";


export default function Entrypoint() {
    return (
        <BrowserRouter>
        <Routes>

            {<Route path = "/" element = {<Layout/>}>
            <Route path = "*" element={<CustomAuthenticator/>}></Route>
            </Route>}
           
        </Routes>
        </BrowserRouter>
    )
}

const element = document.getElementById('root');
const root = ReactDOM.createRoot(element);
root.render(<Entrypoint />);