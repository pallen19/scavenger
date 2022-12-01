

import DataTable from 'react-data-table-component';

import { React, Component, useState, useEffect } from 'react'

import Modal from '../../../../src/components/Modal/Modal'

import JournalEntryForm from '../../../../src/ui-components/JournalEntryForm.jsx';

import { db, storage } from '../../../firestore-config'

import { deleteDoc, collection, getDocs, getDoc, updateDoc, query, where, arrayUnion, documentId, doc, arrayRemove, addDoc } from 'firebase/firestore';

import DropdownMenu from '../../../../src/components/DropdownMenu/DropdownMenu';

import { PendingJournalApprovals } from '../../../../src/ui-components';

import { ref, uploadBytes } from 'firebase/storage'

import {getAccountNames, getAccounts,getApprovedJournals, getDeniedJournals, getJournals} from '../../../../src/components/Table/TableFunctions'

// A super simple expandable component.

 

export default function GeneralLedger(props) {

   

    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

 

    const [modal, setModal] = useState(false)

    const [debit, setDebit] = useState("")

    const [credit, setCredit] = useState("")

    const [imageUpload, setImageUpload] = useState(null)

    const [accountNames,setAccountNames] = useState([])

    const [pendingJournals,setPendingJournals] = useState(getJournals)

    const [deniedJournals,setDeniedJournals] = useState(getDeniedJournals)

    const [approvedJournals,setApprovedJournals] = useState(getApprovedJournals)

    const accounts = getAccounts();
    const names = getAccountNames();

    const approvedJournalEntries = collection(db, "approvedJournalEntries")

    const accountsColRef = collection(db, "accounts")
    const journalColRef = collection(db, "accounts")

    const eventLogColRef = collection(db, "eventLog")

 

    const onOpen = async () => {

       

        let temp = []
        console.log("accounts name")
        console.log(accounts)
        names.forEach(account => {

            console.log(account.accountName);

            temp.push(account.accountName);

        });
        console.log("temp account names is:")
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

 

            await addDoc(approvedJournalEntries, { accountName: "", debit: debit, credit: credit, entryDate: currDate, actions: "pending"})

            // await addDoc(eventLogColRef, {altered : "Journal", changes : "Creation", dateAltered : enteredDate})

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

            selector: row => row.accountName,

            sortable: true,

        },

        {

            name: 'Debit',

            selector: row => row.debit,

            sortable: true,

        },

        {

            name: 'Credit',

            selector: row => row.credit,

            sortable: true,

        },

        {

            name: 'Actions',

            selector: row => row.actions,

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
        <button onClick={() => onOpen()}>New Journal Entry</button>
        {console.log(accounts)}
            <h1>General Ledger</h1>
               <DataTable

                columns={columns}

                data={approvedJournals}

                expandableRows

                expandableRowsComponent={ExpandedComponent}

                selectableRows

            />
           
 

            <Modal show={modal} onClose={() => onClose()}>

                <JournalEntryForm

                    overrides={

                        {

                            dropdownFrame: { overflow:"visible",children: <DropdownMenu  placeholder="Select An Account" options={accountNames} /> },

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

 

            

 

        </>

    );

 

}