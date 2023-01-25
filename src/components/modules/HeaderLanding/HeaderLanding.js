import { useState } from 'react';
import AuthMenu from '../../components/AuthMenu/AuthMenu';
import LandingHeaderMenu from '../../components/LandingHeaderMenu/LandingHeaderMenu';
import Logo from '../../UI/Logo/Logo';
import SideBar from '../../components/SideBar/SideBar';
import './HeaderLanding.css';

function HeaderLanding() {
    const [isLoggedIn, setLoggedState] = useState(true);
    const [sideBarIsOpen, setSideBarState] = useState(false);

    function handleSideBarToggle() {
        setSideBarState(current => !current);
    }

    return (
        <>
            <header className='header-landing'>
                <Logo />
                {isLoggedIn ?
                    <LandingHeaderMenu
                        handleSideBarOpen={handleSideBarToggle}
                    />
                    :
                    <AuthMenu />
                }
            </header>
            <SideBar
                isOpen={sideBarIsOpen}
                handleSideBarClose={handleSideBarToggle}
            />
        </>
    );
}

export default HeaderLanding;