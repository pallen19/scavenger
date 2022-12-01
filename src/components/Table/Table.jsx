import DataTable from 'react-data-table-component';
import { React, Component, useState, useEffect } from 'react'
import { render } from '@testing-library/react';
import Modal from '../../components/Modal/Modal'
import JournalEntryForm from '../../ui-components/JournalEntryForm';
import { db, storage } from '../../firestore-config'
import { deleteDoc, collection, getDocs, getDoc, updateDoc, query, where, arrayUnion, documentId, doc, arrayRemove, addDoc } from 'firebase/firestore';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { PendingJournalApprovals } from '../../ui-components';
import { ref, uploadBytes } from 'firebase/storage'
import {getAccounts} from './TableFunctions'
// A super simple expandable component.

export default function Table(props) {
    
    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

    const [modal, setModal] = useState(false)
    const [debit, setDebit] = useState("")
    const [credit, setCredit] = useState("")
    const [imageUpload, setImageUpload] = useState(null)
    const [accountNames,setAccountNames] = useState([])

    const accounts = getAccounts();
    const pendingJournalEntries = collection(db, "pendingJournalEntries")
    const accountsColRef = collection(db, "accounts")
    const eventLogColRef = collection(db, "eventLog")

    const onOpen = async () => {
        
        let temp = []
        accounts.forEach(account => {
            console.log(account.accountName);
            temp.push(account.accountName);
        });
        console.log(temp);
        setAccountNames(temp);
        setModal(true);
        
    }
    

    const onClose = () => {
        
        setModal(false);
    }

    useEffect(() => {
        
    }, [modal])

    const submitJournal = async () => {

        const currDate = new Date()
        const enteredDate = currDate.toString().substring(0, 15)

        if (parseInt(debit) === parseInt(credit)) {

            await addDoc(pendingJournalEntries, { accountName: "", debit: debit, credit: credit, entryDate: currDate, status: "pending" })
            await addDoc(eventLogColRef, {altered : "Journal", changes : "Creation", dateAltered : enteredDate})
        }
        else {
            alert("Debits and Credits are not equal")
        }
    }

    const uploadImage = () => {

        if (imageUpload == null) return;

        const imageRef = ref(storage, `images/${imageUpload.name}`)

        uploadBytes(imageRef, imageUpload).then(() => {
            alert("Image uploaded")
        })
    }

    const columns = [
        {
            name: 'Date Created',
            selector: row => row.DateCreated,
            sortable: true,
        },
        {
            name: 'Account Name',
            selector: row => row.AccountName,
            sortable: true,
        },
        {
            name: 'Debit',
            selector: row => row.Debit,
            sortable: true,
        },
        {
            name: 'Credit',
            selector: row => row.Credit,
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => row.Status,
            sortable: true,
        },


    ];

    const data = [
        {
            id: 1,
            title: props.name,
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 3,
            title: "hi",
            year: '144',
            Account: 'few'
        }
    ]

    
    return (
        <>
        {console.log(accounts)}
            <DataTable
                columns={columns}
                data={data}
                expandableRows
                expandableRowsComponent={ExpandedComponent}
                selectableRows
            />

            <Modal show={modal} onClose={() => onClose()}>
                <JournalEntryForm
                    overrides={
                        {
                            dropdownFrame: { children: <DropdownMenu placeholder="Select An Account" options={["Test1","Test2","Test3","Test4"]} /> },
                            Debit: { onChange: (event) => setDebit(event.target.value) },
                            Credit: { onChange: (event) => setCredit(event.target.value) },
                            ButtonSubmit: { onClick: () => submitJournal() }
                        }
                    }>
                </JournalEntryForm>

                <div>
                    <input type="file" onChange={(event) => { setImageUpload(event.target.files[0]) }} />
                    <button onClick={uploadImage} > uploadImage </button>
                </div>

                <div>
                    <button onClick={()=> onClose()} >Cancel</button>
                </div>

            </Modal>

            <button onClick={() => onOpen()}>Button</button>

        </>
    );

}