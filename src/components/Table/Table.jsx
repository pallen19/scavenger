import DataTable from 'react-data-table-component';
import { React, Component, useState, useEffect } from 'react'
import { render } from '@testing-library/react';
import Modal from '../../components/Modal/Modal'
import JournalEntryForm from '../../ui-components/JournalEntryForm';
import { db } from '../../firestore-config'
import { deleteDoc, collection, getDocs, getDoc, updateDoc, query, where, arrayUnion, documentId, doc, arrayRemove, addDoc } from 'firebase/firestore';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { PendingJournalApprovals } from '../../ui-components';
// A super simple expandable component.

export default function Table(props) {

    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

    const [modal, setModal] = useState(false)
    const [debit, setDebit] = useState("")
    const [credit, setCredit] = useState("")

    const pendingJournalEntries = collection(db, "pendingJournalEntries")
    const accountsColRef = collection(db, "accounts")

    const accountNames = []

    const onOpen = async () =>
    {  
        setModal(true)
        
        await getAccountNames();
        console.log(accountNames)
    }

    const onClose = () => {
        
        setModal(false);
    }

    const getAccountNames = async () => {

        await getDocs(accountsColRef)
            .then(snapshot => {
                snapshot.forEach(accounts => {
                    accountNames.push(accounts.data().accountName)
                })
            })
    }

    const submitJournal = async () => {

        const currDate = new Date()

        if (parseInt(debit) === parseInt(credit)) {
            await addDoc(pendingJournalEntries, { accountName: "", debit: debit, credit: credit, entryDate: currDate, status: "pending" })
        }
        else {
            alert("Debits and Credits are not equal")
        }
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

    useEffect(() => {

    }, [accountNames])


    return (
        <>
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
                            dropdownFrame: { children: <DropdownMenu placeholder="Select An Account" options={accountNames} /> },
                            Debit: { onChange: (event) => setDebit(event.target.value) },
                            Credit: { onChange: (event) => setCredit(event.target.value) },
                            ButtonSubmit: { onClick: () => submitJournal() }
                        }
                    }>
                </JournalEntryForm>
            </Modal>

            <button onClick={() => onOpen()}>Button</button>
        </>
    );

}