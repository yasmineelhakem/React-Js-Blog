import Footer from './Footer.js';
import Navbar from './Navbar.js';
import Header from './Header.js';
import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';

const Layout = () => {

    const [search, setSearch] = useState('')

    return (
        <div className="App">
            <Header title="React JS Blog" />
            <Navbar search={search} setSearch={setSearch} />
            <Outlet />
            <Footer />
        </div>

    )
}

export default Layout;