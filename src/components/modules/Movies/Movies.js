import moviesList from '../../../utils/moviesList.json';
import savedMoviesList from '../../../utils/savedMoviesList.json'
import MoviesList from '../../components/MoviesList/MoviesList';
import MoreButton from '../../UI/MoreButton/MoreButton';
import Preloader from '../../UI/Preloader/Preloader';
import './Movies.css';

function Movies() {
    return (
        <section className='movies'>
            <MoviesList
                moviesList={moviesList}
                savedMoviesList={savedMoviesList}
            />
            <MoreButton />
            {/* <Preloader /> */}
        </section>
    );
}

export default Movies;