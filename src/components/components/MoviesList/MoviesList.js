import MoviesListWrapper from '../MoviesListWrapper/MoviesListWrapper';
import MovieCard from '../MovieCard/MovieCard';
import CardButton from '../../UI/CardButton/CardButton';
import CardButtonSaved from '../../UI/CardButtonSaved/CardButtonSaved';
import { getMovieId, handleMovieDataFormat } from '../../../utils/utils';

function MoviesList({ moviesList, userMoviesList, handleMovieSave, handleMovieDelete }) {
    return (
        <MoviesListWrapper >
            {moviesList.map(currentMovie => {
                const movieData = handleMovieDataFormat(currentMovie);
                const movieId = getMovieId(movieData, userMoviesList);

                const isOwn = userMoviesList.some(savedMovie => savedMovie.movieId === currentMovie.id);
                const handleDelete = handleMovieDelete.bind(null, movieId);
                const handleSave = handleMovieSave.bind(null, movieData);

                return (
                    <li key={currentMovie.id} >
                        <MovieCard
                            movie={movieData}
                            Button={isOwn ? CardButtonSaved : CardButton}
                            handleClick={isOwn ? handleDelete : handleSave}
                        />
                    </li>
                )
            })
            }
        </MoviesListWrapper>
    );
}

export default MoviesList;