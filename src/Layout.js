import Footer from './Footer.js';
import Navbar from './Navbar.js';
import Header from './Header.js';
import { Outlet } from 'react-router-dom';

const Layout = ({search, setSearch,handleSearchClick}) => {

    return (
        <div className="App">
            <Header title="React JS Blog" />
            <Navbar search={search} setSearch={setSearch} handleSearchClick={handleSearchClick}/>
            <Outlet />
            <Footer />
        </div>

    )
}

export default Layout;