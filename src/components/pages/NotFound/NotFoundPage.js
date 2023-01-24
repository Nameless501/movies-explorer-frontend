import NavigationLink from '../../UI/NavigationLink/NavigationLink';
import { routesConfig } from '../../../utils/configs';
import './NotFoundPage.css';

function NotFoundPage() {
    return (
        <main className='not-found-page'>
            <div className='not-found-page__title-wrapper' >
                <h2 className='not-found-page__title' >
                    404
                </h2>
                <p className='not-found-page__subtitle' >
                    Страница не найдена
                </p>
            </div>
            <NavigationLink
                to={routesConfig.main}
                text='Назад'
                place='not-found'
            />
        </main>
    );
}

export default NotFoundPage;