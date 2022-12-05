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

import { getAccountNames, setJournalStatus, getAccounts, getApprovedJournals, getDeniedJournals, getJournals } from './TableFunctions'

// A super simple expandable component.



export default function Table(props) {

    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

    const [activeJournal, setActiveJournal] = useState("")

    const [modal, setModal] = useState(false)

    const [debit, setDebit] = useState("")

    const [credit, setCredit] = useState("")

    const [imageUpload, setImageUpload] = useState(null)

    const [accountNames, setAccountNames] = useState([])

    const [pendingJournals, setPendingJournals] = useState(getJournals)
    const [deniedJournals, setDeniedJournals] = useState(getDeniedJournals)
    const [approvedJournals, setApprovedJournals] = useState(getApprovedJournals)
    const [journalSelection, setJournalSelection] = useState(" ")


    const accounts = getAccounts();
    const names = getAccountNames();

    const pendingJournalEntries = collection(db, "pendingJournalEntries")
    const approvedJournalEntries = collection(db, "approvedJournalEntries")
    const deniedJournalEntries = collection(db, "deniedJournalEntries")

    const accountsColRef = collection(db, "accounts")

    const eventLogColRef = collection(db, "eventLog")

    useEffect(() => {

    }, [pendingJournals, deniedJournals, approvedJournals])

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

    const onChange = (selection) => {
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
            await addDoc(pendingJournalEntries, { accountName: journalSelection.value, debit: debit, credit: credit, entryDate: enteredDate, status: "pending" })
            await addDoc(eventLogColRef, { altered: "Journal for Account - " + journalSelection.value, before: "", after: ("debit: " + debit + ", credit: " + credit), dateAltered: enteredDate })
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

    const testAccountsColRef = collection(db, "testAccounts")

    const addToApproved = async (journal) => {

        await addDoc(approvedJournalEntries, {accountName: journal.accountName, debit: journal.debit, credit: journal.credit, entryDate : journal.entryDate});
        const docToBeDeleted = doc(db, "pendingJournalEntries", journal.id)
        await deleteDoc(docToBeDeleted)
    }

    const addToDenied = async (journal) => {

        await addDoc(deniedJournalEntries, {accountName: journal.accountName, debit: journal.debit, credit: journal.credit, entryDate : journal.entryDate});
        const docToBeDeleted = doc(db, "pendingJournalEntries", journal.id)
        await deleteDoc(docToBeDeleted)
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
            name: "Action",
            cell: row => (
                <>
                    <button onClick={() => addToApproved(row)} className='actionButtons'>Approve</button>
                    <button onClick={() => addToDenied(row)} className='actionButtons'>Deny</button>
                </>
            ),

            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        }, {/*end*/ }
    ];

    return (
        <>
            <button onClick={() => onOpen()}>New Journal Entry</button>
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
                            dropdownFrame: { overflow: "visible", children: <DropdownMenu onChange={onChange} placeholder="Select An Account" options={accountNames} /> },
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
                    <button onClick={() => onClose()} >Cancel</button>
                </div>

            </Modal>
        </>
    );
}