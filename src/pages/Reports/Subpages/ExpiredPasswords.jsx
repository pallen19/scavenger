import { collection, getDocs, } from 'firebase/firestore';
import { db } from '../../../firestore-config'
import { PageHeader, ReportsCard } from '../../../ui-components';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';


export function ExpiredPasswords(props) {
    //Constants

    const [userInfo, setUserInfo] = useState([]);

    const usersColRef = collection(db, "users");

    const currDate = new Date() - 7776000;
    const currDate1 = new Date();

    useEffect(() => {

        const getUsers = async () => {

            const data = await getDocs(usersColRef);
            setUserInfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getUsers()

    }, [])

    function getExpiredUsers(userDate) {

    }

    //End of Constants

    

    return (
        <div>
            <p>Expired Passwords</p>

            {userInfo.map((user) => {
                return (
                    ((new Date().getDate() - new Date(user.creationDate).getDate()) > 90   ) ?
                        <div>
                            {" "}
                            <h1>Name: {user.firstName}</h1>
                            <h2>Date Generated: {user.creationDate}</h2>

                            {/* {getExpiredPasswords(user)} */}
                        </div>
                    : console.log(new Date("11-05-2022"))
                );
            })}
        </div>
    )


}