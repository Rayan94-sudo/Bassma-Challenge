/* eslint-disable jsx-a11y/anchor-is-valid */
// src/components/pagination.table.js
import React from "react";
import axios from "axios"
import { useTable, usePagination,useFilters } from 'react-table'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Title } from 'react-admin';
function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
}) {
    const count = preFilteredRows.length

    return (
        <input
            className="form-control"
            value={filterValue || ''}
            onChange={e => {
                setFilter(e.target.value || undefined)
            }}
            placeholder={`Search ${count} records...`}
        />
    )
}
function Table({ columns, data }) {
    const defaultColumn = React.useMemo(
        () => ({
            // Default Filter UI
            Filter: DefaultColumnFilter,
        }),
        []
    )

    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            defaultColumn,
            initialState: { pageIndex: 0, pageSize: 20 },
        },
   
        useFilters,
        usePagination,
    )

    // Render the UI for your table
    return (
        <div>
            <pre>
                <code>
                    {JSON.stringify(
                        {
                            pageIndex,
                            pageSize,
                            pageCount,
                            canNextPage,
                            canPreviousPage,
                        },
                        null,
                        2
                    )}
                </code>
            </pre>

            <table className="table" {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}
                                 {/* Render the columns filter UI */}
                                 <div>{column.canFilter ? column.render('Filter') : null}</div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <br />
            <div>Showing the first 20 results of {rows.length} rows</div>
            <div>
                <pre>
                    <code>{JSON.stringify(state.filters, null, 2)}</code>
                </pre>
            </div>
            {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
            <ul className="pagination">
                <li className="page-item" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    <a className="page-link">First</a>
                </li>
                <li className="page-item" onClick={() => previousPage()} disabled={!canPreviousPage}>
                    <a className="page-link">{'<'}</a>
                </li>
                <li className="page-item" onClick={() => nextPage()} disabled={!canNextPage}>
                    <a className="page-link">{'>'}</a>
                </li>
                <li className="page-item" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    <a className="page-link">Last</a>
                </li>
                <li>
                    <a className="page-link">
                        Page{' '}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>{' '}
                    </a>
                </li>
                <li>
                  
                </li>{' '}
                <select
                    className="form-control"
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                    style={{ width: '120px', height: '38px' }}
                >
                    {[ 20, 40, 60].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </ul>
        </div >
    )
}
function getData(){
    const arr=[];
    axios.get("http://127.0.0.1:8000/api/auth/index?firstname=&email=&id=&pagination=2")
    .then(response => {
      for (var i=0; i<response.data.data.data.length;i++ ){
          arr.push([{"id": response.data.data.data[i].id, "firstname":response.data.data.data[i].firstname, "email":response.data.data.data[i].email}]);
      }
    })
    .catch(error => {
      console.log(error)
    })
   
return arr;
}
function Customers() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'id',
                columns: [
                    {
                        Header: 'id',
                        accessor: 'id',
                    },
                   
                ],
            },
            {
                Header: 'Info',
                columns: [
                    {
                        Header: 'first name',
                        accessor: 'firstname',
                    },
                    {
                        Header: 'email',
                        accessor: 'email',
                    },
                   
                ],
            },
        ],
        []
    )
    
    console.log(getData());
    const data=[{
        "id":"1",
        "firstname":"sefs",
        "email":"sfcasd"
      },
      {
        "id":"1",
        "firstname":"sefs",
        "email":"sfcasd"
      }];
    console.log(data);
     
      
    return (
        <card>  
            <Title title="Customers" />
        <Table columns={columns} data={data} />
        </card>
    )
}

export default Customers;