import { useState } from 'react';
import { useUserContext } from '../../../contexts/UserContext';
import AuthMenu from '../../components/AuthMenu/AuthMenu';
import MainHeaderMenu from '../../components/MainHeaderMenu/MainHeaderMenu';
import HeaderWrapper from '../../components/HeaderWrapper/HeaderWrapper';

function HeaderMain() {
    const { userIsLogged } = useUserContext();
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
            {userIsLogged ?
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