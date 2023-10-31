import './Header.css';

const Header = () => {
    return (
        <div className='nav'>
            <h1 className='icon'>Ema-John</h1>

            <div className='nav-item'>
                <a href=""> Order </a>
                <a href="">order Review</a>
                <a href="">Manage Inventory</a>
                <a href="">Login</a>                
            </div>

        </div>
    );
};

export default Header;