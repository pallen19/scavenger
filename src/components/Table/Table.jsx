

import DataTable from 'react-data-table-component';

import { React, Component, useState, useEffect } from 'react'

import { render } from '@testing-library/react';

import Modal from '../../components/Modal/Modal'

import JournalEntryForm from '../../ui-components/JournalEntryForm';

import { db, storage } from '../../firestore-config'

import { deleteDoc, collection, getDocs, getDoc, updateDoc, query, where, arrayUnion, documentId, doc, arrayRemove, addDoc } from 'firebase/firestore';

import DropdownMenu from '../DropdownMenu/DropdownMenu';

import { PendingJournalApprovals } from '../../ui-components';

import { ref, uploadBytes,} from 'firebase/storage'

import {getAccountNames, getAccounts,getApprovedJournals, getDeniedJournals, getJournals} from './TableFunctions'


// A super simple expandable component.

 

export default function Table(props) {

    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
    const [modal, setModal] = useState(false)
    const [debit, setDebit] = useState("")
    const [credit, setCredit] = useState("")
    const [imageUpload, setImageUpload] = useState(null)
    const [accountNames,setAccountNames] = useState([])
    const [pendingJournals,setPendingJournals] = useState([])
    const [deniedJournals,setDeniedJournals] = useState([])
    const [approvedJournals,setApprovedJournals] = useState([])
    const [journalSelection,setJournalSelection] = useState(" ")
    const [search,setSearch] = useState("");
    const accounts = getAccounts();
    const names = getAccountNames();
    const pendingJournalEntries = collection(db, "pendingJournalEntries")
    const accountsColRef = collection(db, "accounts")
    const eventLogColRef = collection(db, "eventLog")

useEffect(()=>{
    const getData =() =>
    {
        setDeniedJournals(getDeniedJournals);
    }
    getData();
},[])

useEffect(()=>{
    const getData =() =>
    {
        setApprovedJournals(getApprovedJournals);
    }
    getData();
},[])

useEffect(()=>{
    const getData =() =>
    {
        setPendingJournals(getJournals);
    }
    getData();
},[])


const onSearch = async () =>{ 
    
    console.log(search);
    const q = query(collection(db, "accounts"),where("accountName", "==", search));

const querySnapshot = await getDocs(q);

if(querySnapshot.empty) // this means the query did not find a field that the user typed in
{
console.log("Not Found")
}
else
{
    console.log("Found")
}
}
    

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

    const onChange = (selection) =>{
        setJournalSelection(selection);
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

            setModal(false)

            await addDoc(pendingJournalEntries, { accountName:journalSelection.value, debit: debit, credit: credit, entryDate: enteredDate, status: "pending" })

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

            selector: row => row.entryDate,

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
        <div>
            <p>Search:</p>
            <input type="text" onChange={e=>setSearch(e.target.value)} />
            <button onClick={onSearch}>Search</button>
        </div>
        {console.log(accounts)}
            <h1>Pending Journals</h1>
            <DataTable

                columns={columns}

                data={pendingJournals}

                expandableRows

                expandableRowsComponent={ExpandedComponent}

                selectableRows

            />
            <h1>Approved Journals</h1>
               <DataTable

                columns={columns}

                data={approvedJournals}

                expandableRows

                expandableRowsComponent={ExpandedComponent}

                selectableRows

            />
            <h1>Denied Journals</h1>
               <DataTable

                columns={columns}

                data={deniedJournals}

                expandableRows

                expandableRowsComponent={ExpandedComponent}

                selectableRows

            />

 

            <Modal show={modal} onClose={() => onClose()}>

                <JournalEntryForm

                    overrides={

                        {

                            dropdownFrame: { overflow:"visible",children: <DropdownMenu onChange={onChange} placeholder="Select An Account" options={accountNames} /> },

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