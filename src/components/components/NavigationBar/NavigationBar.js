import NavigationLink from '../../UI/NavigationLink/NavigationLink';
import { routesConfig } from '../../../utils/configs';
import './NavigationBar.css';

function NavigationBar({ place }) {
    return (
        <nav className='navigation-bar' >
            <ul
                className={`
                    navigation-bar__links-list
                    ${ place ? 'navigation-bar__links-list_place_' + place : null }
                `}
            >
                <li>
                    <NavigationLink
                        to={routesConfig.movies}
                        text='Фильмы'
                        place={place}
                    />
                </li>
                <li>
                    <NavigationLink
                        to={routesConfig.savedMovies}
                        text='Сохранённые фильмы'
                        place={place}
                    />
                </li>
            </ul>
        </nav>
    );
}

export default NavigationBar;