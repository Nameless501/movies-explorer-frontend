import moviesLit from '../../../utils/moviesList.json';
import MovieCard from '../../components/MovieCard/MovieCard';
import MoreButton from '../../UI/MoreButton/MoreButton';
import './Movies.css';

function Movies() {
    return (
        <section className='movies'>
            <ul className='movies__gallery' >
                {moviesLit.map(movie => {
                    return (
                        <li key={movie.id} >
                            <MovieCard { ...movie } />
                        </li>
                    )
                })
                }
            </ul>
            <MoreButton />
        </section>
    );
}

export default Movies;