import { useState } from 'react'
import './products.scss'
import DataTable from '../../Components/dataTable/DataTable'
import Add from '../../Components/Add/Add'
import { GridColDef } from '@mui/x-data-grid';
import { products } from '../../data';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: "img", headerName: "Image", width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || "/"} alt="" />
        }
    },
    {
        field: "title", headerName: "Title", width: 250, type: "string"
    },
    {
        field: 'color',
        type: "string",
        headerName: 'Color',
        width: 150,
        // editable: true,
    },
    {
        field: 'price',
        type: "string",
        headerName: 'Price',
        width: 2000,
        // editable: true,
    },
    {
        field: 'producer',
        headerName: 'Producer',
        type: 'string',
        width: 200,
        // editable: true,
    },
    {
        field: 'createdAt',
        headerName: 'Created At',
        description: 'This column has a value getter and is not sortable.',
        type: "string",
        width: 200
    },
    {
        field: 'inStock',
        headerName: 'In Stock',
        description: 'This column has a value getter and is not sortable.',
        type: "boolean",
        width: 150
    },
];


const Products = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="products">
            <div className="infor">
                <h1>Products</h1>
                <button onClick={() => setOpen(true)}>Add new Products</button>
            </div>
            {/* Fetch the rows */}
            <DataTable slug="products" columns={columns} rows={products} />
            {open && <Add slug='product' columns={columns} setOpen={setOpen} />}
        </div>
    )
}

export default Products