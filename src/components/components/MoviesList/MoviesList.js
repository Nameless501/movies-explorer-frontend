import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.css';

function MoviesList({ moviesList }) {
    return (
            <ul className='movies-list' >
                {moviesList.map(movie => {
                    return (
                        <li key={movie.id} >
                            <MovieCard { ...movie } />
                        </li>
                    )
                })
                }
            </ul>
    );
}

export default MoviesList;