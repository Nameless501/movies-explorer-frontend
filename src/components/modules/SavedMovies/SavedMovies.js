import { useState, useEffect } from 'react';
import moviesList from '../../../utils/savedMoviesList.json';
import MoviesList from '../../components/MoviesList/MoviesList';
import Preloader from '../../UI/Preloader/Preloader';
import './SavedMovies.css';

function SavedMovies() {
    const [isLoading, setLoadingState] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoadingState(false), 1000);
    }, [])

    return (
        <section className='saved-movies'>
            {isLoading ?
                <Preloader />
                :
                <>
                    <MoviesList
                        moviesList={moviesList}
                        isSavedMoviesPage={true}
                    />
                </>
            }
        </section>
    );
}

export default SavedMovies;