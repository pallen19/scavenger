import React from 'react'
import DataTable from 'react-data-table-component';


const columns = [
    {
        name: 'No.',
        selector: row => row.no,
    },
    {
        name: 'Account Title',
        selector: row => row.accountTitle,
    },
    {
        name: 'To Increase',
        selector: row => row.toIncrease,
    },
    {
        name: 'Explanation of Account',
        selector: row => row.description,
    },
];

const data = [
    {
        no: 1,
        accountTitle: 'Cash',
        toIncrease: 'Credit',
        description: 'Amounts owed to the company for services performed',
    },
    {
        no: 2,
        accountTitle: 'Accounts Receivable',
        toIncrease: 'Debit',
        description: 'Amounts owed to the company for services performed',
    },
]

function ChartOfAccounts(props,props2,props3,props4) {
    return (
        <>
        <h1>Asset Accounts</h1>
        <DataTable
            columns={columns}
            data={data}
            // columns={props.columns}
            // data={props.data}
        />

        <h1>Liability Accounts</h1>
        <DataTable
            columns={columns}
            data={data}
            // columns={props.columns}
            // data={props.data}
        />
        <h1>Owners Equity Accounts</h1>
        <DataTable
            columns={columns}
            data={data}
            // columns={props.columns}
            // data={props.data}
        />
        <h1>Operating Revenue Accounts</h1>
        <DataTable
            columns={columns}
            data={data}
            // columns={props.columns}
            // data={props.data}
        />
        <h1>Operating Expense Accounts</h1>
        <DataTable
            columns={columns}
            data={data}
            // columns={props.columns}
            // data={props.data}
        />
        <h1>Non-Operating Revenues and Expenses, Gains, and Losses</h1>
        <DataTable
            columns={columns}
            data={data}
            // columns={props.columns}
            // data={props.data}
        />
        
        </>
    );
};

export default ChartOfAccounts;