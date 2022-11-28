import { getDocs,collection } from "firebase/firestore";
import { db } from '../../firestore-config'


export function getAccountNames(){
    const accountsColRef = collection(db, "accounts")
    const array = [];

getDocs(accountsColRef)
            .then(snapshot => {
                snapshot.forEach(account => { 
                    array.push( {"id": account.id ,"accountName": account.data().accountName })
                })
            })
            return array;
}

export function getAccounts(){
    const accountsColRef = collection(db, "accounts")
    const array = [];

getDocs(accountsColRef)
            .then(snapshot => {
                snapshot.forEach(account => { 
                    array.push(account)
                })
            })
            return array;
}