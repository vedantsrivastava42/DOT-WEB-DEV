import React from 'react'
import { Outlet } from 'react-router-dom'
const mainheader = () => {
    return (
        <div>
            <Outlet/>
        </div>
    )
}

export default mainheader