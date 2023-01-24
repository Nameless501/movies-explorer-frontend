import moviesList from '../../../utils/savedMoviesList.json';
import MoviesList from '../../components/MoviesList/MoviesList';
import Preloader from '../../UI/Preloader/Preloader';
import './SavedMovies.css';

function SavedMovies() {
    return (
        <section className='saved-movies'>
            <MoviesList
                moviesList={moviesList}
                isSavedMoviesPage={true}
            />
            {/* <Preloader /> */}
        </section>
    );
}

export default SavedMovies;