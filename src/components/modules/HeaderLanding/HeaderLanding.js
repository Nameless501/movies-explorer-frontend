import { useState } from 'react';
import AuthMenu from '../../components/AuthMenu/AuthMenu';
import LandingHeaderMenu from '../../components/LandingHeaderMenu/LandingHeaderMenu';
import Logo from '../../UI/Logo/Logo';
import './HeaderLanding.css';

function HeaderLanding() {
    const [isLoggedIn, setLoggedState] = useState(false);

    return (
        <header className='header-landing'>
            <Logo />
            {isLoggedIn ?
                <LandingHeaderMenu />
                :
                <AuthMenu />
            }
        </header>
    );
}

export default HeaderLanding;