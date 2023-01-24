import HeaderMain from '../../modules/HeaderMain/HeaderMain';
import Footer from '../../components/Footer/Footer';
import MoviesSearch from '../../modules/MoviesSearch/MoviesSearch';
import SavedMovies from '../../modules/SavedMovies/SavedMovies';
import './SavedMoviesPage.css';

function SavedMoviesPage() {
    return (
        <main className='saved-movies-page'>
            <HeaderMain />
            <MoviesSearch />
            <SavedMovies />
            <Footer />
        </main>
    );
}

export default SavedMoviesPage;