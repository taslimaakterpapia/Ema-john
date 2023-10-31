import './Header.css';

const Header = () => {
    return (
        <div className='nav'>
            <h1 className='icon'>Ema-John</h1>

            <div className='nav-item'>
                <a href=""> Order </a>
                <a href="">order View</a>
                <a href="">Manage</a>
                <a href="">Login</a>                
            </div>

        </div>
    );
};

export default Header;