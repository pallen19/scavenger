import {collection,getDocs,} from 'firebase/firestore';
import {db} from '../../../firestore-config'
import {PageHeader, ReportsCard} from '../../../ui-components';
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
return(
    <div>
        <p>Expired Passwords</p>
    {/* {userInfo.map(account1 => ReportsCard(account1))} */}
    </div>
)
    
   
  }