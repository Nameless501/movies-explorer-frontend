import NavigationBar from '../NavigationBar/NavigationBar';
import ProfileButton from '../../UI/ProfileButton/ProfileButton';
import BurgerButton from '../../UI/BurgerButton/BurgerButton';
import './LandingHeaderMenu.css';

function LandingHeaderMenu() {
    return (
        <div className='header-menu-landing'>
            <div className='header-menu-landing__desktop-wrapper'>
                <NavigationBar />
                <ProfileButton />
            </div>
            <div className='header-menu-landing__mobile-wrapper'>
                <BurgerButton />
            </div>
        </div>
    );
}

export default LandingHeaderMenu;