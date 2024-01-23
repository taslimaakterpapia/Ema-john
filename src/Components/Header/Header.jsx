import './Header.css';
import navicon from "../../assets/favicon.ico";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div >
            <div className='nav'>
            <h1 className='img'><img src={navicon} alt="" />
                <span className='icon'>ma-John</span></h1>

            <div className='nav-item'>
                <Link to="/"> Order </Link>
                <Link to="/order">order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>                
            </div>
            </div>

        </div>
    );
};

export default Header;