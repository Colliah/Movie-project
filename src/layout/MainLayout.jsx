import React from 'react'
import Header from '../component/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className='h-screen w-screen overflow-y-scroll'>
            <Header />
            <div className='w-full h-full'>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout