import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar';
import Dashboard from '../../pages/Dashboard';
import Customer from '../../pages/Customer';
import './layout.css'

const Layout = () => {
  return (
    <BrowserRouter>
          <div className="layout">
            <Sidebar />
            <div className="layout__content">
                <div className="layout__content-main">
                    <Routes>
                      <Route path="/" element={<Dashboard/>}/>
                      <Route path="/customers" element={<Customer/>}/>
                    </Routes>
                </div>
            </div>
          </div>
    </BrowserRouter>
  )
}

export default Layout