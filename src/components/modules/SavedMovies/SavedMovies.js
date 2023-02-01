import Preloader from '../../UI/Preloader/Preloader';
import UserMoviesList from '../../components/UserMoviesList/UserMoviesList';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import './SavedMovies.css';

function SavedMovies({ isLoading, moviesList=[], errorMessage, handleMovieDelete }) {
    return (
        <section className='saved-movies'>
            {isLoading && <Preloader />}
            {(!isLoading && moviesList.length > 0) &&
                <UserMoviesList
                    moviesList={moviesList}
                    handleMovieDelete={handleMovieDelete}
                />
            }
            {(moviesList.length === 0 && errorMessage) &&
                <ErrorMessage
                    text={errorMessage}
                    place='movies'
                />
            }
        </section>
    );
}

export default SavedMovies;