import React from 'react'
import "./AdminNavBarStyles.css";

import { Component } from 'react'
import BitterBean from "../components/BitterBean.jpeg"
import { withAuthenticator, Button, Heading, Placeholder,AmplifyProvider } from '@aws-amplify/ui-react';


class AdminNavBar extends Component {
    
    state={clicked: false};
    
    handleClick =() =>{
        this.setState({clicked:!this.state.clicked})
    }
    
     SelectedSignOut = (signOut,user) => {
     signOut();
    }

    render() {
        
        return (
            <>
            <div>
                <nav>
                    <a href="index.html">
                        <img src={BitterBean} width="49" height={"50"} style={{padding:"0px"}}/> 
                       
                    </a>
    <div >
       <ul id='navBar' className={this.state.clicked ? '#navBar active': '#navBar'}>
        <li><a className="active" href="index.html">Home</a></li>
        <li><a href="index.html">Users</a></li>
        <li><a href="index.html">Accounts</a></li>
        <li><a href="index.html">Expired Passwords Report</a></li>
        
       </ul>
  
       </div>
       <div id='mobile' onClick={this.handleClick}>
            <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
       </div>
       <Button onClick={this.SelectedSignOut} style={{float: 'right'}} height={'40px'} >Sign out</Button>
                </nav>
            </div>
       </>
       );
    }

}
export default AdminNavBar;
    {/* <h1 style={{float:'center'}} padding-top= '0px'>Bean Counter</h1>*/}