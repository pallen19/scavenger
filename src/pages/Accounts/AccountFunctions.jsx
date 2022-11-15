import{useState} from 'react'
import {db} from '../../firestore-config';
import {deleteDoc,collection,doc,getDoc} from 'firebase/firestore';
import {AccountCard} from '../../ui-components'


export function GetAccountData(){
    const accountsColRef = collection(db, "accounts");
    const [docID, setDocID] = useState([])
    const [myArr, setMyArr] = useState([])

    let accountData = [];
    getDoc(accountsColRef)
    .then(snapshot => {
        snapshot.forEach(account => {
            setDocID = account;
        });
    }); 
    accountData.push(setDocID)
    // arrayUnion(setDocID, accountsColRef)   
    return accountData;
}

export async function deleteAccount(id) {
    const testAccountsDoc = doc(db, "accounts", id) //references to that document
    await deleteDoc(testAccountsDoc);
}

export function getAccountCards(account,props){
    return ( 
        <>
        <div className="whiteSpace">
        <AccountCard
            overrides={
                {
                    'trash-alt': { onClick: () => deleteAccount(account.id),style:{cursor:"pointer"}}, // trash can delete function on all account cards
                    AccountName: { children: account.accountName },
                    AccountNumber: { children: account.accountNumber },
                    Subcategory: { children: account.accountSubcategory },
                    AccountDescription: { children: account.accountDescription },
                    AccountCreation: {children: account.accountCreation},
                    Order: {children: account.order},
                    Statement: {children: account.statement},
                    Comments: {children: account.comments},
                    UserID: {children: account.userID},
                    NormalSide: {children: account.normalSide},
                    InitialBalance: {children: account.initialBalance},
                    Debit: {children: account.debit},
                    Credit: {children: account.credit},
                    Balance: { children: account.balance },
                    SwitchField: { defaultChecked: account.isActive },
                    edit:{onClick: ()=> props.setModal(!props.modal),style:{cursor:"pointer"}},
                    
                }
            }></AccountCard> 
        </div>
    </>
    
       )
  }