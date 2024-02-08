import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DataTable from '../../Components/dataTable/DataTable'
import './users.scss'
import { rows } from '../../data';
import { useState } from 'react';
import Add from '../../Components/Add/Add';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: "img", headerName: "Avatar", width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || "/"} alt="" />
        }
    },
    {
        field: "status", headerName: "Status", width: 100, type: "boolean"
    },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];



const Users = () => {

    const [open, setOpen] = useState(false)
    return (
        <div className="users">
            <div className="infor">
                <h1>Users</h1>
                <button onClick={() => setOpen(true)}>Add new User</button>
            </div>
            {/* Fetch the rows */}
            <DataTable slug="users" columns={columns} rows={rows} />
            {open && <Add slug='user' columns={columns} setOpen={setOpen} />}
        </div>
    )
}

export default Users