import useMoviesCardsRender from '../../../hooks/useMoviesCardsRender';
import MoviesList from '../../components/MoviesList/MoviesList';
import MoreButton from '../../UI/MoreButton/MoreButton';
import Preloader from '../../UI/Preloader/Preloader';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import './Movies.css';

function Movies({ isLoading, moviesList=[], userMoviesList=[], errorMessage, handleMovieSave, handleMovieDelete }) {
    const { renderedMovies, showMoreMovies, renderButton } = useMoviesCardsRender(moviesList);

    return (
        <section className='movies'>
            {isLoading && <Preloader />}
            {(!isLoading && renderedMovies.length > 0) &&
                <>
                    <MoviesList
                        moviesList={renderedMovies}
                        userMoviesList={userMoviesList}
                        handleMovieSave={handleMovieSave}
                        handleMovieDelete={handleMovieDelete}
                    />
                    {renderButton &&
                        <MoreButton
                            handleClick={showMoreMovies}
                        />
                    }
                </>
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

export default Movies;