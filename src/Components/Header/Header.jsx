import './Header.css';
import navicon from "../../assets/favicon.ico";

const Header = () => {
    return (
        <div >
            <div className='nav'>
            <h1 className='img'><img src={navicon} alt="" />
                <span className='icon'>ma-John</span></h1>

            <div className='nav-item'>
                <a href=""> Order </a>
                <a href="">order Review</a>
                <a href="">Manage Inventory</a>
                <a href="">Login</a>                
            </div>
            </div>

        </div>
    );
};

export default Header;