import react from 'react';
import DataTable from 'react-data-table-component';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firestore-config'
import { useState, useEffect } from 'react';


const columns = [
    {
        name: 'Account Name',
        selector: row => row.accountName,
    },
    
    {
        name: 'Description',
        selector: row => row.accountDescription,
    },
    {
        name: 'Type of Account',
        selector: row => row.accountType,
    },
];

const data = [
    {
        no: 1,
        accountName: 'BeanCounter',
        accountType: 'Credit',
        accountDescription: 'Amounts owed to the company for services performed',
    },
    {
        no: 2,
        accountTitle: 'Accounts Receivable',
        toIncrease: 'Debit',
        description: 'Amounts owed to the company for services performed',
    },
]

function GeneralLedger(props,props2,props3,props4) {
    const approvedJournalEntriesColRef = collection(db, "approvedJournalEntries")
    const [ApprovedJournals, setapprovedJournals] = useState([])
    

    useEffect(() => {

        const getapprovedJournalEntries = async () => {
            const data = await getDocs(approvedJournalEntriesColRef); // handle promise, will return all documents from a specific collection
            setapprovedJournals(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getapprovedJournalEntries()

    }, [])

    return (
        <>
        {/* <h3>Asset Accounts</h3>
        <DataTable
            columns={columns}
            data={data}
             columns={props.columns}
             data={props.data}
 */}
            
        {/* /> */}
    {
    ApprovedJournals.map((eventChange) => {
                
                <div>
                    
                    <h1>Account Name: {eventChange.accountName}</h1>
                    <h2>Actions: {eventChange.actions}</h2>
                    <h3>Credit:  {eventChange.credit}</h3>
                    <h3>Debit:  {eventChange.debit}</h3>
                    <h3>Entry Date: {eventChange.entryDate}</h3>
                </div>
        
    }
    )
    
        
    
}
        
        </>
    );
};


export default GeneralLedger;