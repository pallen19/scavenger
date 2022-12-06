import { useNavigate,useLocation } from "react-router-dom";
import { useState,useEffect,useRef,forwardRef } from "react";
import { NewAccount, PageHeader } from "../../ui-components";
import  ReactDropdown  from "react-dropdown";
import DropdownMenu from '../../components/DropdownMenu/DropdownMenu'
import {getUserGroup,elevateAccount } from "./UsersFunctions";
import Modal from "../../components/Modal/Modal";
import { GetUser,SetAccountLevel } from "./UsersFunctions";
import DataTable from "react-data-table-component";

export function Users(props){
    //Constants
    const location = useLocation();
    const navigation = useNavigate();
    const [modal,setModal] = useState(false);
    const [userList,setUserList] = useState([]);
    const [selectedUser,setSelectedUser] = useState("");
    const [search,setSearch] = useState("");
    const [SelectedOption,setSelectedOption] = useState("");
    const menuOptions2 =["Administrator","Manager","Accountant","Disabled","Unverified"]
    //set the selected dropdown option to the most recent option.
    const selectOption = (selection) => {
      console.log(selection.value)
      setSelectedOption(selection.value);
    }

    const changeAccountLevel=(user,currentGroup,newGroup)=>{
      SetAccountLevel(user,currentGroup,"remove");
      SetAccountLevel(user,newGroup,"add");
    }

    const ExpandedComponent = ({ data }) => <pre><div className="TableCellContainer" >
      <div className="FirstCellSlot">
        <p>Group:{data.Group}</p>
        
      </div>
      
      <div className="SecondCellSlot">
        <label>Set Account Level</label>
        {console.log("group is")}
        {console.log(data)}
        <DropdownMenu  id="DropdownField" onChange={()=>selectOption} options={menuOptions2}></DropdownMenu>
        <button onClick={()=>changeAccountLevel(data.Username,data.Group,SelectedOption)}>Change Level</button>
        </div>
      <div className="ThirdCellSlot">
      <button onClick={SetAccountLevel(data.Username," ","disable")}>Disable User</button>
      </div>
      </div>
      </pre>;

    
    const columns = [{
                  name:'Username',
                  selector: row=> row.Username,
                  sortable: true
                  },{
                  name:'Name',
                  selector: row=> row.Name,
                  sortable: true
                },{
                  name:'Last Modified',
                  selector: row=> row.Modified,
                  sortable: true
                },{
                  name:'Status',
                  selector: row=> row.Enabled,
                  sortable: true
                }]



    //End of Constants

    //update the list of users when the page updates
   useEffect(() => {
    const getList = async () => {
        const data = await GetUser(" ","all");
        let fields =[]
        data.Users.forEach(User => {
          let group = getUserGroup(User.Username)
          console.log(group)
          fields.push({
          "Username": User.Username,
          "Name": User.Attributes[5].Value + " " + User.Attributes[6].Value,
          "Modified": new Date(User.UserLastModifiedDate).toLocaleDateString(),
          "Group": group.GroupName,
          "Enabled": User.Enabled.toString(),
        })
          console.log(User)
        })

        setUserList(fields) 
    }
    getList()
   },[]);
//conditional rendering of the page based on the users account level.
    switch(props.level){
      case 'Administrators':
          return (
              <>
        <PageHeader
         overrides={{
           PageHeader: {width:"100%"},
           Background:{width: "100%"},
           PageTitle: {children: "Users"},
           SubNavigation:{children:""}
        }}/>
        {/* change user account level */}
        
        <DataTable 
        columns={columns}
        data={userList}
        expandableRows
        expandableRowsComponent={ExpandedComponent}
        selectableRows></DataTable>
          </> );
      case 'Managers':
          return(
            <>
            {/* CREATE PAGE HEADERS */}
            <PageHeader
         overrides={{
           PageHeader: {width:"100%"},
           Background:{width: "100%"},
           PageTitle: {children: "Users"},
           SubNavigation:{children:""}
        }}/>

        {/* change user account level */}
        <form onSubmit={testFunc(SelectedOption,selectedUser.current.valueOf())}>
            
              <label id="Username">Username</label>
             
            <p data-delay-show='250' data-delay-update='250' data-tip='Enter the username'>
            <input ref={selectedUser} type="text"></input>
            </p>
            <ReactTooltip/>
            <p data-delay-show='250' data-delay-update='250' data-tip='Click to select an option'>
            <DropdownMenu id="accountLevel" onChange={onChange} options={["Administrators","Accountant","Managers","Regular_User"]}/>
            </p>
            <ReactTooltip/>
           <p data-delay-show='250' data-delay-update='250' data-tip='Click here to submit'>
            <button type="submit">Submit</button>
            </p>
            <ReactTooltip/>
        </form>
        <input type="text" onChange={e => setSearch(e.target.value)}/>
        <p data-delay-show='250' data-delay-update='250' data-tip='Click here to get user list'>
        <button onClick={() => GetUser("","all")}>Get User List</button>
        </p>
        <ReactTooltip/>
        <DataTable 
        columns={columns}
        data={userList}
        expandableRows
        expandableRowsComponent={ExpandedComponent}
        selectableRows></DataTable>
         
            </> 
          )
      case 'Accountant':
          return(
            <>
            {/* CREATE PAGE HEADERS */}
            <PageHeader
         overrides={{
           PageHeader: {width:"100%"},
           Background:{width: "100%"},
           PageTitle: {children: "Users"},
           SubNavigation:{children:""}
        }}/>

        {/* change user account level */}
        <form onSubmit={testFunc(SelectedOption,selectedUser.current.valueOf())}>
            
              <label id="Username">Username</label>
             
            <p data-delay-show='250' data-delay-update='250' data-tip='Enter the username'>
            <input ref={selectedUser} type="text"></input>
            </p>
            <ReactTooltip/>
            <p data-delay-show='250' data-delay-update='250' data-tip='Click to select an option'>
            <DropdownMenu id="accountLevel" onChange={onChange} options={["Administrators","Accountant","Managers","Regular_User"]}/>
            </p>
            <ReactTooltip/>
           <p data-delay-show='250' data-delay-update='250' data-tip='Click here to submit'>
            <button type="submit">Submit</button>
            </p>
            <ReactTooltip/>
        </form>
        <input type="text" onChange={e => setSearch(e.target.value)}/>
        <p data-delay-show='250' data-delay-update='250' data-tip='Click here to get user list'>
        <button onClick={() => GetUser("","all")}>Get User List</button>
        </p>
        <ReactTooltip/>
        <DataTable 
        columns={columns}
        data={userList}
        expandableRows
        expandableRowsComponent={ExpandedComponent}
        selectableRows></DataTable>
         
            </> 
             )
      default:
          return(<h1>Access Denied</h1>)
      }
  
  
       
   
  }