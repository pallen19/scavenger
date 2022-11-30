import react from 'react';
import DataTable from 'react-data-table-component';


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
    return (
        <>
        <h3>Asset Accounts</h3>
        <DataTable
            columns={columns}
            data={data}
            // columns={props.columns}
            // data={props.data}
        />

        
        
        </>
    );
};

export default GeneralLedger;