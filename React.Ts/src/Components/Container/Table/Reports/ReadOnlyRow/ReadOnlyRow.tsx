import React from 'react'
import { shortIdInterface } from '../../../../../Interfaces/shortIdInterface'

const ReadOnly = (item:shortIdInterface) => {

    return (
        <>
            <a href={`http://localhost:8080/redirect/${item._shortId}`}>{`http://localhost:8080/redirect/${item._shortId}`}</a>
        </>
    )
}

export default ReadOnly
