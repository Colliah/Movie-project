import React from 'react'
import Header from '../component/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout