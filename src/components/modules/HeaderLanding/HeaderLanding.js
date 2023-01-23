import AuthMenu from '../../components/AuthMenu/AuthMenu';
import LandingHeaderMenu from '../../components/LandingHeaderMenu/LandingHeaderMenu';
import Logo from '../../UI/Logo/Logo';
import './HeaderLanding.css';

function HeaderLanding() {
    return (
        <header className='header-landing'>
            <Logo />
            {/* <AuthMenu /> */}
            <LandingHeaderMenu />
        </header>
    );
}

export default HeaderLanding;