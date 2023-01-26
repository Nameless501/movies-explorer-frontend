import { useState } from 'react';
import HeaderWrapper from '../../components/HeaderWrapper/HeaderWrapper';
import AuthMenu from '../../components/AuthMenu/AuthMenu';
import LandingHeaderMenu from '../../components/LandingHeaderMenu/LandingHeaderMenu';

function HeaderLanding() {
    const [isLoggedIn, setLoggedState] = useState(false);
    const [sideBarIsOpen, setSideBarState] = useState(false);

    function handleSideBarToggle() {
        setSideBarState(current => !current);
    }

    return (
        <HeaderWrapper
            sideBarIsOpen={sideBarIsOpen}
            handleSideBarToggle={handleSideBarToggle}
            place='landing'
        >
            {isLoggedIn ?
                <LandingHeaderMenu
                    handleSideBarOpen={handleSideBarToggle}
                />
                :
                <AuthMenu />
            }
        </HeaderWrapper>
    );
}

export default HeaderLanding;