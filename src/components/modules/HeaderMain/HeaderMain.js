import AuthMenu from '../../components/AuthMenu/AuthMenu';
import MainHeaderMenu from '../../components/MainHeaderMenu/MainHeaderMenu';
import Logo from '../../UI/Logo/Logo';
import './HeaderMain.css';

function HeaderMain() {
    return (
        <header className='header-landing'>
            <Logo />
            {/* <AuthMenu /> */}
            <MainHeaderMenu />
        </header>
    );
}

export default HeaderMain;