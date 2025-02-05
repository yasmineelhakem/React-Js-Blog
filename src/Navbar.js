import { Link } from 'react-router-dom';
import Search from './Search.js';

const Navbar = () => {

    
    return (
        <nav className="Nav">
            <Search />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Post">Post</Link></li>
                <li><Link to="/About">About</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar