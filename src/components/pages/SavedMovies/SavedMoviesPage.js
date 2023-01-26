import HeaderMain from '../../modules/HeaderMain/HeaderMain';
import Footer from '../../components/Footer/Footer';
import MoviesSearch from '../../modules/MoviesSearch/MoviesSearch';
import SavedMovies from '../../modules/SavedMovies/SavedMovies';
import './SavedMoviesPage.css';

function SavedMoviesPage() {
    return (
        <div className='saved-movies-page' >
            <HeaderMain />
            <main className='saved-movies-page__content' >
                <MoviesSearch />
                <SavedMovies />
            </main>
            <Footer />
        </div>
    );
}

export default SavedMoviesPage;