import React, { useState } from 'react'
import ShortUrl from '../ShortUrl/ShortUrl'
import './TableNavBar.css'
import ReportTable from '../Reports/ReportTable/ReportTable'

const FullTable = () => {
    
    const [value, setValue] = useState(0)
    
    return (
        <div className="divBTN">
            <button onClick={()=>{setValue(1)}} className="tableBTN">דוחות</button>
            <button onClick={()=>{setValue(0)}} className="tableBTN">מקוצר URL</button>
            <>
                {value !== 0 ? <ReportTable/> : <ShortUrl/>}
            </>
        </div>
    )
}

export default FullTable
