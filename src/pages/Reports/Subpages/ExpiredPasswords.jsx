import {collection,getDocs,} from 'firebase/firestore';
import {db} from '../../firestore-config'
import {PageHeader} from '../../ui-components';
import {useState,useEffect} from 'react';
import { Outlet } from 'react-router-dom';

export function ExpiredPasswords(props){
    //Constants
   
    const [userInfo, setUserInfo] = useState([]);

    const usersColRef = collection(db, "testUsers");



    useEffect(() => {

        const getUsers = async () => {

            const data = await getDocs(usersColRef);
            setUserInfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getUsers()

    }, [])
    //End of Constants

    switch(props.level){
        case 'Administrators':
            return (
                <>
                <h1>Admins</h1>
                <PageHeader  
       overrides={{
         PageHeader: {width:"100%"},
         Background:{width: "100%"},
         PageTitle: {children: "Expired Passwords"},
         SubNavigation:{children:""}
         
     }}/>
     <Outlet></Outlet>
     <div className="d-inline-flex p-2">
                {/*{testExpiredPasswords.map(account1=>getPasswordReport(account1))} */}
                {userInfo.map(account1 => ReportsCard(account1))}
    </div>
            </> );
        case 'Managers':
            return(
            <h1>Managers</h1>
            )
        case 'Accountant':
            return(
                <h1>Accountant</h1>
                )
        default:
            return(<h1>Access Denied</h1>)
        }
   
  }