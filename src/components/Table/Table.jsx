import DataTable from 'react-data-table-component';
import {React, Component} from 'react'
import { render } from '@testing-library/react';
// A super simple expandable component.

export default function Table(props){
    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

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
        id:3,
        title: "hi",
        year: '144',
        Account: 'few' 
    }
]

    
    return (
        <DataTable
            columns={columns}
            data={data}
            expandableRows
            expandableRowsComponent={ExpandedComponent}
            selectableRows
        />
    );

}