import { useState } from 'react';
import AuthMenu from '../../components/AuthMenu/AuthMenu';
import MainHeaderMenu from '../../components/MainHeaderMenu/MainHeaderMenu';
import Logo from '../../UI/Logo/Logo';
import SideBar from '../../components/SideBar/SideBar';
import './HeaderMain.css';

function HeaderMain() {
    const [isLoggedIn, setLoggedState] = useState(true);
    const [sideBarIsOpen, setSideBarState] = useState(false);

    function handleSideBarToggle() {
        setSideBarState(current => !current);
    }

    return (
        <>
            <header className='header-main'>
                <Logo />
                {isLoggedIn ?
                    <MainHeaderMenu
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

export default HeaderMain;