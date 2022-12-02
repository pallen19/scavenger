import { useNavigate,useLocation } from "react-router-dom";
import { useState,useEffect,useRef,forwardRef } from "react";
import { PageHeader } from "../../ui-components";
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
    const selectedUser = useRef("");
    const [search,setSearch] = useState("");
    const [SelectedOption,setSelectedOption] = useState("");
    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
    const menuOptions2 =["Administrator","Manager","Accountant","Disabled","Unverified"]
    const columns = [{name:'Username',
                    selector: row=> row.UserName,
                    sortable: true}]
  const onChange = (selection)=>{

    console.log(selection.value)
  }
    //End of Constants
   useEffect(() => {

    const getList = async () => {
        const data = await GetUser(" ","all");
        console.log("data is")
        console.log(data.Users)
        let fields =[]
        data.Users.forEach(property => {
          fields.push({"Username": property.Username
        })
          console.log(property)
        })

        setUserList(fields)
        console.log("Userlist = ")
        console.log(userList)
    }
    getList()
   },[]);

   const testFunc= (thing1,thing2)=>{
   
    console.log(thing1);
    console.log(thing2);
   }

  
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
        <form onSubmit={testFunc(SelectedOption,selectedUser.current.valueOf())}>
            <label id="Username">Username</label>
            <input ref={selectedUser} type="text"></input>
            <DropdownMenu id="accountLevel" onChange={onChange} options={["Administrators","Accountant","Managers","Regular_User"]}/>
            <button type="submit">Submit</button>
        </form>
        <input type="text" onChange={e => setSearch(e.target.value)}/>
        <button onClick={() => GetUser("","all")}>Get User List</button>
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
          </>
          )
      case 'Accountant':
          return(
            <>
            </> 
             )
      default:
          return(<h1>Access Denied</h1>)
      }
  
  
       
   
  }