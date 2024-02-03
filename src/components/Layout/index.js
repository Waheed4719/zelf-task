import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const Layout = ({ children }) => {
    return (
        <div className='main-layout'>
            <Header />
            <div className='container'>
            {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout