import HeaderMain from '../../modules/HeaderMain/HeaderMain';
import Footer from '../../components/Footer/Footer';
import MoviesSearch from '../../modules/MoviesSearch/MoviesSearch';
import './MoviesPage.css';

function MoviesPage() {
    return (
        <main className='movies-page'>
            <HeaderMain />
            <MoviesSearch />
            <Footer />
        </main>
    );
}

export default MoviesPage;