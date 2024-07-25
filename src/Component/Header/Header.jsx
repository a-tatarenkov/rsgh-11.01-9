import logo from '../../assets/img/1600w-JmYWTjUsE-Q.webp';
import './Header.css';

const Header = () => {
    return (
        <header className='Header'>
            <img src={logo} alt=""/>
            <nav>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </nav>
        </header>
    )
}

export default Header;