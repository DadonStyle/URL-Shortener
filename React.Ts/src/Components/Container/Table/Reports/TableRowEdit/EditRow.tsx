import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { shortIdInterface } from '../../../../../Interfaces/shortIdInterface';
import NotyfContext from '../../../../../utils/utils';
import './EditRow.css'

const Editable = (item:shortIdInterface) => {

    const history = useHistory()
    const notyf = useContext(NotyfContext);
    const [editData, setEditData] = useState(String)

    const tableData = async () => {
        try{
            const response = await axios.put(`http://localhost:8080/api/${item._shortId}`, {newShort:editData})
            setEditData(response.data)
            notyf.success(' מקוצר שונה בהצלחה URL')
            history.push("/")
        }catch(err:any){
            console.log(err.response)
            notyf.error(err.response)
        }
    }

    return (
        <>
            <input onChange={(e)=>setEditData(e.target.value)} type="text" required placeholder="Enter your Id"></input>
            <button className="saveBTN" onClick={()=>tableData()}>save</button>
        </>
    )
}

export default Editable
