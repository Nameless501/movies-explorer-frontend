import NavigationLink from '../../UI/NavigationLink/NavigationLink';
import { routesConfig } from '../../../utils/configs';
import './NavigationBar.css';

function NavigationBar() {
    return (
        <nav className='navigation-bar' >
            <ul className='navigation-bar__links-list' >
                <li>
                    <NavigationLink
                        to={routesConfig.movies}
                        text='Фильмы'
                    />
                </li>
                <li>
                    <NavigationLink
                        to={routesConfig.savedMovies}
                        text='Сохранённые фильмы'
                    />
                </li>
            </ul>
        </nav>
    );
}

export default NavigationBar;