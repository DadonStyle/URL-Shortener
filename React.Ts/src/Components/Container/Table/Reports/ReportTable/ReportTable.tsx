import React, { useContext, useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import './ReportTable.css'
import { urlInterface } from '../../../../../Interfaces/urlInterface';
import { MdDelete, MdEdit } from 'react-icons/md';
import ReadOnlyRow from '../ReadOnlyRow/ReadOnlyRow';
import EditRow from '../TableRowEdit/EditRow';
import NotyfContext from '../../../../../utils/utils'

const ReportTable = () => {

    const notyf = useContext(NotyfContext);
    const [editMode,setEditMode] = useState(false)
    const [tableState, setTableState] = useState<urlInterface[]>([])
    const memoData = useMemo(() => {return tableState}, [tableState])

    useEffect(()=>{
        tableData()
    },[])

    const tableData = async () => {
        try{
            const response = await axios.get('http://localhost:8080/admin')
            console.log(response)
            setTableState(response.data)
        }catch(err:any){
            notyf.error(err.response.data)
        }
    }

    const handleDelete = async (shortId: string) =>{
        try{
            await axios.delete(`http://localhost:8080/api/${shortId}`)
            notyf.success('השורה נמחקה בהצלחה')
            tableData()
        }catch(err:any){
            notyf.error(err.response.data)
        }
    }

    return (
        <div className="tableContainer"> 
            <table className="allTable">
                <thead className="tableHeader">
                    <tr className="tableRow">
                        <th></th>
                        <th></th>
                        <th> clicks </th>
                        <th> מקוצר URL </th>
                        <th> מקורי URL </th>
                        <th> תאריך </th>
                    </tr>
                </thead>
                <tbody className="tableBody">
                    {memoData.map((item)=>{
                        return (
                            <>
                                <tr className="tableRow">
                                    <td><button className="editBTN" onClick={()=>setEditMode(!editMode)}><MdEdit/></button></td>
                                    <td><button className="deleteBTN" onClick={() =>handleDelete(item._shortId)}><MdDelete/></button></td>
                                    <td>{item._clicks}</td>
                                    <td> {editMode === true ? <EditRow _shortId={item._shortId}/> : <ReadOnlyRow _shortId={item._shortId}/>}</td>
                                    <td>{item._fullUrl}</td>
                                    <td>{new Date().toLocaleDateString()}</td>
                                </tr>  
                            </>
                        )  
                    })}
                </tbody>
            </table>    
        </div>
    )
}

export default ReportTable

