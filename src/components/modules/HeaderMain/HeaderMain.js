import { useState } from 'react';
import AuthMenu from '../../components/AuthMenu/AuthMenu';
import MainHeaderMenu from '../../components/MainHeaderMenu/MainHeaderMenu';
import Logo from '../../UI/Logo/Logo';
import './HeaderMain.css';

function HeaderMain() {
    const [isLoggedIn, setLoggedState] = useState(true);

    return (
        <header className='header-main'>
            <Logo />
            {isLoggedIn ?
                <MainHeaderMenu />
                :
                <AuthMenu />
            }
        </header>
    );
}

export default HeaderMain;