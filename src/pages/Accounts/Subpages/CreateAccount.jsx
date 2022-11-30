import { useState } from 'react'
import CreateNewAccountNew from '../../../ui-components/CreateNewAccountNew'
import { Firestore, collection, addDoc, where, query, getDocs } from 'firebase/firestore'
import { db } from '../../../firestore-config'
import DropdownMenu from '../../../components/DropdownMenu/DropdownMenu'

const CreateAccount = () => {

    const [accountName, setAccountName] = useState("")
    const [accountNumber, setAccountNumber] = useState("")
    const [accountDescription, setAccountDescription] = useState("")
    const [accountCategory, setAccountCategory] = useState("")
    const [accountSubcategory, setAccountSubcategory] = useState("")
    const [order, setOrder] = useState("")
    const [debit, setDebit] = useState("")
    const [credit, setCredit] = useState("")
    const [beginBalance, setBeginBalance] = useState("")
    const [endBalance, setEndBalance] = useState("")
    const [comments, setComments] = useState("")

    const [defaultView, setDefaultView] = useState(true)

    const DefaultView = (props) => {
        if (defaultView) {

        }
    }

    const createAccount = async () => {

        const accountsColRef = collection(db, "accounts")

        const q = query(collection(db, "accounts"), where("accountName", "==", accountName))

        const querySnapshot = await getDocs(q).then(console.log("found it"));

        if (querySnapshot.empty) 
        {
            try 
            {
                if(accountName != "")
                {
                    await addDoc(accountsColRef, {
                        accountName: accountName, accountNumber: accountNumber, accountDescription: accountDescription,
                        accountCategory: accountCategory, accountSubcategory: accountSubcategory, order: order, debit: debit, credit: credit,
                        beginBalance: beginBalance, endBalance: endBalance, comments: comments
                    }).alert("Account successfully added")
                }
                else
                {
                    alert("Account name cannot be blank")
                }
            }
            catch (error) 
            {
                console.log(error)
            }
        }
        else {
            alert("An account already exists with that name")
        }

    }

    return (
        <div>
            <CreateNewAccountNew style={{ position: 'relative', left: '30em' }}
                overrides={{
                    'accountNameLabel': { onChange: (event) => { setAccountName(event.target.value) } },
                    'accountNumberLabel': { onChange: (event) => { setAccountNumber(event.target.value) } },
                    'accountDescription': { onChange: (event) => { setAccountDescription(event.target.value) } },
                    'accountCategory': { onChange: (event) => { setAccountCategory(event.target.value) } },
                    'accountSubcategory': { onChange: (event) => { setAccountSubcategory(event.target.value) } },
                    'order': { onChange: (event) => { setOrder(event.target.value) } },
                    'debit': { onChange: (event) => { setDebit(event.target.value) } },
                    'credit': { onChange: (event) => { setCredit(event.target.value) } },
                    'beginBalance': { onChange: (event) => { setBeginBalance(event.target.value) } },
                    'endBalance': { onChange: (event) => { setEndBalance(event.target.value) } },
                    'comments': { onChange: (event) => { setComments(event.target.value) } },
                    'btnsubmit': { onClick: () => { createAccount() }, style: { cursor: "pointer" } },
                    'dropdownFrame': { children: <DropdownMenu placeholder="statement" options={["Test1", "Test2", "Test3"]} /> }
                }} />

        </div>
    )

}

export default CreateAccount;