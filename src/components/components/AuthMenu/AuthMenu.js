import { Link } from 'react-router-dom';
import SignButton from '../../UI/SignButton/SignButton';
import { routesConfig } from '../../../utils/configs';
import './AuthMenu.css';

function AuthMenu() {
    return (
        <nav className='auth-menu' >
            <ul className='auth-menu__buttons' >
                <li>
                    <Link to={routesConfig.signIn} >
                        <SignButton
                            classType='sign-in'
                            text='Регистрация'
                        />
                    </Link>
                </li>
                <li>
                    <Link to={routesConfig.signUp} >
                        <SignButton
                            classType='sign-up'
                            text='Войти'
                        />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default AuthMenu;