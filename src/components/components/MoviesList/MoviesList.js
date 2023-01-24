import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.css';

function MoviesList({ moviesList, savedMoviesList = false, isSavedMoviesPage = false }) {
    return (
            <ul className='movies-list' >
                {moviesList.map(currentMovie => {
                    return (
                        <li key={currentMovie.id} >
                            <MovieCard
                                { ...currentMovie }
                                typeSaved={savedMoviesList ?
                                    savedMoviesList.some(savedMovie => savedMovie.id === currentMovie.id) : false
                                }
                                typeDelete={isSavedMoviesPage}
                            />
                        </li>
                    )
                })
                }
            </ul>
    );
}

export default MoviesList;