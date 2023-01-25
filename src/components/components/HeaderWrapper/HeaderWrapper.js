import { Link } from 'react-router-dom';
import { routesConfig } from '../../../utils/configs';
import Logo from '../../UI/Logo/Logo';
import SideBar from '../../components/SideBar/SideBar';
import './HeaderWrapper.css';

function HeaderWrapper({ sideBarIsOpen, handleSideBarToggle, place, children }) {
    return (
        <>
            <header
                className={`
                    header-wrapper
                    ${ place ? 'header-wrapper_place_' + place : null }
                `}
            >
                <Link to={routesConfig.main} >
                    <Logo />
                </Link>
                <>
                    {children}
                </>
            </header>
            <SideBar
                isOpen={sideBarIsOpen}
                handleSideBarClose={handleSideBarToggle}
            />
        </>
    );
}

export default HeaderWrapper;