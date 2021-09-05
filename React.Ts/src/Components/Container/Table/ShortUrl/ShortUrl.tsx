import React, { useContext, useState } from 'react'
import axios from 'axios'
import './ShortUrl.css'
import NotyfContext from '../../../../utils/utils';

const ShortUrl = () => {
    const notyf = useContext(NotyfContext);
    const [_fullUrl,setFullUrl] = useState(String)
    const [shortUrl,setShortUrl] = useState(String)
    
    const handleUrl = async (e: React.FormEvent<HTMLFormElement>) => {
        try{
            e.preventDefault() //prevent the page from refresh after the submit button click
            setShortUrl("") //reset the state for a new link
            const response = await axios.post('http://localhost:8080/api', {_fullUrl} )
            setShortUrl(response.data._shortId)
            notyf.success('נוצר בהצלחה URL')
        }catch(err:any){
            notyf.error(err.response.data)
        }
    }
    
    return (
        <div>
            <form onSubmit={handleUrl}>
            <input type="text" onChange={(e)=>{setFullUrl(e.target.value)}} placeholder="URL כתובת" className="urlINPUT"></input><br/>
                <button type="submit" className="submitBTN">קצר לי</button><br/>
            </form>
        </div>
    )
}

export default ShortUrl
