import { useState } from 'react';
import AuthMenu from '../../components/AuthMenu/AuthMenu';
import MainHeaderMenu from '../../components/MainHeaderMenu/MainHeaderMenu';
import HeaderWrapper from '../../components/HeaderWrapper/HeaderWrapper';

function HeaderMain() {
    const [isLoggedIn, setLoggedState] = useState(true);
    const [sideBarIsOpen, setSideBarState] = useState(false);

    function handleSideBarToggle() {
        setSideBarState(current => !current);
    }

    return (
        <HeaderWrapper
            sideBarIsOpen={sideBarIsOpen}
            handleSideBarToggle={handleSideBarToggle}
            place='main'
        >
            {isLoggedIn ?
                <MainHeaderMenu
                    handleSideBarOpen={handleSideBarToggle}
                />
                :
                <AuthMenu />
            }
        </HeaderWrapper>
    );
}

export default HeaderMain;